import events from "./events";

const socketController= (socket)=> {
    socket.on(events.setNickname, ({nickname})=> {
        socket.broadcast.emit(events.newUser, {nickname});
        socket.nickname= nickname;
    });
}

export default socketController;


/*
{
    socket.on("newMassage", message=> {
     socket.broadcast.emit("messageNotif", {
         message, 
         nickname: socket.nickname || "anon"});
    });
    socket.on("setNickName", ({nickname})=> {
        socket.nickname= nickname;
        //socket = obj, socket.potato=5 이런거도 가능
    })
 }*/