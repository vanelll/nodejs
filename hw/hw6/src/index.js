import express from "express";

import globalRouter from "./router/globalRouter";
import { localMiddlewares } from "./localMiddlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(localMiddlewares);
app.use("/", globalRouter);



const port= 3000;
const handle= ()=>
console.log("listening");

// Add your magic here!

// Codesanbox does not need PORT :)
app.listen(port, handle);
