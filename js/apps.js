let elHamburger = document.querySelector(".header__hamburger");
let elHeader = document.querySelector(".header");

elHamburger.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
} )