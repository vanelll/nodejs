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

let audioRecorder;
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
    });


    const startRecording = () => {
      if(streamObject){
      let audioRecorder = new MediaRecorder(streamObject);
      audioRecorder.start();
      audioRecorder.addEventListener("dataavailable", handleStreamData);
  //setTimeout(()=> audioRecorder.stop(),1000);
      }else console.log("nostream");
    };

    const handleStreamData = (e) =>{
      const {data: audioFile} = e;
      const link = document.createElement("a");
      link.href= URL.createObjectURL(audioFile);
      link.download= "recorded.webm";
      document.body.appendChild(link);
      link.click();
    };

const stopRecording = () => {
  audioRecorder.stop();
};

const toggleBtn = () => {
  if (status) {
    btn.innerHTML = "Stop Recording";
    startRecording();
    status=false;
  } else {
    btn.innerHTML = "Start Recording";
    stopRecording();
    status= true;
  }
};

btn.addEventListener("click", toggleBtn);
