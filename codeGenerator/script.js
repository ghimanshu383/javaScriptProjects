'use strict';

const newQuoteGenerator =  document.querySelector('.newQuote');
const quoteText = document.querySelector('.textContent');
const author  = document.querySelector('.author');
const quoteArea = document.querySelector('.quoteContainer')
const loader = document.querySelector('.loader');

const loading = function(){
    loader.hidden = false;
    quoteArea.hidden = true;

}

const showquote = function(){
    loader.hidden =  true;
    quoteArea.hidden = false;
}

let apiQuotes = []

const quoteApiFunction = async function(){
    loading();
    //adding a proxy url 
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://type.fit/api/quotes';
    const usingProxyUrl = proxyUrl + url;
    try{
        const response = await fetch(url)
        apiQuotes = await response.json();   
        showquote();
    }catch(Error){
        console.log("The quote cant be loaded ",Error.message)
    }
}
quoteApiFunction();

const quoteGeneratorFunction = function(){
    loading();
    let random = Math.trunc(Math.random()*1643) + 1;
    const html = `${apiQuotes[random].text}`;
    console.log(apiQuotes[random].text.length);
    let html1 = `${apiQuotes[random].author}`
    if(apiQuotes[random].author==null) html1 = 'Unknown';
    quoteText.innerHTML = '';
    author.innerHTML = '';
    quoteText.insertAdjacentHTML('afterbegin',html);
    author.insertAdjacentHTML('afterbegin',html1);

    apiQuotes[random].text.length>80 ? quoteText.classList.add('longQuote') :quoteText.classList.remove('longQuote');
    showquote();
}
newQuoteGenerator.addEventListener('click',quoteGeneratorFunction)

