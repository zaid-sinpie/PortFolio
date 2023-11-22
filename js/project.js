'use strict';

const hydroponic = document.querySelector('.hydroponic');
const webApp = document.querySelector('.webapp');
const webGame = document.querySelector('.wegame');
const agricuulture = document.querySelector('.agriculture');
const logo = document.querySelector('.logo');


//modal classes
const hydroponicProject = document.querySelector('.hydroponic-modal');
const webAppProject = document.querySelector('.Webapp-modal');
const webGameProject = document.querySelector('.webgame-modal');
const agriculturalProject = document.querySelector('.agricultural-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');



//adding modal
hydroponic.addEventListener('click',function(){
    hydroponicProject.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

webApp.addEventListener('click',function(){
    webAppProject.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

webGame.addEventListener('click',function(){
    webGameProject.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

agricuulture.addEventListener('click',function(){
    agriculturalProject.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// removing Modal
overlay.addEventListener('click',function(){
    hydroponicProject.classList.add('hidden');
    webAppProject.classList.add('hidden');
    webGameProject.classList.add('hidden');
    agriculturalProject.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
        hydroponicProject.classList.add('hidden');
        webAppProject.classList.add('hidden');
        webGameProject.classList.add('hidden');
        agriculturalProject.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})

logo.addEventListener('click',function(){
    location.href = 'https://drive.google.com/file/d/10ZfdNP4dSzvaSNJMuI2sEI_DKP2amNyA/view?usp=sharing';
});