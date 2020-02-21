import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const PORT = 4000;

const app= express();

const handleListening= () =>
    console.log(`Listening on: http://localhost:@{PORT}`);

const handleHome = (req, res) =>
    res.send('hello from home');


const handleProfile= (req,res) => 
    res.send("on my profile");


app.use(cookieParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("tiny"));

app.get("/",handleHome);
//route, found home

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);