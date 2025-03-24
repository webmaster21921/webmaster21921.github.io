window.addEventListener('scroll', () => {
  const title = document.querySelector('.name');
  const scrollY = window.scrollY; 
  const fadePoint = 250; 
  let opacity = 1 - scrollY / fadePoint;
  opacity = Math.max(opacity, 0);
  title.style.opacity = opacity;
});

window.addEventListener('scroll', () => {
const title = document.querySelector('.name-container');
const scrollY = window.scrollY; 
const fadePoint = 250; 
let opacity = 1 - scrollY / fadePoint;
opacity = Math.max(opacity, 0);
title.style.opacity = opacity;
});

const swiper = new Swiper('.swiper', {
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 3000,               
    disableOnInteraction: false // Continues autoplay after user interacts
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}