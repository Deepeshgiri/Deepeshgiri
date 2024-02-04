const UserSchema = require('../Model/UserModel/Usermodel')

const  verified = (req , res, next)=>{
    const {UserMail} = req.body
    const verifiedUser = UserSchema.findOne({UserMail})

    if(verifiedUser.verify !== 1){
        res.status(401).json({msg:"user is not verified"})
        
    }

   
  
}

const createSecretKey = async (req,res,next)=>{

}

module.exports = {verified , createSecretKey}