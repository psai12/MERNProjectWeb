import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './Database/Database.js';

const app=express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

dotenv.config({path:".config.env"});

connectDb();

app.listen("2000","0.0.0.0",()=>console.log("Server running on port: 2000"));

