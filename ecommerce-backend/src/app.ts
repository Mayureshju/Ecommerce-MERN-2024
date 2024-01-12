import express from "express";
import userRoute from './routes/user.js'
import productRoute from './routes/product.js'
import {connectDB} from './config/database.js'
import { errorMiddleware } from "./middlewares/error.js";
const port = 4000;
const MONGODB_URL = "mongodb+srv://webswizards:NGr9OftuD7P9ioZj@cluster0.pu7ojhm.mongodb.net/"
const app = express();
app.use(express.json())
connectDB(MONGODB_URL);
app.get("/",(req,res)=>{
    res.send("API worikg")
})
app.use("/api/v1/user",userRoute)
app.use("/api/v1/product",productRoute)


app.use('/uploads', express.static("uploads"))
app.use(errorMiddleware)
app.listen(port,()=>{console.log(`server is on ${port}`)})