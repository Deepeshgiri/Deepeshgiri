const mongoose = require('mongoose')

const schema = mongoose.Schema

const UserSchema = new schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        required:True
    },
    Usermail:{
        type:String,
        required:true,
        unique:true
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    },
     otp:{
        type:String
    },
    otpExpires:{
        type:Date
    },
    token:{
        type:String,
    }

})

module.exports = UserSchema = mongoose.model('user' ,UserSchema)