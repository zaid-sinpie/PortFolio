"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const certiImg = document.querySelector(".images");

//certificates classNames
const ibmPythonCer = document.querySelector(".certificate--1 ");
const infoPythonCer = document.querySelector(".certificate--2");
const infoIotCer = document.querySelector(".certificate--3");
const infoHighImpactPresentation = document.querySelector(".certificate--4");
const panIot = document.querySelector(".certificate--5");
const witBootcamp = document.querySelector(".certificate--6");
const cyberForensics = document.querySelector(".certificate--7");

//Education class name
const btechDegree = document.querySelector(".education1");
const hscResult = document.querySelector(".education2");
const sscResult = document.querySelector(".education3");

//display modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeBtn.addEventListener("click", function () {
  closeModal();
});

overlay.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

//certi showing

ibmPythonCer.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/uc?export=view&id=1yNzlpl0NU5mVeyKdRXsG_o5lTVcH3LyU";
});

infoPythonCer.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/uc?export=view&id=1YFpxnWALPfmgZCFNrLjXNNyOW_h3TWJB";
});

infoIotCer.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/uc?export=view&id=13zEa7ITesIpsJLHiyzVDsv42eJSLeVLt";
});

infoHighImpactPresentation.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/uc?export=view&id=1I-Uoke57WIlcchc6H5LDgebUy_0_EAt4";
});

panIot.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/uc?export=view&id=19Fi5v3OgRgJjidPv9BwkVVlqEYcpXqm7";
});

witBootcamp.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/uc?export=view&id=1SecokaV8_7sC14UzVeCUhu8Sl-nDxGnQ";
});

cyberForensics.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/uc?export=view&id=1-dA3KvChelH75TdVJ2bUU2T27AoY71PU";
});

//Educational marksheets showing

btechDegree.addEventListener("click", function () {
  openModal();
  certiImg.src = "";
});

hscResult.addEventListener("click", function () {
  openModal();
  certiImg.src = "";
});

sscResult.addEventListener("click", function () {
  openModal();
  certiImg.src = "";
});