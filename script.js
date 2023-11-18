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

exploreBtn.onclick = function(){
    location.href = "./pages/explore.html";
}

hirebtn.onclick = function(){
    location.href = "./pages/contact.html";
}