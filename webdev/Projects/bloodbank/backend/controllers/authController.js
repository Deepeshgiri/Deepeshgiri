import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

//registration controller
const registerController = async(req,res)=>{
 try {
         // existing user
         const existingUser = await userModel.findOne({email:req.body.email})
         // validation
         if(existingUser)
         {
            return res.status(200).send({
                success:false,
                message:"user already exists"
            })
         }
         //hash password
         const salt = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(req.body.password,salt);
         req.body.password=hashPassword;
         //rest data
         const user = await userModel(req.body)
         console.log(req.body);
         await user.save()
         console.log(user);
         return res.status(201).send({
            success:true,
            message:"User registered successfully.",
            user
         })

    
 } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error while register a user",
        error
    })
 }
}

const loginController = async (req,res)=>{
   try {
      //check existing user

      const user = await userModel.findOne({email:req.body.email})
      if (!user){
         return res.status(404).send({
            success:false,
            message:"user not found"
         })
      }
      //compare password

      const comparePassword = await bcrypt.compare(req.body.password, user.password)

      if (!comparePassword){
         return res.status(400).send({
            success:false,
            message:"invalid user or password"
         })
      }
      const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET,{expiresIn:"1d"})

     return res.status(200).send({
         succes:true,
         message:"user logged in successfull",
         user,token
      })
   } catch (error) {
      console.log(error)
      res.status(500).send({success:false,
         message:"something wrong in login api",
         error
      })
   }
}

export const currentUserController = async (req,res)=>{
   console.log(req.body)
   try {
      const user = await userModel.findOne({_id:req.body.userId})
      return res.status(200).send({
         status:true,
         message:"user fetched successfully",
         user
      })
   } catch (error) {
      console.log(error)
      return res.status(500).send({
         status:false,
         message:"unable to find user",
         error
      })
      
   }
}
export {registerController, loginController}