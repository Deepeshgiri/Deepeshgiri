const  transporter  = require('../Mailer/Mailer.js')
const UserSchema = require('../Model/UserModel/Usermodel.js')


const VerificationService = async (mail, res) => {
    const user = await UserSchema.findOne({ UserMail: mail })
    console.log(user)
    if (!user) {
        res = { msg: "please enter valid email" }
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

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error:', error);
        }
        
        

    });
    if (error.responseCode === 501){
        res = { msg: "please enter valid email eamil cant send" }
        return res
    }
   
}

//create OTP


module.exports = { VerificationService }