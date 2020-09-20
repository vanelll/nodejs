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

/*
const middleware = (req, res, next) => {
  console.log("im a middleware");
  next();
};

const protect = (req, res) => {
  console.log("protected");
  res.redirect("/");
};

app.use(middleware);
app.get("/", (req, res) => res.send("home"));
app.get("/about-us", (req, res) => res.send("about-us"));
app.get("/contact", (req, res) => res.send("contact"));
app.get("/protected", protect, (req, res) => res.send("protected"));

*/
