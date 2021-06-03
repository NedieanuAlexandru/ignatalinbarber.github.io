"user strict";

// Content settings
const wrapperPrices = document.querySelector(".wrapper-prices");
const wrapperProgram = document.querySelector(".wrapper-program");
const wrapperGallery = document.querySelector(".wrapper-slider");
const btnPrices = document.getElementById("price");
const btnProgram = document.getElementById("schedule");
const btnGallery = document.getElementById("gallery");

// Modal settings
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.getElementById("img-map");
const openMap = document.getElementById("to-map");

// Modal window show/close
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
openMap.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Content show/close
const showPrices = function () {
  wrapperPrices.classList.remove("hidden");
  wrapperProgram.classList.add("hidden");
  wrapperGallery.classList.add("hidden");
};

const showProgram = function () {
  wrapperProgram.classList.remove("hidden");
  wrapperPrices.classList.add("hidden");
  wrapperGallery.classList.add("hidden");
};

const showGallery = function () {
  wrapperGallery.classList.remove("hidden");
  wrapperPrices.classList.add("hidden");
  wrapperProgram.classList.add("hidden");
};

btnPrices.addEventListener("click", showPrices);
btnProgram.addEventListener("click", showProgram);
btnGallery.addEventListener("click", showGallery);
