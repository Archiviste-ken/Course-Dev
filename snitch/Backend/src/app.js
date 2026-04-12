import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();


app.use(morgan('dev'));
app.use(cookieParser());    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/",(_req,res)=>{
    res.status(200).json({message:"Welcome to Snitch API"});
})


export default app;
