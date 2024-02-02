const mongoose = require('mongoose')

const Path = process.env.MONGO_URL

const dbconnect= ()=>{try{
    const dbconnect = mongoose.connect(Path ).then(
        console.log(`mongo db connected at ${Path}`))
}
catch(error){
    
    console.log(error)
}}

module.exports=dbconnect