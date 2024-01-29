const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


app.get('api/search',(req,res)=>{
    res.sendDate()
})
app.listen(4000, ()=>{
    console.log(`app is runnuing at port no 4000`)
})