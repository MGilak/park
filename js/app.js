const dropContainer = document.querySelector(".drop-container");
const otherLang = document.querySelector(".other-lang");
const arrow = document.querySelector(".arrow");
const langEn = document.querySelector(".lang-en");
const langAr = document.querySelector(".lang-ar");
const langFa = document.querySelector(".lang-fa");
const lang_container = document.querySelector(".drop-container .lang");
const flag_container = document.querySelector(".drop-container .flag img");

dropContainer.addEventListener("click", () => {
  otherLang.classList.toggle("show");
  arrow.classList.toggle("rotate");
});

langEn.addEventListener("click", () => {
  changeLangContainer("انگلیسی", "./images/usa.png");
});
langAr.addEventListener("click", () => {
  changeLangContainer("عربی", "./images/ar.png");
});
langFa.addEventListener("click", () => {
  changeLangContainer("فارسی", "./images/icons8-iran-96 1.png");
});

function changeLangContainer(lang, src) {
  lang_container.innerHTML = lang;
  flag_container.src = src;
  otherLang.classList.remove("show");
  arrow.classList.remove("rotate");
}

// swiper slider
let swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

let swiper2 = new Swiper(".swiper2", {
  direction: "vertical",
  slidesPerView: "auto",
  grabCursor: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

var swiper3 = new Swiper(".swiper3", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper4 = new Swiper(".swiper4", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

// ruler-item
const rulerSwiperslides = document.querySelectorAll(
  ".ruler-item .swiper-slide"
);
changeActive(rulerSwiperslides);

// add and remove active class
function changeActive(nodeList) {
  nodeList.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].classList.contains("active")) {
          nodeList[i].classList.remove("active");
        }
      }

      item.classList.add("active");
    });
  });
}

// others
const othersItem = document.querySelectorAll(".others-title .item");
changeActive(othersItem);

// responsive
// header
const humbutgarMenu = document.querySelector(".humbutgar-menu");
const navbar = document.querySelector(".nav-bar nav");
const closeNavbar = document.querySelector(".close");

humbutgarMenu.addEventListener("click", () => {
  navbar.classList.add("show");
  document.body.classList.add("open-menu");
  if (navbar.classList.contains("close-again")) {
    navbar.classList.remove("close-again");
  }
});

closeNavbar.addEventListener("click", () => {
  navbar.classList.add("close-again");
  document.body.classList.remove("open-menu");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
});

document.onclick = function (e) {
  if (!navbar.contains(e.target) && !humbutgarMenu.contains(e.target)) {
    document.body.classList.remove("open-menu");
    navbar.classList.remove("show");
    document.body.classList.remove("open-menu");
  }
};
