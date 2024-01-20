// "use strict";

// let breathingDiv = document.querySelector(".logo");
// let colors = ["#ff0000", "#00ff00", "#0000ff"];
// let currentIndex = 0;

// function breatheAnimation() {
//   breathingDiv.style.color = colors[currentIndex];
//   currentIndex = (currentIndex + 1) % colors.length;
// }

// breathingDiv.addEventListener('click',function(){
//     setInterval(breatheAnimation, 1000);
// });\





//button explore action

const exploreBtn = document.querySelector('.explore');
const hirebtn = document.querySelector('.hire');
const logo = document.querySelector('.logo');

// exploreBtn.onclick = function(){
//     location.href = "./pages/explore.html";
// }

hirebtn.onclick = function(){
    location.href = "./pages/contact.html";
}

logo.addEventListener('click',function(){
    location.href = 'https://drive.google.com/file/d/10ZfdNP4dSzvaSNJMuI2sEI_DKP2amNyA/view?usp=sharing';
    // location.href = 'https://drive.google.com/file/d/1lHiLD1LdtWyUJQMGs5tbkYhL3YLH2aiN/view?usp=sharing';
});