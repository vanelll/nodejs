import {join} from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT=4000;
const app = express();
app.set("view engine","pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname,"static")));
app.get("/", (req,res)=> res.render("home"));

const handleListening= ()=> console.log(`👽 hello : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", socket=> {
    socket.broadcast.emit("hello");
    //broadcast 저ㅂ속한 ㅅ 제외한 클라이언트들ㅇ게 메시지 
    /**
     * socket.on("helloGuys", ()=> console.log(" client said"))'
     * 특정 메시지 받으면 콘솔에 출력
     * (index.js에서 보냈음)
     */
});