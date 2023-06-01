import  JWT  from "jsonwebtoken";

//protected route token based 

 export const requireSignIn = async (req,res,next)=>{
    try{
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET_TOKEN)
        next()

    }catch(error){
        console.log(error)
    }
}