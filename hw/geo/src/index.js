import "./styles.css";

/**
 * 
🚀Call this http://ip-api.com/json/ with AJAX, that URL returns information about your location.
🚀Call the URL when the page loads
Show me an indicator when the request is happening
When the data comes, show me my location on the HTML

https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95
 */

const API_URL = "http://ip-api.com/json/";
const geo= document.querySelector(".geo");


fetch(API_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // json 출력
    const { country , timezone } =data;
    geo.innerHTML=`🌏${country} , ${timezone}`;
  })
  .catch((err) => {
    console.log("Fetch Error", err);
    geo.innerHTML="🤔";
  });
