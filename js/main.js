const nav = document.querySelector(".header__nav");
const hamburger = document.querySelector(".header__hamburger");
const links = document.querySelectorAll(".header__nav-link");
const mask = document.querySelector(".header__mask");

const toggleMenu = () => {
  const isOpen = nav.classList.toggle("is-open");
  hamburger.classList.toggle("is-open");
  mask.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", isOpen);
};
const closeMenu = () => {
  nav.classList.remove("is-open");
  hamburger.classList.remove("is-open");
  mask.classList.remove("is-open");
};

hamburger.addEventListener("click", toggleMenu);
mask.addEventListener("click", closeMenu);
links.forEach(link => link.addEventListener("click", closeMenu));