import express from "express";
const app = express();


export const home = (req, res) => {
  res.render("home", {pageTitle: "txt2html"});
};


export const postUpload = (req, res) => {
   const {
     body: { file }
   } = req;
   
};

