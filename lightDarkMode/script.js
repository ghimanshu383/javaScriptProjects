'use strict';
const toggleSwitch= document.querySelector('input[type=checkbox]');
const navBar = document.getElementById('nav');
const toggleText= document.getElementById('text-box');
const toggleIcon= document.getElementById('toggle-icon');

console.log(toggleIcon.children[0]);


const darkMode= function(){
    navBar.style.backgroundColor= 'rgb(0 0 0 /50%)';
    toggleText.style.backgroundColor= 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent= 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');

}
const lightMode= function(){
    navBar.style.backgroundColor= 'rgb(255 255 255/50%)';
    toggleText.style.backgroundColor= 'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent= 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    
}

const switchTheme = function(e){

    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme','light');
        lightMode();
    }


}
toggleSwitch.addEventListener('click',switchTheme);
const themeLocal= localStorage.getItem('theme');
if(themeLocal &&themeLocal==='dark'){
    document.documentElement.setAttribute('data-theme','dark');
    toggleSwitch.checked= true;
       darkMode();
}
