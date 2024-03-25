import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './Database/Database.js';
import router from './Routes/Register.js';
import cookieParser from 'cookie-parser';

const app=express();

app.use(cors({credentials:true,
      origin: "https://frontend-1nhd.onrender.com",

}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",router);

dotenv.config({path:".config.env"});

connectDb();

app.listen("2000","0.0.0.0",()=>console.log("Server running on port: 2000"));

