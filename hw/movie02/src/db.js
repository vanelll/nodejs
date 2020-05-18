import mongoose from "mongoose";
/*

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
