import "./styles.css";
/**
👽Play / Pause Button 
hover 마우스 움직이면 show play bar 
마우스 안움직이면 비디오 위에 있어도 숨기기-> mouse and the player bar 
스페이스바로 멈춤 재생
소리 버튼
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

playBtn.addEventListener("click", togglePlay);
