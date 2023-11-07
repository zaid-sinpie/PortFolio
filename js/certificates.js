'use strict';


//variables for certifcates

const ibmCer = document.querySelector('.ibm');
const infosysCer = document.querySelector('.infosys');
const pantechCer = document.querySelector('.pantech');
const iotBootcampCer = document.querySelector('.iotBootcamp');
const cyberCer = document.querySelector('.cyber');
const image = document.querySelector('.images');

image.src = '../certificates/IBM-0.jpg';

ibmCer.addEventListener('click', function(){
    image.src = '../certificates/IBM-0.jpg';
});

infosysCer.addEventListener('click',function(){
    image.src = '../certificates/Info-1.jpg';
});

pantechCer.addEventListener('click', function(){
    image.src = '../certificates/pantech-3.jpg';
});

iotBootcampCer.addEventListener('click', function(){
    image.src = '';
});

cyberCer.addEventListener('click', function(){
    image.src = '';
});