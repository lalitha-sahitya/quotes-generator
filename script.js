const btnEl = document.getElementById('btn');
const apiKey = "23a8PrJm9dgK4U+JJEauGw==R4bYSgrmOBy6MPlv";
const quoteEl = document.getElementById('quote');
const options={
    method: "GET",
        headers:{
            'X-Api-Key':apiKey,
        },
    };
const apiURL="https://api.api-ninjas.com/v1/quotes?category=happiness";
async function getQuote(){
    try{
    quoteEl.innerText='Updating...';
    btnEl.disabled=true;
    btnEl.innerText='Loading....';
    const response = await fetch(apiURL,options);
    const data = await response.json();
    quoteEl.innerText=data[0].quote;
    btnEl.disabled=false;
    btnEl.innerText='Generate';
    }
    catch{
        quoteEl.innerText='Error... Try again!!';
    }
};
btnEl.addEventListener('click',getQuote);