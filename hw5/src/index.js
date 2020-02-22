import express from "express";
import routes from "./routes";
import globalRouter from "../routers/globalRouter";
import coursesRouter from "../routers/coursesRouter";
import apiRouter from "../routers/apiRouter";
import apiV1Router from "../routers/apiV1Router";
import apiV2Router from "../routers/apiV2Router";

const app = express();


app.use("/", globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiV1, apiV1Router);
app.use(routes.apiV2, apiV2Router);

app.listen(() => console.log(`Listening!`));
