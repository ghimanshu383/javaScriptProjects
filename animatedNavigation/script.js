'use strict';
const menuBar = document.querySelector('.menu-bars');
const navBar = document.querySelector('.navbar');
const navOverlay = document.querySelector('#overlay');
const navItems =  document.querySelectorAll('li');

const menuAndNavigationDisplay = function(){
    const arrayBars = Array.from(menuBar.children);
    arrayBars.forEach(bar=>{
        bar.classList.toggle('change');
    })
    navBar.classList.toggle('hidden');
    navItems.forEach(item=>{
            item.classList.toggle('activeMode');
            item.classList.contains('activeMode')?item.classList.replace('slide-outAnimation','slide-inAnimation'):item.classList.replace('slide-inAnimation','slide-outAnimation')
    });

    navOverlay.classList.toggle('overlayActive');
    navOverlay.classList.contains('overlayActive')?navOverlay.classList.replace('overlay-right','overlay-left'):navOverlay.classList.replace('overlay-left','overlay-right');
}

menuBar.addEventListener('click',menuAndNavigationDisplay)
navBar.addEventListener('click',menuAndNavigationDisplay);