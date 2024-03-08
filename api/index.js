import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import listingrouter from "./routes/listing.route.js";
//we use dotenv to use .env file 
//to use import in backend we have to add "type": "module" in package.json file

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDb connected");
}).catch((err)=>{
    console.log(err);
});

const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingrouter);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  });
})