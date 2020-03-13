import express from "express";
import request from "request";

const app = express();
const PORT = 4000;
const handleListening= () => console.log(`Listening on: http://localhost:${PORT}`);

const home = express.Router();


app.use("/", home);

const options = {
  url: "https://codesandbox.io/s/is-it-down-boilerplate-jpfu4"
};

function callback(error, response, body) {
  if (!error && response.statusCode <= 445) {
    const info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
}

request(options, callback);
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));



