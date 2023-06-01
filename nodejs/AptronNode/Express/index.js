// const express = require('express')

// const { MongoClient } = require("mongodb")

// const app = express()

// const midWare =(req,res,next)=>{
//     if(!req.query.age){
//         res.send("please provide age")
//     }
//     else if(req.query.age<18){
//         res.send("you cannot access this page")
//     }
//     else{
//         next()
//     }
// }
// // app.use(midWare)

// app.get('/',(req,resp)=>{
//     resp.send("hello i am first page")
// })
// app.get('/about',(req,resp)=>{
//     resp.send("this is about page")
// })
// app.get('/home',midWare, (req,resp)=>{
//     resp.send("this is home page")
// })

// app.listen(5000,()=>{
//     console.log('express started at port 5000')
// })



// Group level middle ware
//  const express = require('express')
//  const app=express()
// const route = express.Router()
// const midWare = require('./middleware/middleware')
// route.use(midWare)
// app.use('/',midWare)


//  app.get('/',(req,resp)=>{
//     resp.send("i m first page")
//  })
//  app.get('/about',(req,resp)=>{
//     resp.send("this is about page")
// })
// app.get('/home',midWare, (req,resp)=>{
//     resp.send("this is home page")
// })
//   app.listen(5000, ()=>{
//     console.log(' i am running at port 5000')
//   })


//////////////////////////////mongodb middleware

// const {MongoClient}= require('mongodb')
// const url=`mongodb://127.0.0.1:27017`
// const database ='aptron'
// const client = new MongoClient(url)

// async function show (){
//     await client.connect()
//     console.log("connected")
// }
// show()


// const {MongoClient}= require('mongodb')

// url=`mongodb://127.0.0.1:27017`
// const dbname="aptron"

// const client = new MongoClient(url)


// async function Main (){
// try{

    
//         const connection =await client.connect()
//         const db = connection.db(dbname)
//         const collection = db.collection('users')
//         const data = await collection.find().toArray()
    
    
//         console.log("db connected")
//         console.log(data)
  
// }catch(e){
//     console.log(e)
// }
// }
// Main()      


// const {MongoClient}= require('mongodb')

// url=`mongodb://127.0.0.1:27017`
// const dbname="aptron"

// const client = new MongoClient(url)


// async function Main (){
// try{

    
//         const connection =await client.connect()
//         const db = connection.db(dbname)
//         const collection = db.collection('teachers')
//         const data = await collection.insertOne({Name:"aasna", Age:"59",City:"Delhi"})
    
    
//         console.log("db connected")
//         console.log(data)
  
// }catch(e){
//     console.log(e)
// }
// }
// Main()
 



// const {MongoClient}= require('mongodb')

// url=`mongodb://127.0.0.1:27017`
// const dbname="aptron"

// const client = new MongoClient(url)


// async function Main (){
// try{

    
//         const connection =await client.connect()
//         const db = connection.db(dbname)
//         const collection = db.collection('teacher')
//         const data1 = await collection.insertOne({Name:"aasna", Age:"59",City:"Delhi"})
//         const data = await collection.updateOne({Name:"aasna"},{$set:{Name:"mahtab"}})
    
    
//         console.log("db connected")
//         if(data.acknowledged){
//             console.log(data,"data updated successfully")
//         }else{
//             console.log("you ran with some error")
//         }
        
  
// }catch(e){
//     console.log(e)
// }
// }
// Main()




//mongoose start here


const mongoose = require ('mongoose')
dbName='aptron'
url=`mongodb://127.0.0.1:27017/${dbName}`


mongoose.connect(url).then(()=>console.log("connected"))

const laptopSchema = new mongoose.Schema({
    name:String,
    id:Number,
    brand:String,
    model:String

})
const data = mongoose.model('laptop',laptopSchema)
async function savedata(){
    const record=new data({name:"ratbook" ,id:2 , brand:"mapple",model:"mapplebook"})
    // await record.save()
    await record.deleteOne({name:"ratbook"})
}

savedata()



