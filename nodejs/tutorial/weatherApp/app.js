const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=c87d3199ff2c01fe39283864d285e475& query=hyderabad"
request({url:url, JSON},(error,response)=>{
    if(error){
        console.log("please connect to internent")
    }else{
        const data = JSON.parse(response.body.current)
        console.log(data)
    }
   
    //console.log(response)
})
