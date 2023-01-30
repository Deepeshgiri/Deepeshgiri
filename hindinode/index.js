const express = require('express');
const app = express();
const con = require("./config");
app.use(express.json());

app.get("/list",(req,resp)=>{
    con.query("select * from user",(err,result)=>{
        if(err){
            resp.send("connection error");
        }else{
            resp.send(result);
        }
    })
  
    //resp.send("route done");
});
app.post ("/insert", (req,resp)=>{
    //const data = req.body;
    const data ="insert into user(name,age,email,gender) value ?";
    const value=["mohan","28","moan@test.com","male"]
    con.query(data,value, (err, result, fields)=>{
        if (err) throw err;
        else {
            resp.send(result);
        }
        // else{
        //     resp.send(result);
        // }
    })
    console.log(req.body);
});

// Function to insert multiple Row in database
app.post("/test",(req,resp) => {
  
    // Query to insert multiple rows
    let query = `INSERT INTO user 
        (name, email) VALUES ?;`;
  
    // Values to be inserted
    let values = [
        ['Amit', 'Yellow Park'],
        ['Rishi', 'Park 38'],
        ['Akash', 'Central st 954'],
        ['Pratik', 'Road 989'],
        ['Mangesh', 'Sideway']
    ];
  
    // Executing the query
    db_con.query(query, [values], (err, rows) => {
        if (err) throw err;
        console.log("All Rows Inserted");
    });
});




app.listen(1200);