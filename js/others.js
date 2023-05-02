const others = [
  [
    "تاریخچه مرکز رشد جامع پارک",
    "محمود گیلک",
    "MawDevelopers",
    "لورم ایپسوم",
    "کنفرانس",
  ],
  [
    "تاریخچه مرکز نوآوری بمپور ",
    "محمدرضا ذاکری",
    "sabzlearn",
    "هسته اول",
    "رویداد اول",
  ],
  [
    "تاریخچه مرکز نوآوری زهک ",
    "سارا زیارتی",
    "yahoo.com",
    "هسته دوم",
    "رویداد دوم",
  ],
  [
    "تاریخچه مرکز رشد دانشگاه زابل ",
    "عماد صلح‌جو",
    "google.com",
    "هسته سوم",
    "رویداد سوم",
  ],
  [
    "تاریخچه مرکز رشد سروان ",
    "فرزانه مددی",
    "torob.ir",
    "هسته چهارم",
    "رویداد چهارم",
  ],
  [
    "تاریخچه مرکز رشد دریانوردی ",
    "رضا دادخواه",
    "toplearn.com",
    "هسته پنجم",
    "رویداد پنجم",
  ],
  [
    "تاریخچه مرکز رشد بین‌الملل ",
    "میلاد بهرامی",
    "react.org",
    "هسته ششم",
    "رویداد ششم",
  ],
];

const titles = document.querySelectorAll(".others-title-items .item");
const info = document.querySelector(".detail-info-item");
const tabsDetail = document.querySelectorAll(".tabs-detail-item");

window.onload = function () {
  info.innerHTML = others[0][0];
};

let title_index = 0;

titles.forEach((item, index) => {
  item.addEventListener("click", () => {
    info.innerHTML = others[index][0];
    title_index = index;
  });
});

tabsDetail.forEach((item, index) => {
  item.addEventListener("click", () => {
    info.innerHTML = others[title_index][index];
  });
});
