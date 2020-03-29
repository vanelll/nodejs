import "./styles.css";
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
 */
/**
 * 🍇버튼을 누르면
 * 스탑 레코딩으로 바뀌고
 * 카운트다운/ 녹음 시작
 * 스탑 레코딩을 다시 누르면
 * 녹음 정지
 * 카운트다운 숫자 사라짐
 * 녹음된 파일 저장
 */

const btn = document.querySelector("button");
const count = document.querySelector("span");

let stream = null;
let status = true;

navigator.mediaDevices.getUserMedia({
  audio: true
});

const startRecording = e => {};

const toggleBtn = () => {
  if (status) {
    btn.innerHTML = "Stop Recording";
    startRecording();
  } else {
    btn.innerHTML = "Start Recording";
  }
};

btn.addEventListener("click", toggleBtn);
