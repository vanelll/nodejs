import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import {home,
    postUpload
} from "./controllers";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });
app.get("/",home);
app.post("/upload",upload.single("textFile"), postUpload);
/*
.single(fieldname)

*/

const handleListening= () => console.log(`Listening on: http://localhost:${PORT}`);
app.listen(PORT, handleListening);

export const uploadText = upload.single("textFile");

/*
multer:  */