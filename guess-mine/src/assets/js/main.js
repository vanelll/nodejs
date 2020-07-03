// eslint-disable-next-line no-undef
import {handleMessageNotif} from "./chat";
const socket = io("/");

function sendMessage(message){
    socket.emit("newMessage", {message});
    console.log(`you: ${message}`);
}

function setNickname(nickname){
    socket.emit("set name", {nickname});
}



socket.on("messageNotif", handleMessageNotif);