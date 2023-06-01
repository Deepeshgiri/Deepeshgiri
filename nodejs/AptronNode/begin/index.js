// console.log("hello")


// const first = require('./first')


// console.log(first.x+first.y)
// const http =require('http')

// http.createServer((res,rj)=>{
//     // res.write("hello node")
//     res.write
    
//     res.end ()
// }).listen(5000,function(){
//     console.log("server is running at localhost port no 5000")
// })

// import http from 'http'
// const port= 2000

// http.createServer((req,res)=>{
//     res.write("welcome to node js")
//     res.end()

// }).listen(port,()=>{console.log(`server is running at port http://localhost/${port}`)})


// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.write(JSON.stringify({name:"Deepesh",age:"26",city:'Delhi'}))
//     res.end()
// }).listen(port, console.log("server running"))


// import fs from 'fs'

// fs.mkdirSync('deep')
// fs.writeFileSync('deep/one.txt',"hello world")
// fs.appendFileSync('deep/one.txt'," appended this is written using node")

// let data =fs.readFileSync('deep/one.txt',"utf-8")
// console.log(data)

// fs.renameSync('deep/one.txt','deep/two.txt')
// fs.unlinkSync('deep/two.txt')
// fs.rmdirSync('deep')


////////////////////////////Command line arguments/////////////////////////
// console.log(process.argv)


// const express = require('express')

// const app= express()

// app.get('/',(req,resp)=>{
//     resp.send("app is running")

// })

// app.post('/post',(req,resp)=>{
//     resp.send('post is running')
// })

// app.put('/put', (req,resp)=>{
//     resp.send("put api is working")
// })
// app.listen(5000, console.log ("server is running at port no 5000"))




//express with pagess===========
// const path=require('path')

// const express = require('express')

// const app= express()
// app.get('/',((req,resp)=>{
//     resp.send("this app is running")
// }))
// app.get('/home',((req,resp)=>{
//     resp.send()
// }))
// app.get('/about',((req,resp)=>{
// resp.send()
// }))
// app.get('/contact',((req,resp)=>{
//     resp.send()
// }))

// app.listen(5000, console.log("app is running at port 5000"))

// const express = require ('express')
// const server= express()
// server.get('/',(req,res)=>{
//     res.json({
//         "name":"Deepesh",
//         "Age":26
//     })
// }).listen(5000,()=>console.log("server is running at port5000"))

//=============middleware==================
const express = require('express')

const app = express();

const reqFilter=(req,res,next)=>{
    if(!req){
        res.send("please enter your age")
    }else{
        next()
    }
}
app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send("api working")
})

app.listen(5000)