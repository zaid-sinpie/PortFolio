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
  certiImg.src = "../certificates/IBM-0.jpg";
});

infoPythonCer.addEventListener("click", function () {
  openModal();
  certiImg.src = "../certificates/Info-1.jpg";
});

infoIotCer.addEventListener("click", function () {
  openModal();
  certiImg.src = "https://drive.google.com/file/d/1Bov1QSkVDItVuSjavtoCkjlxxLqQFbf5/view?usp=sharing";
});

infoHighImpactPresentation.addEventListener("click", function () {
  openModal();
  certiImg.src = "../certificates/infoHighImpactPresentation.jpg";
});

panIot.addEventListener("click", function () {
  openModal();
  certiImg.src = "../certificates/pantech-3.jpg";
});

witBootcamp.addEventListener("click", function () {
  openModal();
  certiImg.src = "../certificates/iotBootCamp.jpg";
});

cyberForensics.addEventListener("click", function () {
  openModal();
  certiImg.src = "../certificates/cyberForensics-4.jpg";
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