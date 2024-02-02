const express = require ('express')
require ('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT
const dbconnect = require ('./Database/dbconnection.js')
const  userroute  = require('./Route/UserRoute.js')
const mailroute = require('./Route/MailRoute.js')
app.use(cors())
app.use(express.json())

//dbconnection
dbconnect()



//Router
app.use('/api/user' ,userroute)
app.use('/api/user', mailroute)




app.listen(port, ()=>console.log('server running at port ' + port))