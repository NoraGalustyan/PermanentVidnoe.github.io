// Бургер меню
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// ОТЗЫВЫ

// JavaScript функциональность
const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let counter = 0;
const size = images[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

function nextSlide() {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

function prevSlide() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}

carouselSlide.addEventListener("transitionend", () => {
  if (images[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (images[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

window.addEventListener("resize", () => {
  const size = images[0].clientWidth;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
