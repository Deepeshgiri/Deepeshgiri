const mailcontroller = async(req,res)=>{
    console.log(req.body)
    res.send("hello mail")
}
module.exports= mailcontroller