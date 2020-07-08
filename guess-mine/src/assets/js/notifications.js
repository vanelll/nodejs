const vody =document.getElementById("body");

const fireNotification= (text, color)=> {
    const notification = document.createElement("div");
    notification.innerText=text;
    notification.style.backgroundColor=color;
    body.appendChild(notification);
}

export const handleNewUser = ({nickname})=>{
    const notification = document.createElement("div");

    fireNotification(`${nickname} just joiend`, "rgb(0, 122, 255)");
};


export const handleDisconnected= ({nickname})=>{
    fireNotification(`${nickname} just left`, "rgb(255, 149, 0)");
};