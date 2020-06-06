const recorderContainer= document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview= document.getElementById("jsVideoPreview");

let streamObject;

const handleVideoData= (e)=> {
    //console.log(e);
}

//stream에서 가진 video 녹화
const startRecording = () =>{
    const videoRecorder= new MediaRecorder(streamObject);
    //console.log(videoRecorder);
    videoRecorder.start();
    //videoRecorder.start(1000) 매 초마다 데이터 줌
    //start recording
    videoRecorder.addEventListener("dataavailable", handleVideoData);
};

const stopRecording= () =>{

};

const getVideo= async () =>{
    try{
        const stream= await navigator.mediaDevices.getUserMedia({
            audio:true,
            video:true
        });
        videoPreview.srcObject = stream;
        streamObject=stream;
        startRecording();
        videoPreview.play();
        recordBtn.innerHTML="stop recording";
    }catch(error){
        recordBtn.innerHTML= "cant record";
    }finally {
        recordBtn.removeEventListener("click",getVideo)
    }
};

function init(){
    recorderContainer.addEventListener("click", startRecording);
}


if(recorderContainer){
    init();
}