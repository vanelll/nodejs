import mongoose from "mongoose";
/*
DONT TOUCH THIS FILE <3
WE ARE ALL SHARING THE SAME DB
PLEASE DONT TOUCH THIS FILE
*/
mongoose.connect(
  "-",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected");
const handleError = error => console.log(`❌ `);

db.once("open", handleOpen);
db.on("error", handleError);
