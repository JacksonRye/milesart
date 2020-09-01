const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".menu > a");

hamburger.addEventListener("click", closeMenu());

navLinks.forEach((navLink) => navLink.addEventListener("click", closeMenu()));

function closeMenu() {
  return function () {
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
  };
}

// Slide show
var slideIndex = 1;
showSlides(slideIndex);

// Next / previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
