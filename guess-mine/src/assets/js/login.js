const body=document.querySelector("body");
const nickname = localStorage.getItem("nickname");
const loginForm=document.getElementById("jsLogin");

const LOGGED_OUT="loggedOut";
const LOGGED_IN="loggedIn";

const login = (nickname) => {
    const socket= io("/");
    socket.emit("setNickname", {nickname});
}

if(nickname===null){
    body.className= LOGGED_OUT;
}else {
    body.className= LOGGED_IN;
    login(nickname);
}

const handleFormSubmit= (e)=>{
    e.preventDefault;
    const input= loginForm.querySelector("input");
    const {value} = input;

    input.value="";
    localStorage.setItem("nickname", value);
    body.className= LOGGED_IN;
    login(nickname);
}

if(loginForm){
    loginForm.addEventListener("submit", handleFormSubmit);
}