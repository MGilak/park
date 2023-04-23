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
