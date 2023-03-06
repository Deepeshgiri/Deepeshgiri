const mysql = require ('mysql2')
const con = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:"",
    database:"test"
});
con.connect((err)=>{
    if (err){
        console.warn("error in connection");
    
    }
    else {
        console.log("database connected");
    }
})
// con.query("select * from user",(err,result,field)=>{
//     console.log(result);
//    // console.log(field);
// })
module.exports=con;