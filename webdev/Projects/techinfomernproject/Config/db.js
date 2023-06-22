import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongo db connected at ${process.env.MONGO_URL}`)
    } catch (error) {
        console.log(`error in connection`)
    }
}

export default connectDB