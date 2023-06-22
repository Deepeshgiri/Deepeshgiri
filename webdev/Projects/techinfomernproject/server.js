import express from 'express'
import color from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './Config/db.js'
import authRoute from './routes/authRoute.js'

dotenv.config()
//database config

connectDB()

//rest object
const app = express()
app.use(express.json())
app.use(morgan('dev'))
//all routes
app.use('/api/v1/auth', authRoute)
//rest api


app.get('/', (req,res)=>{
    res.send({
        message:"welcome to ecom web"
    })
})

//port
const PORT = process.env.PORT||8080

app.listen(PORT,console.log(`server is runing at ${PORT}`.bgGreen.blue))