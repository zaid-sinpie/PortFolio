'use strict'

const btech = document.querySelector('.education1');
const hsc = document.querySelector('.education2');
const ssc = document.querySelector('.education3');
const images = document.querySelector('.images');
const logo = document.querySelector('.logo');

btech.addEventListener('click', function(){
    images.src = "";
    btech.classList.add('active-cer');
    hsc.classList.remove('active-cer');
    ssc.classList.remove('active-cer');
});

hsc.addEventListener('click', function(){
    images.src = "";
    btech.classList.remove('active-cer');
    hsc.classList.add('active-cer');
    ssc.classList.remove('active-cer');
});

ssc.addEventListener('click', function(){
    images.src = "";
    btech.classList.remove('active-cer');
    hsc.classList.remove('active-cer');
    ssc.classList.add('active-cer');
});

logo.addEventListener('click',function(){
    location.href = 'https://drive.google.com/file/d/10ZfdNP4dSzvaSNJMuI2sEI_DKP2amNyA/view?usp=sharing';
});