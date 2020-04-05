import "./styles.css";

/**
 * 
🚀Call this http://ip-api.com/json/
🚀 call url
show me my location

https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95
 */

const API_URL = "http://ip-api.com/json/";

const geo = document.querySelector(".geo");

fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const { country, timezone } = data;
                console.log(country);
                console.log("dd");
                geo.innerHTML = `🌏${country}, ${timezone}`;
            })
            .catch(e => {
                console.log(e);
                geo.innerHTML = "e";
            });
