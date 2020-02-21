import express from "express";
const app = express();
/*
Each route should render a string with the name of 
the page, i.e: "/about-us" -> About Us.
*/
const middleware = (req, res, next) => {
  console.log("im middleware");
  next();
};
const handleHome = (req, res) => {
  res.send("home");
};
const handleIntroduce = (req, res) => {
  res.send("About Us.");
};
const handleContact = (req, res) => {
  res.send("Contact");
};
const handleProtectd = (req, res) => {
  res.send("Protected");
};

app.use(middleware);
app.get("/", handleHome);
app.get("/about-us", handleIntroduce);
app.get("/contact", handleContact);
app.get("/protected", middleware, function(req, res, next) {
  res.redirect("/");
});

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
