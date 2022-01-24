'use strict';

const videoElement= document.querySelector('.videoContainer');
const buttonStart =  document.querySelector('.videoStart');
const pictureButton = document.querySelector('.pictureInPicture');


const displayvideo = async function(){
    try{
        const mediaElement= await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject= mediaElement;
        // videoElement.onloadedmetadata= ()=>{
        //     videoElement.play();
        videoElement.addEventListener('load',function(){
            videoElement.play();
        })
    }catch(error){
        console.log("The video cant be loaded as ",error.message);
    }


}
buttonStart.addEventListener('click', function(){
    displayvideo();
    buttonStart.hidden= true;
    videoElement.hidden = false;
    pictureButton.disabled= false;


})
pictureButton.addEventListener('click',async function(){
    try{
       await videoElement.requestPictureInPicture();
       videoElement.hidden=true;
       pictureButton.hidden= true;
    }catch(error){
        console.log("The picture in picture cant be loaded ",error.message);
    }
})

