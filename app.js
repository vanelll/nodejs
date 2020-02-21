import express from "express";

import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routers from "./routes";


const app= express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("tiny"));

/*
app.get("/",handleHome);
//route, found home
*/
//app.get("/profile", handleProfile);

app.use("/", globalRouter);
app.use(routers.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;