'use strict';
const inputContainer = document.querySelector('.input-container');
const inputForm = document.querySelector('.form');
let    titleInput = document.getElementById('title');
let    dateElement=  document.getElementById("form-date");
const todaysDate =  new Date().toISOString().split('T')[0];
const formButton =   document.getElementById('submitButton')
//This is the end of the elements related to the input form
const countDown = document.querySelector('.countdown')
const countDowntitle = document.querySelector('.countdown-title');
const countDownList = document.querySelectorAll('span');
const resetButton = document.getElementById('countdown-button');
//This is the end of the countDown elements
const complete = document.querySelector('.complete');

dateElement.setAttribute('min',todaysDate)

const updateContainer = function(){

    inputContainer.hidden = true;
    countDown.hidden  =false;
    countDowntitle.textContent = titleInput.value;
    let countDownValue = new Date(dateElement.value).getTime() - new Date().getTime();
    const  savingCountDown = {
        title:titleInput.value,
        date :dateElement.value
    }  
    localStorage.setItem('countDown',JSON.stringify(savingCountDown));
    const seconds = 1000;
    const minutes = seconds*60;
    const hours = minutes*60;
    const days = hours*24;
    const countDay = Math.floor(countDownValue/days);
    const countHours = Math.floor((countDownValue%days)/hours);
    const countMinutes = Math.floor((countDownValue%hours)/minutes);
    const countSeconds = Math.floor((countDownValue%minutes)/seconds);
    const timeArray = [countDay,countHours,countMinutes,countSeconds]
   countDownList.forEach((value,index)=>{
       value.textContent = timeArray[index];
   })

   const reset = ()=>{
    inputContainer.hidden = false;
    countDown.hidden = true;
    titleInput.value = '';
    dateElement.value = '';
    console.log("The reset button was clicked")
    localStorage.removeItem('countDown');
    clearInterval(updateDomInterval);
}
resetButton.addEventListener('click',reset);

   const updateDomInterval = setInterval(function(){
       console.log('Working')
       updateContainer();
   },seconds)

   if (countDownValue<=0) {
       clearInterval(updateDomInterval);
       countDown.hidden= true;
       complete.hidden=false; 
}
}
const restorePrevious  = function(){
    if(localStorage.getItem('countDown')){
        console.log(localStorage.getItem('countDown'))
       let  savedCountDown = JSON.parse(localStorage.getItem('countDown'));
         titleInput.value = savedCountDown.title;
         dateElement.value = savedCountDown.date;
         inputContainer.hidden=true;
         updateContainer();

    }else{
        console.log("There is no stored countdown")
    }
}
restorePrevious();
inputForm.addEventListener('submit',function(e){
    e.preventDefault();
    updateContainer();
})  

