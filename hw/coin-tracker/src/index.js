import "./styles.css";

const API_URL = "https://api.coinpaprika.com/v1/tickers";

const coins= document.querySelector(".coins");


/**
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

 const printCoin = coin => {
    const {
        name,
        quotes: {
            USD: { price }
    } }= coin;
    const li = document.createElement("li");
    li.innerHTML= `${name} : ${price}`;
    coins.appendChild(li);
 };
//coin 목록을 쪼개기
 const getCoin = data => {
    
   // coins.innerHTML="???";
    data.forEach(coin => printCoin(coin));
 };

const fetchDocument = () => {
    fetch(API_URL)
  .then(response => response.json())
  .then((data) => {
    coins.innerHTML="";
    getCoin(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

fetchDocument();
setInterval(fetchDocument,3000);
    