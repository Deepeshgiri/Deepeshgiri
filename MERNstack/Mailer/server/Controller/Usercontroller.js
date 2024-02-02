const UserSchema = require('../Model/UserModel/Usermodel.js')
const bcrypt = require('bcrypt')
const  transporter  = require('../Mailer/Mailer.js')

const getAlluser = async (req,res)=>{
 res.status(200).json({msg:"i am all user"})
}





//create new user
const createUser = async (req,res)=>{
    console.log(req.body)
const {UserName,Password,UserMail} = req.body
if (!UserName || !Password ||!UserMail){
    res.status(400).json({msg:"please enter the missing information i.e name, email or password"})
    return
}
const existingUser = await UserSchema.findOne({UserMail})
if (existingUser) {
    res.status(400).json({ "status_code": "400", message: 'User already exists' });
    return;
}
const hashedPassword = await bcrypt.hash(Password , 8)
const newUser  = new UserSchema ({UserName:UserName,Password:hashedPassword,UserMail:UserMail})
if (!existingUser)
await newUser.save()
    res.json({msg:"create success", userinfo : {UserName:UserName,UserMail:UserMail}})

}

//userverification


const userVerification = async (req, res)=>{
const {UserName, UserMail} = req.body

if(!UserMail){
    res.status(400).json({msg:"please enter email"})
    return
}

const user = await UserSchema.findOne({ UserMail})
    console.log(user)
    if (!user) {
        res = { msg: "please enter registered email" }
        return res
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 600000); // OTP expires in 10 minutes

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    const mailOptions = {
        from: 'softspintechnology@gmail.com',
        to: user,
        subject: 'Password Reset OTP',
        text: `Your OTP for verifiaction is: ${otp}`,
    }
    let emailError; 
    try {
        await transporter.sendMail(mailOptions)
            console.log("email sent success")
        
    } catch (error) {
       
        emailError = error;
    
    // Handle the error based on its properties or values
    if (emailError.code === 'EAUTH') {
      console.error('Invalid authentication details. Please check your email configuration.');
    } else if (emailError.response && emailError.responseCode === 501) {
      console.error('SMTP authentication failed. Please verify your SMTP credentials.');
    } else {
      console.error('Error sending email:', emailError);
    }
    }


}



module.exports= {getAlluser , createUser,userVerification}