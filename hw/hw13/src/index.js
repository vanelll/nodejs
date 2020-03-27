import "./styles.css";
/**
👽Play / Pause Button 
hover 마우스 움직이면 show play bar 
마우스 안움직이면 비디오 위에 있어도 숨기기-> mouse and the player bar 
👽스페이스바로 멈춤 재생
👽소리 버튼
자동재생
재생시간
👽Use Fontawesome
 */

const videoContainer = document.querySelector(".container"),
  video = videoContainer.querySelector("video"),
  controls = videoContainer.querySelector(".controls"),
  playBtn = controls.querySelector(".playBtn"),
  time = controls.querySelector(".playTime"),
  soundBtn = controls.querySelector(".soundBtn");

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    video.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

function toggleSound() {
    if (video.muted) {
      soundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      video.muted = false;
    } else {
      soundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
      video.muted = true;
    }
  }

  function handlePlay(e) {
    const { code } = e;
    // console.log(key);
    if (code === "Space") {
      togglePlay();
    }
  } 


playBtn.addEventListener("click", togglePlay);
soundBtn.addEventListener("click", toggleSound);
document.addEventListener("keydown", handlePlay);