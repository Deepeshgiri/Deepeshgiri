import express from "express";
const app = express();
import chalk from "chalk";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/config.js";
import router from "./routes/authRoute.js";



//configuration dot env
dotenv.config();

//database configure
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT;

//routes
app.use('/api/v1/auth',router)

//rest api

app.get("/", (req, res) => {
  res.send("this is rest api");
});

//express server create and run
app.listen(PORT, () =>
  console.log(
    chalk.blue.white(`Server is runnig in ${process.env.dev_mode} at ${PORT}`)
  )
);
