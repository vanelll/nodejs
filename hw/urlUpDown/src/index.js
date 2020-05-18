import express from "express";
import request from "request";

const app = express();

app.get("/", async (req, res) => {
  let {
    query: { url }
  } = req;
  if (!url.includes("http")) url = "http://" + url;
  request(url, (err, response) => {
    if (err) res.send("down");
    else if (response.statusCode <= 445) res.send("up");
  });
});

// expected output: 42
/*
url query에 http 있는지 없는지! 없으면 더해줌
request 이용해서 GET 리퀘스트,,
less or equals than 445 return a "Up!"
down 이면 json-> down.
*/

app.listen(() => console.log(`Listening!`));
