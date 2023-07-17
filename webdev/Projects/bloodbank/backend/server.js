import express from 'express';
import router from './routes/testRoute.js'
import authRoute from './routes/authRoute.js';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDb from './config/db.js';
// dotenv config
dotenv.config()
//mongodb connection
connectDb();
// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev')); // url hit in the console screen
// port 
const PORT = process.env.PORT || 8000;
// routes 
app.use('/api/v1/test',router);
app.use('/api/v1/auth',authRoute);

// listening the port 
app.listen(PORT,()=>{
    console.log(`Node server running in ${process.env.DEV_MODE} mode at port:https://localhost/${PORT} `.bgBlue);
});
