import express from "express";

import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddleware } from "./middlewares";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routers from "./routes";



const app= express();

app.use(helmet());
app.set("view engine","pug");
app.use("/uploads",express.static("uploads"));
app.use("/static",express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));

app.use(localMiddleware);

/*
app.get("/",handleHome);
//route, found home
*/
//app.get("/profile", handleProfile);

app.use("/", globalRouter);
app.use(routers.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;

/*
VIDEO : home/search
USER : join/login/logout
*/ 