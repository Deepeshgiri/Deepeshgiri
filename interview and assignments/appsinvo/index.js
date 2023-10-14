const express = require('express')
const morgan = require ('morgan')
const JWT = require ('jsonwebtoken')
require('dotenv').config()
const User = require('./userSchema/user.js')


const app = express()
app.use(morgan('dev'))

app.use(express())
app.use(express.json());

app.get('/allusers', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get users' });
    }
  })

function generateToken(userId) {
    const secretKey = process.env.SECRET_KEY;
    return JWT.sign({ userId }, secretKey, { expiresIn: "7d" });
  }



app.post('/user', async (req,res)=>{
    try {
        const { name, email, password, address, latitude, longitude, status } =
      req.body;
      const user = new User({
        name,
        email,
        password,
        address,
        latitude,
        longitude,
        status,
      });
 // TOKEN GENERATION
    const token = await generateToken(user._id);
    user.token = token;

    await user.save();

// Construct the response in the specified format
     const response = {
        status_code: 200,
        message: "User created successfully",
        data: {
          name: user.name,
          email: user.email,
          address: user.address,
          latitude: user.latitude,
          longitude: user.longitude,
          status: user.status,
          register_at: user.register_at,
          token: user.token,
        },
      };
      res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ status_code: 400, message: error.message, data: null });
        console.log(error)
    }  

})

app.patch('/user/status', async (req,res)=>{
  try {
    const token = (req.header("Authorization"))
    const decode = JWT.verify(token, process.env.SECRET_KEY)
    //console.log(decode)
    const userId = decode.userId
    //console.log(req.body)
    const newStatus = req.body.status
    //console.log(newStatus)

    const result = await User.findOneAndUpdate({_id:userId},{status:Boolean(newStatus)},{new:true})

    if (!result) {
      return res.status(404).json({ status_code: 404, message: "User not found" });
    }

    const response = {
      status_code: 200,
      message: "User status updated successfully",
      result
    };

    res.status(200).json(response);
    
  } catch (error) {
    res.status(400).json({ status_code: 400, message: error.message })
    
  }
})


// Calculate distance
app.get("/distance", async (req, res) => {
  try {
    // console.log(req);
    const token = req.header("Authorization").replace("Bearer ", "")
    const decoded = JWT.verify(token, process.env.SECRET_KEY)
    const user = await User.findOne({ _id: decoded.userId })
    // console.log(user);
    // console.log(req.query);

    const { Destination_Latitude, Destination_Longitude} = req.query
    // console.log(req.query)

    // User current latitude and longitude
    const userLatitude = user.latitude
    const userLongitude = user.longitude

    // Calculate distance using Haversine formula
    const distance = calculateDistance(
      userLatitude,
      userLongitude,
      Destination_Latitude,
      Destination_Longitude
    )
    // console.log(distance,userLatitude,userLongitude,Destination_Latitude,Destination_Longitude);

    const response = {
      status_code: 200,
      message: "Distance calculated successfully",
        // distance: `${distance.toFixed(2)} km`,
      distance: `${distance}km`,
    };

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ status_code: 400, message: error.message })
  }
});

// Function to calculate distance using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c; // Distance in kilometers
  // console.log(R,c,a,distance,dLat,dLon)
  return distance
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}


app.get('/user/list', async (req,res)=>{
  try {
    const auth = req.header("Authorization")
    
    //console.log(token)
    if(!auth){
      return res.status(400).json({status:400, message:"authorization missing"})
    }else{
      const token = auth.replace("Bearer ", "")
      console.log(token)
      const decode = JWT.verify(token, process.env.SECRET_KEY)
      const user = await User.findOne({ _id: decode.userId })
      //console.log(user)
     
       const { week_number } = req.query;
       //console.log("weeknumber",week_number)
       const newnumber= week_number.split(",")

       const weekStart = parseInt(newnumber[0]);
       const weekEnd = parseInt(newnumber[1]);
       //console.log(weekStart,weekEnd)
    //   const data = await User.find({},{"_id":0,"name":1,"email":1,"register_at":1})
    //   const userData = {
    //       "data": {
    //         "Monday": [],
    //         "Tuesday": [],
    //         "Wednesday": [],
    //         "Thursday": [],
    //         "Friday": [],
    //         "Saturday": [],
    //         "Sunday": []
    //       }
    //     }
    //     console.log(userData.data)
    
    //    for(var i=0;i<=data.length;i++){
    //     var arr= data[i].register_at.getDay()    
         
    //     if(arr===0){
    //       userData.data["Monday"].push(data[i])          
    //     } 
    //     else if(arr===1){
    //       userData.data["Tuesday"].push(data[i])          
    //     } 
    //     else if(arr===2){
    //       userData.data["Wednesday"].push(data[i])          
    //     } 
    //     else if(arr===3){
    //       userData.data["Thursday"].push(data[i])          
    //     } 
    //     if(arr===4){
    //       userData.data["Friday"].push(data[i])          
    //     } 
    //     else if(arr===5){
    //       userData.data["Saturday"].push(data[i])          
    //     }  
    //     else 
    //       userData.data["Sunday"].push(data[i])          
    //       // console.log(userData.data)
    //    //return userData.data
    //    }
       
   
    // //console.log(JSON.stringify(userData.data,0,6))
      
      
    //   // res.json({status_code:200,message:"all ok" , data:arrData})
    //   res.json({ status_code: 200, message: "all ok", data: userData.data });



    const data = await User.find({}, { "_id": 0, "name": 1, "email": 1, "register_at": 1 });

 
const userData = {
  "data": {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [],
    "Saturday": [],
    "Sunday": []
  }
};

for (let i = 0; i < data.length; i++) {
  const arr = data[i].register_at.getDay();
  if (weekStart <= arr && arr <= weekEnd) {
  if (arr === 1) {
    userData.data["Monday"].push(data[i]);
  } else if (arr === 2) {
    userData.data["Tuesday"].push(data[i]);
  } else if (arr === 3) {
    userData.data["Wednesday"].push(data[i]);
  } else if (arr === 4) {
    userData.data["Thursday"].push(data[i]);
  } else if (arr === 5) {
    userData.data["Friday"].push(data[i]);
  } else if (arr === 6) {
    userData.data["Saturday"].push(data[i]);
  } else {
    userData.data["Sunday"].push(data[i]);
  }
}}

// Send the organized user data as the response
res.json({ status_code: 200, message: "all ok", data: userData.data });

    }
  
   

    
  } catch (error) {
    res.send(error.message)
    
  }
  
  
})

//server listening port and message
app.listen(process.env.PORT||4000 , console.log("server is running at " , process.env.PORT))