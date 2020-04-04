import "./styles.css";

/**
 * 
🚀Call this http://ip-api.com/json/
 call url
show me my location

https://developer.mozilla.org/ko/docs/Web/API/Response
 */

const API_URL = "http://ip-api.com/json/";

const geo = document.querySelector(".geo");

fetch("API_URL").then(res => res.json());