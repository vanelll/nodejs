import express from "express";
import {} from "./router";
const app = express();


export const home = (req, res) => {
  res.render("home", {pageTitle: "home"});
};
/*
const postUpload = (req, res) => {
   const {
     body: { file }
   } = req;
};*/

