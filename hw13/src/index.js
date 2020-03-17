import "./styles.css";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("video");
const playBtn = document.getElementById("playBtn");
const volumeBtn = document.getElementById("volumeBtn");
const fullScrnBtn = document.getElementById("fullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
}

function handelPlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.className = "fas fa-pause";
  } else {
    videoPlayer.pause();
    playBtn.className = "fas fa-play";
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    videoPlayer.muted = true;
    volumeBtn.className = "fas fa-volume-mute";
  }
}

function exitFullScreen() {
  fullScrnBtn.className = "fas fa-expand";
  fullScrnBtn.addEventListener("click", goFullScreen);
  document.webkitExitFullscreen();
}

function goFullScreen() {
  videoContainer.webkitRequestFullscreen();
  fullScrnBtn.className = "fas fa-compress";
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

function init() {
  console.log(playBtn.innerHTML);
  console.log(playBtn);
  console.log(playBtn.className);
  playBtn.addEventListener("click", handelPlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrnBtn.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
}

if (videoContainer) {
  init();
}
