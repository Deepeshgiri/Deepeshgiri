// const { Chalk, default: chalk } = require('chalk')
const express = require ('express')
const app = express()

// const chalk = require('chalk')

const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/aptron')
  .then(() => console.log('Connected!'));



const Schema = mongoose.Schema;


const BlogPost = new Schema({
  
 id:String,
 name:String
});
let product = mongoose.model('product', BlogPost)
app.use(express.json())
 
app.get('/',async (req,res)=>{
    let result= await product.find()
    res.send(result)
})

app.get('/record/:id', async (req,res)=>{
    console.log(req.params)
    let r1=await product.find(req.params)
    res.send(r1)
    console.log(r1)
})
// app.put('/put',async (req,res)=>{


//     res.send('put api is working')
// })

app.post('/post',async (req,res)=>{
    let data =  new product(req.body)
    let result= await data.save()
    res.send('post api is working')
    console.log(result)
})

app.delete('/delete/:id', async(req,res)=>{
    let d1= await product.deleteOne(req.params)
    res.send("deleted data successfully")
})

app.put('/update/:id',async  (req,res)=>{
    let u1 = await product.updateOne(req.params,{$set:req.body})
    console.log(u1)
})

app.get('/search/:key', async (req,res)=>{
    console.log(req.params)
    let search = await product.find(
        {"name":{"regex":req.params.key}
})
    res.send(search)
    console.log
})


app.listen(5000, ()=> console.log('i am running at 5000'))