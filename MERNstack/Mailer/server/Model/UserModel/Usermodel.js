const mongoose = require('mongoose')

const schema = mongoose.Schema

const UserSchema = new schema({
    UserName: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    UserMail: {
        type: String,
        required: true,
        unique: true
    },
    CreateDate: {
        type: Date,
        default: Date.now()
    },
    Verified: {
        type: Number,
        default: 0
    },
    otp: {
        type: String
    },

    otpExpires: {
        type: Date
    },
    token: {
        type: String,
    }

})

module.exports = mongoose.model('user', UserSchema)