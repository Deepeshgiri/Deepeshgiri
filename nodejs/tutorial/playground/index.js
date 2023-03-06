const express = require ('express')
const fs = require('fs')
//const datafile = require('1-json.json')
const app = express()
// app.use(express.json())


const loadNotes = function(){
    try{
        const databuffer = fs.readFileSync("1-json.json")
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return []
    }
}

app.get('/weather',(req, resp)=>{
    console.log('connected')
    resp.send(loadNotes())
})

app.listen(2000)