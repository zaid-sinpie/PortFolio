'use strict';


//variables for certifcates

const ibmCer = document.querySelector('.ibm');
const infosysCer = document.querySelector('.infosys');
const infosysIotCer = document.querySelector('.infosysIot');
const infosysHighCer = document.querySelector('.infosysHigh');
const pantechCer = document.querySelector('.pantech');
const iotBootcampCer = document.querySelector('.iotBootcamp');
const cyberCer = document.querySelector('.cyber');
const image = document.querySelector('.images');

image.src = '../certificates/IBM-0.jpg';
ibmCer.style.backgroundColor = '#fe2e52';

ibmCer.addEventListener('click', function(){
    image.src = '../certificates/IBM-0.jpg';
    ibmCer.style.backgroundColor = '#fe2e52';
    infosysCer.style.backgroundColor = '#8e1d42';
    infosysIotCer.style.backgroundColor = '#8e1d42'
    pantechCer.style.backgroundColor = '#8e1d42';
    iotBootcampCer.style.backgroundColor = '#8e1d42';
    cyberCer.style.backgroundColor = '#8e1d42';
});

infosysCer.addEventListener('click',function(){
    image.src = '../certificates/Info-1.jpg';
    ibmCer.style.backgroundColor = '#8e1d42';
    infosysCer.style.backgroundColor = '#fe2e52';
    infosysIotCer.style.backgroundColor = '#8e1d42'
    infosysHighCer.style.backgroundColor = '#8e1d42'
    pantechCer.style.backgroundColor = '#8e1d42';
    iotBootcampCer.style.backgroundColor = '#8e1d42';
    cyberCer.style.backgroundColor = '#8e1d42';
});

infosysIotCer.addEventListener('click',function(){
    image.src = '../certificates/InfoIot.jpg';
    ibmCer.style.backgroundColor = '#8e1d42';
    infosysCer.style.backgroundColor = '#8e1d42';
    infosysIotCer.style.backgroundColor = '#fe2e52'
    infosysHighCer.style.backgroundColor = '#8e1d42'
    infosysHighCer.style.backgroundColor = '#8e1d42';
    pantechCer.style.backgroundColor = '#8e1d42';
    iotBootcampCer.style.backgroundColor = '#8e1d42';
    cyberCer.style.backgroundColor = '#8e1d42';
});

infosysHighCer.addEventListener('click', function(){
    image.src = '../certificates/infoHighImpactPresentation.jpg';
    ibmCer.style.backgroundColor = '#8e1d42';
    infosysCer.style.backgroundColor = '#8e1d42';
    infosysIotCer.style.backgroundColor = '#8e1d42';
    infosysHighCer.style.backgroundColor = '#fe2e52';
    pantechCer.style.backgroundColor = '#8e1d42';
    iotBootcampCer.style.backgroundColor = '#8e1d42';
    cyberCer.style.backgroundColor = '#8e1d42';
});

pantechCer.addEventListener('click', function(){
    image.src = '../certificates/pantech-3.jpg';
    ibmCer.style.backgroundColor = '#8e1d42';
    infosysCer.style.backgroundColor = '#8e1d42';
    infosysIotCer.style.backgroundColor = '#8e1d42';
    infosysHighCer.style.backgroundColor = '#8e1d42';
    pantechCer.style.backgroundColor = '#fe2e52';
    iotBootcampCer.style.backgroundColor = '#8e1d42';
    cyberCer.style.backgroundColor = '#8e1d42';
});

iotBootcampCer.addEventListener('click', function(){
    image.src = '../certificates/iotBootCamp.jpg';
    ibmCer.style.backgroundColor = '#8e1d42';
    infosysCer.style.backgroundColor = '#8e1d42';
    infosysIotCer.style.backgroundColor = '#8e1d42';
    infosysHighCer.style.backgroundColor = '#8e1d42';
    pantechCer.style.backgroundColor = '#8e1d42';
    iotBootcampCer.style.backgroundColor = '#fe2e52';
    cyberCer.style.backgroundColor = '#8e1d42';
});

cyberCer.addEventListener('click', function(){
    image.src = '../certificates/cyberForensics-4.jpg';
    ibmCer.style.backgroundColor = '#8e1d42';
    infosysCer.style.backgroundColor = '#8e1d42';
    infosysIotCer.style.backgroundColor = '#8e1d42';
    infosysHighCer.style.backgroundColor = '#8e1d42';
    pantechCer.style.backgroundColor = '#8e1d42';
    iotBootcampCer.style.backgroundColor = '#8e1d42';
    cyberCer.style.backgroundColor = '#fe2e52';
});