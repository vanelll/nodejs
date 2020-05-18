import express from "express";
import routes from "../src/routes";
import { apiV2Remove, apiV2Edit } from "../controllers/apiController";

const apiV2Router = express.Router();

apiV2Router.get(routes.apiV2Remove, apiV2Remove);
apiV2Router.get(routes.apiV2Edit, apiV2Edit);

export default apiV2Router;
