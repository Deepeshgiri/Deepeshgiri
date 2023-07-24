import  jwt  from "jsonwebtoken";
import userModel from "../models/userModel.js";


//protected routes token base
export const requireSignIn = async(req,res,next)=>{
 
 try {
    //verification of jwt
    const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
    //sending result to user
    req.user = decode
    next()
    
 } catch (error) {
    console.log(error)
 }
}

//admin access
export const isAdmin = async(req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"unauthorized access"
            })
        }else{
            res.send({
                message:"you are admin"
            })
            next()
        }
        
    } catch (error) {
        console.log(error)
        res.status(200).send({
            status:false,
            message:"user is not admin",
            error,
        })
        
    }
}