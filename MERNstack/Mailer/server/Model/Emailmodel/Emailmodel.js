const mongoose = require('mongoose')

const schema = mongoose.Schema

const MailSchema = new schema({
    Mailid:{
        type:String,
        required:true,
    },
    MailContent:{
        type:String,
        required:true
    },
    Usermail:{
        type:String,
        required:true,
        
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = Email = mongoose.model('mail' , MailSchema)