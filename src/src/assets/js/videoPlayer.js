import getBlobDuration from "get-blob-duration";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");


const registerView= () =>{
    const videoId= window.location.href.split("/videos/")[1];

    fetch(`/api/${videoId}/view`, {
        method: "POST"
    });
};

async function setTotalTime() {
    const blob = await fetch(videoPlayer.src).then(response => 
        response.blob());
    const duration= await getBlobDuration(blob);
    const totalTimeString= FormData(duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime,1000)
}

function handleEnded() {
    registerView();
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function init() {
    videoPlayer.volume = 0.5;
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime);
    videoPlayer.addEventListener("ended", handleEnded);
    volumeRange.addEventListener("input", handleDrag);
  }
  if (videoContainer) {
    init();
  }