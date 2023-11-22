'use strict';

const ibmPythonCer= document.querySelector('.certificate1');
const infoPythonCer = document.querySelector('.certificate2');
const infoIotCer = document.querySelector('.certificate3');
const infoHighImpactPresentation = document.querySelector('.certificate4');
const panIot = document.querySelector('.certificate5');
const witBootcamp = document.querySelector('.certificate6');
const cyberForensics = document.querySelector('.certificate7');
const logo = document.querySelector('.logo');

const images = document.querySelector('.images');
const active = document.querySelector('.active-cer');

ibmPythonCer.addEventListener("click", function () {
    images.src = "https://drive.google.com/uc?export=view&id=1yNzlpl0NU5mVeyKdRXsG_o5lTVcH3LyU";
    ibmPythonCer.classList.add('active-cer');
    infoPythonCer.classList.remove('active-cer');
    infoIotCer.classList.remove('active-cer');
    infoHighImpactPresentation.classList.remove('active-cer');
    panIot.classList.remove('active-cer');
    witBootcamp.classList.remove('active-cer');
    cyberForensics.classList.remove('active-cer');
  });
  
  infoPythonCer.addEventListener("click", function () {
    images.src = "https://drive.google.com/uc?export=view&id=1YFpxnWALPfmgZCFNrLjXNNyOW_h3TWJB";
    ibmPythonCer.classList.remove('active-cer');
    infoPythonCer.classList.add('active-cer');
    infoIotCer.classList.remove('active-cer');
    infoHighImpactPresentation.classList.remove('active-cer');
    panIot.classList.remove('active-cer');
    witBootcamp.classList.remove('active-cer');
    cyberForensics.classList.remove('active-cer');
  });
  
  infoIotCer.addEventListener("click", function () {
    images.src = "https://drive.google.com/uc?export=view&id=13zEa7ITesIpsJLHiyzVDsv42eJSLeVLt";
    ibmPythonCer.classList.remove('active-cer');
    infoPythonCer.classList.remove('active-cer');
    infoIotCer.classList.add('active-cer');
    infoHighImpactPresentation.classList.remove('active-cer');
    panIot.classList.remove('active-cer');
    witBootcamp.classList.remove('active-cer');
    cyberForensics.classList.remove('active-cer');
  });
  
  infoHighImpactPresentation.addEventListener("click", function () {
    images.src = "https://drive.google.com/uc?export=view&id=1I-Uoke57WIlcchc6H5LDgebUy_0_EAt4";
    ibmPythonCer.classList.remove('active-cer');
    infoPythonCer.classList.remove('active-cer');
    infoIotCer.classList.remove('active-cer');
    infoHighImpactPresentation.classList.add('active-cer');
    panIot.classList.remove('active-cer');
    witBootcamp.classList.remove('active-cer');
    cyberForensics.classList.remove('active-cer');
  });
  
  panIot.addEventListener("click", function () {
    images.src = "https://drive.google.com/uc?export=view&id=19Fi5v3OgRgJjidPv9BwkVVlqEYcpXqm7";
    ibmPythonCer.classList.remove('active-cer');
    infoPythonCer.classList.remove('active-cer');
    infoIotCer.classList.remove('active-cer');
    infoHighImpactPresentation.classList.remove('active-cer');
    panIot.classList.add('active-cer');
    witBootcamp.classList.remove('active-cer');
    cyberForensics.classList.remove('active-cer');
  });
  
  witBootcamp.addEventListener("click", function () {
    images.src = "https://drive.google.com/uc?export=view&id=1SecokaV8_7sC14UzVeCUhu8Sl-nDxGnQ";
    ibmPythonCer.classList.remove('active-cer');
    infoPythonCer.classList.remove('active-cer');
    infoIotCer.classList.remove('active-cer');
    infoHighImpactPresentation.classList.remove('active-cer');
    panIot.classList.remove('active-cer');
    witBootcamp.classList.add('active-cer');
    cyberForensics.classList.remove('active-cer');
  });
  
  cyberForensics.addEventListener("click", function () {
    images.src = "https://drive.google.com/uc?export=view&id=1-dA3KvChelH75TdVJ2bUU2T27AoY71PU";
    ibmPythonCer.classList.remove('active-cer');
    infoPythonCer.classList.remove('active-cer');
    infoIotCer.classList.remove('active-cer');
    infoHighImpactPresentation.classList.remove('active-cer');
    panIot.classList.remove('active-cer');
    witBootcamp.classList.remove('active-cer');
    cyberForensics.classList.add('active-cer');
  });

  logo.addEventListener('click',function(){
    location.href = 'https://drive.google.com/file/d/10ZfdNP4dSzvaSNJMuI2sEI_DKP2amNyA/view?usp=sharing';
});