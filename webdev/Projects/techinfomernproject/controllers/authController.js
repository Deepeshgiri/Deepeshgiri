import express from 'express'
import userModel from '../models/userModel.js'
import { comparePassword, hashPassword } from './../helpers/authHelpers.js';
import  Jwt  from 'jsonwebtoken';


export const registerController= async (req,res)=>{
    try {
        const {name,email,password,phone,address} = req.body
        console.log("i got request", req.body)

        //validation of input
        if(!name){
            return res.send({message:"name is required"})
        }if(!email){
            return res.send({message:"email is required"})
        }if(!phone){
            return res.send({message:"phone is required"})
        }if(!password){
            return res.send({message:"password is required"})
        }if(!address){
            return res.send({message:"address is required"})
        }
        //check existing users
        const existingUser = await userModel.findOne({email})
        if (existingUser){
            return res.status(200).send({
                success:true,
                message:'already registered please login'
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user =await new userModel({name,email,phone,address,password:hashedPassword}).save()
        res.status(201).send({
            success:true,
            message:"user registered succesfully",
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in registration",
            error
        })
    }

}

//login controller
 export const loginController = async (req,res)=>{
    const {email,password} = req.body
try {
    if(!email||!password){
        return res.status(404).send({
            status:false,
            message:"invalid email or password"})
    }
    //check user
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).send({
            status:false,
            message:"email not registered"
        })
    }
    const match = await comparePassword(password,user.password)
    if(!match){
        return res.status(200).send({
            status:false,
            message:"invalid password"
        })
    }
 
    //token
    const token = await Jwt.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:"2d"})

    res.status(200).send({
        success:true,
        message:"user logged in successfully",
        user:{
            name:user.name,
            email:user.email,
            address:user.address,
            phone:user.phone,
            token:token
        }

    })
    
    
} catch (error) {
    res.status(500).send({
        status:false,
        message:"error in login",
        error
    })
    
}
   
 }

export const testController = async (req,res)=>{
    res.send({
        status:true,
        message:"testcontroller api working"
    })
}
//forgot password controller
export const forgotPasswordController = async(req,res)=>{

    try {
        const {email,answer, newPassword} = req.body
        if (!email){
            res.status(400).send({mesage:"email is required!"})
        }
        if (!answer){
            res.status(400).send({mesage:"question is required!"})
        }
        if (!newPassword){
            res.status(400).send({mesage:"New Password  is required!"})
        }

        const user = await userModel.findOne({email,answer})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"invalid email or answer"
            })
        }
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:"password reset successfully",
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"something went wrong",
            error
        })
    }
}