import express from "express";
import routes from "./routes";
import {
    home, createMovie, postMovie, detailMovie, getEditMovie, postEditMovie, deleteMovie, search
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get(routes.home, home);

movieRouter.get(routes.search,search);
movieRouter.get(routes.create, createMovie);
movieRouter.post(routes.create, postMovie);

movieRouter.get(routes.detail(), detailMovie);

movieRouter.get(routes.edit, getEditMovie);
movieRouter.post(routes.edit,postEditMovie);

movieRouter.get(routes.delete,deleteMovie);





export default movieRouter; 