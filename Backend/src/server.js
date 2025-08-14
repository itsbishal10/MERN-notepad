import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js" ;
import dotenv from "dotenv";
import ratelimit from "./config/upstash.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app=express();
const PORT= process.env.PORT ||5001;


//middleware
app.use(express.json()); // this middleware will parse JSON bodies : req.body 
app.use(rateLimiter);
//simple custom middleware
// app.use((req, res, next)=>{
//     console.log(`Req method is ${req.method} & req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);


connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("server started on port :  ",PORT)
});
});




