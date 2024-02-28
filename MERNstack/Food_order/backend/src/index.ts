import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from './routes/MyUserRoute'
import morgan from 'morgan'
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>console.log("connected to datanase"))

const app = express();

app.use(express.json());

app.use(morgan('tiny'))
app.use(cors());
app.use('/api/my/user', myUserRoute)

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.listen(7070, ()=>{
    console.log(`server started at localhost : 6000`)
})