import express from "express";
import routes from "../src/routes";
import { apiV1Refund, apiV1Buy } from "../controllers/apiController";

const apiV1Router = express.Router();

apiV1Router.get(routes.apiV1Buy, apiV1Buy);
apiV1Router.get(routes.apiV1Refund, apiV1Refund);

export default apiV1Router;
