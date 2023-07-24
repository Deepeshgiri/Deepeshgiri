const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const server = express()


const filter = (req,res,next)=>{
    if(!req.query.age){
        res.send ("please provide your age")
    }else if(!req.query.age<18){
        res.send("you are underage so you cannot acces the page")
    }
    else{
        next()
    }
}
 server.use (filter)

const aport = process.env.PORT
server.get('/',(req,res)=>{
    res.send({
        message:"this response is from server "
    })
        // <h1>this response is from server </h1>
})

server.listen( aport, console.log(`server is running at port no ${process.env.PORT}`))