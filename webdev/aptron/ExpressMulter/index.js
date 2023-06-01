const express = require('express')
const multer = require ('multer')



let doc = 123456781234567812345n

console.log(doc)

console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.244Z

const app = express()
 
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,res,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now()+".jpg")
        }
    })
}).single("user_file")

app.post('/upload', upload,(req,resp)=>{
    resp.send("file uploaded")
})

let c


app.get('/', (req,resp)=>{
    resp.send("get api is working")
})
app.listen(5000, () => console.log("server running at 5000"))