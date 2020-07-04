const body=document.querySelector("body");
const nickname = localStorage.getItem("nickname");
const loginForm=document.getElementById("jsLogin");

const LOGGED_OUT="loggedOut";
const LOGGED_IN="loggedIn";

if(nickname===null){
    body.className= LOGGED_OUT;
}else {
    body.className= LOGGED_IN;
}

const handleFormSubmit= (e)=>{
    e.preventDefault;
    const input= loginForm.querySelector("input");
    const {value} = input;

    input.value="";
    localStorage.setItem("nickname", value);
}

if(loginForm){
    loginForm.addEventListener("submit", handleFormSubmit);
}