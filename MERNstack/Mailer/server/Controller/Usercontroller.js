const UserSchema = require('../Model/UserModel/Usermodel.js')
const bcrypt = require('bcrypt')
const transporter = require('../Mailer/Mailer.js')
const JWT = require('jsonwebtoken')



const generateJWToken = async (userId) => {
    const secretKey = process.env.SECRET_KEY
    return JWT.sign({ userId }, secretKey, { expiresIn: "3d" })
}


const verification = async (req , res)=>{
    res.send("verifying")
}



const getAlluser = async (req, res) => {
    res.status(200).json({ msg: "i am all user" })
}





//create new user
const createUser = async (req, res) => {
    console.log(req.body)
    const { UserName, Password, UserMail } = req.body
    if (!UserName || !Password || !UserMail) {
        res.status(400).json({ msg: "please enter the missing information i.e name, email or password" })
        return
    }
    const existingUser = await UserSchema.findOne({ UserMail })
    if (existingUser) {
        res.status(400).json({ "status_code": "400", message: 'User already exists' });

        return;
    }
    const hashedPassword = await bcrypt.hash(Password, 8)
    const newUser = new UserSchema({ UserName: UserName, Password: hashedPassword, UserMail: UserMail })
    if (!existingUser)
        await newUser.save()
    res.json({ msg: "create success", userinfo: { UserName: UserName, UserMail: UserMail } })

}


//user Log in


const userLogin = async (req, res) => {
    const { UserMail, Password } = req.body
    console.log(req.body)
    //check mail and password
    if (UserMail && Password == null) {
        res.status(400).json({ msg: "please enter valid Email or Password" })
        return
    }
    const user = await UserSchema.findOne({ UserMail })
    if (!user) {
        res.status(400).json({ msg: "User not found please signup or try login with valid email" })
        return
    }
    const comparePassword = await bcrypt.compare(Password, user.Password)
    if (!comparePassword) {
        res.status(401).json({ status_code: 401, message: 'Please enter correct password' });
        return;
    }
    // TOKEN GENERATION
    const token = await generateJWToken(user._id);
    user.token = token;
    await user.save();
    res.status(200).json({ msg: "user logged in success", user })

}
//userverification


const sendOTP = async (req, res) => {
    const { UserName, UserMail } = req.body

    if (!UserMail) {
        res.status(400).json({ msg: "please enter email" })
        return
    }

    const user = await UserSchema.findOne({ UserMail: UserMail })
    if (user == null) {
        res.status(400).json({ msg: "please enter registered email" })
        return
    }


    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 600000); // OTP expires in 10 minutes

    user.otp = otp;
    user.otpExpires = otpExpires;
    console.log(otp)
    await user.save();

    const mailOptions = {
        from: 'softspintechnology@gmail.com',
        to: user,
        subject: 'verifiaction OTP',
        text: `Your OTP for verifiaction is: ${otp}`,
    }
    let emailError;
    try {
        await transporter.sendMail(mailOptions)
        console.log("email sent success")
        return res.status(200).json({ msg: "otp sent successfully please check your provided mail inbox or spam " })

    } catch (error) {

        emailError = error;
        return res.status(400).json({ msg: "invalid email address" })
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


const verifyEmailId = async (req, res) => {
    const { otp, UserMail } = req.body

    const user = await UserSchema.findOne({ UserMail })
    if (!user) {
        res.status(400).json({ msg: "user not found" })
        return
    }
    //compare otp
    if (otp === user.otp) {
        await user.updateOne({ Verified: 1, otp: null, otpExpires: null })
        res.status(200).json({ msg: "user verified successfully" })
        return
    } else {
        res.status(400).json({ msg: "provided otp is wrong or expired" })
    }

}

module.exports = { getAlluser, createUser, sendOTP, verifyEmailId, userLogin ,verification}