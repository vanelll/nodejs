import "./styles.css";
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
 */
/**
 * 🍇버튼을 누르면
 * 🍇스탑 레코딩으로 바뀌고
 * 카운트다운/ 녹음 시작
 * 스탑 레코딩을 다시 누르면
 * 녹음 정지
 * 카운트다운 숫자 사라짐
 * 녹음된 파일 저장
 * 
 * https://w3c.github.io/mediacapture-record/#example1
 */

const btn = document.querySelector("button");
const count = document.querySelector("span");

let streamObject = null;
let status = true;
let recordedChunks = [];

//stream ㅇㅓㄷ음
navigator.mediaDevices
  .getUserMedia({
    audio: true}) //audio 권한 얻음
    .then(function(stream) {
      //전역에서 사용 가능할 수 있게 외부에 선언되어있음
      streamObject= stream;
      //console.log(stream);
      startRecording();
    });


    const startRecording = () => {
      const audioRecorder = new MediaRecorder(streamObject);
      audioRecorder.start();
      console.log(audioRecorder);
      //recorder.ondataavailable = e => {
       // recordedChunks.push(e.data);
      //};
      //recorder.start();
    };

const toggleBtn = () => {
  if (status) {
    btn.innerHTML = "Stop Recording";
    startRecording();
  } else {
    btn.innerHTML = "Start Recording";
  }
};

btn.addEventListener("click", toggleBtn);
