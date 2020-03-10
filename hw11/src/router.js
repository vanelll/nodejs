import express from "express";
import { 
    home
} from "./controllers";

const fileRouter = express.Router();

fileRouter.get("/",home);