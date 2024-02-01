const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.json("hello ji")
})

app.listen(3500, ()=>console.log('server running at por 3500'))