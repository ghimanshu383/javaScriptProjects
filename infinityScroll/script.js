'use strict';

const count = 10;
const apiKey = 'QJtfNyLAn-0evRsA16pSxkaYuXgs5cKwgk-lspq0OHI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let imageData = [];

const imageContainer = document.querySelector('.imageContainer');
const loader =  document.querySelector('.loadingImages');
const loaderSymbol=  document.querySelector('.loader');

const populatingImages = function(){
    imageData.forEach(image=>{
        const imgHtml = document.createElement('img');
        imgHtml.classList.add('imageContent');
        imgHtml.setAttribute('src',image.urls.raw);
        // imgHtml.src=`${image.urls.raw}`;
        imageContainer.appendChild(imgHtml);
    })
}

const getPhotos = async function(){
    try{
        const response =await fetch(apiUrl);
        imageData = await response.json();
        populatingImages();   
        loaderSymbol.hidden=true
    }catch(error){
        console.log('The images cant be loaded ', error.message);
    }

}
const observer =  new IntersectionObserver(function(entries){
        entries.forEach(entry=>{
            console.log(entry.target)
            console.log(entry)
            if (entry.isIntersecting == true) getPhotos();
        })
},{
    root:null,
    threshold:0
})
observer.observe(loader);
