import mongoose from "mongoose";
import chalk from "chalk";


const connectDB = async ()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URL)

        console.log(`connected to mongodb from config.js file ${conn.connection.host} port number is ${process.env.port}`)

    }catch(error){
        console.log(error)
    }
}

export default connectDB;