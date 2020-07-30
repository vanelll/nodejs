import { disableCanvas, hideControls, enableCanvas, showControls, resetCanvas } from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players)=> 
    board.innerHTML= "";
    players.forEach(player=>{
    const playerElement = document.createElement("span");
    playerElement.innerText= `${player.nickname} : ${player.points}`;
    board.appendChild(playerElement);
});

const setNotifs = (text)=> {
    notifs.innerText="";
    notifs.innerText= text;
}

export const handlePlayerUpdate=  ({sockets})=> addPlayers(sockets);

export const handleGameStarted = () => {
    // 캔버스 X, 채팅 
    setNotifs("");
    disableCanvas();
    hideControls();
    enableChat();

}

export const handleLeaderNotif = ({word}) =>{
    //리더 : 캔버스, 채팅X
    enableCanvas();
    showControls();
    disableChat();
    notifs.innerText= `paint : ${word}`;
};

export const handleGameEnded = () =>{
    // 게임 끝나면 : 캔버스X, 리셋
    setNotifs("Game ended.");
    disableCanvas();
    hideControls();
    resetCanvas();
}

export const handleGameStarting = () => setNotifs(
    "game will start soon";
)