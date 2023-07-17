import mongoose from 'mongoose';
import colors from 'colors';
const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb ${mongoose.connection.host}`.bgMagenta);
    } catch (error) {
       console.log(`mongodb database error ${error}`.bgRed.white); 
    }
}

export default connectDb;

