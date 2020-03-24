import "./styles.css";

const btn = document.querySelector("button");
const count = document.querySelector("span");

const handleRecording = (stream) => {
  if (btn.innerText === "Start Recording") {
    btn.innerText = "Stop Recording";
  } else {
    btn.innerText = "Start Recording";
  }
};

navigator.mediaDevices.getUserMedia({ audio: true }).then(handleRecording);
btn.addEventListener("click", handleRecording);
