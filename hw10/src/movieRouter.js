import express from "express";
import routes from "./routes";
import {
    home,

} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get(routes.home, home);
movieRouter.get(routes.create, create);



export default movieRouter; 