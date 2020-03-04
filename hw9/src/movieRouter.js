import express from "express";
import routes from "./routes";
import { home, movieDetail, getMovie,postMovie } from "./movieController";

const movieRouter = express.Router();

movieRouter.get(routes.home, home);
/*
Here add a way to handle GET and POST requests to the "/add" URL
Make sure is ABOVE /:id or it WON'T work.
*/
movieRouter.get(routes.add, getMovie);
movieRouter.post(routes.add, postMovie);

movieRouter.get(routes.detail(), movieDetail);


export default movieRouter;
