import { comparePassword, hashpassword } from "../helpers/authHelpers.js"
import userModel from "../models/userModel.js"


import JWT from 'jsonwebtoken'

const registrationController = async (req,res)=>{

    // var name = req.body.data.name
    //     var email= req.body.data.email
    //     var password= req.body.data.password
    //     var phone = req.body.data.phone
    //     var address = req.body.data.address
    console.log(req.body)
    try {
        //destructure
        const {name,email,password,phone,address}=req.body

        

        console.log(req.body)
        //validation
        if(!name){
            return res.send({error:"please provide name"})
        }
        if(!email){
            return res.send({error:"please provide email"})
        }
        if(!password){
            return res.send({error:"please provide password"})
        }
        if(!phone){
            return res.send({error:"please provide phone"})
        }
        if(!address){
            return res.send({error:"please provide address"})
        }
        //user check
        const existingUser = await userModel.findOne({email})
        //existing user ==
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"already registered please login"
            })
        }
//register user 
        const hashedPassword = await hashpassword(password)
        const user = new userModel({name, email, phone, address, password:hashedPassword})
        console.log(user)
        user.save()

        res.status(201).send({
            success:true,
            message:"user registered successfully",
            user
        })
    }
    catch(error){
        console.log (error)
        res.status(500).send({
            success:false,
            message:"error in registration",
            error
        })
    }

}

const loginController = async (req,res)=>{

    console.log(req.body)
    try{
        const {email,password}= req.body
        console.log(email,password)

        // validation  for login
        if(!email||!password){
            return res.status(404).send({
                success:false,
                message:"inavlid email or password"
            })
        }
        const user = await userModel.findOne({email})
        console.log(user)
        if(!user){
            console.log(user)
            return res.status(404).send({
                success:false,
                message:"email is not registered"

            })
        }
        const match = await comparePassword(password , user.password)
        if (!match){
            return res.status(200).send({
                success:false,
                message:"wrong password"

            })
        }
        //token
        
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET_TOKEN, {expiresIn:"2d"})
        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token
        })
       

    }catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in login",
            error
        })
    }

}
//test controller
const testController = (req,res)=>{
res.send({
    message:"protected route"
})
}
console.log("protected route")

export {registrationController,loginController,testController}