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
const othersEn = [
  [
    "History of Park Comprehensive Growth Center",
    "Mamoud Gilk",
    "MawDevelopers",
    "Lorem Ipsom",
    "Conference",
  ],
  [
    "History of Bampur Innovation Center ",
    "MohammadReza Zakeri",
    "sabzlearn",
    "first core",
    "first event",
  ],
  [
    "History of Zahak Innovation Center ",
    "Sara Ziarati",
    "yahoo.com",
    "second core",
    "second event",
  ],
  [
    "History of Zabul University Growth Center ",
    "Emad Solhjoo",
    "google.com",
    "third core",
    "third event",
  ],
  [
    "History of Sarvan Growth Center ",
    "Farzane Madadi",
    "torob.ir",
    "Fourth core",
    "Fourth event",
  ],
  [
    "History of Maritime Growth Center ",
    "Reza Dadkhah",
    "toplearn.com",
    "fifth core",
    "fifth event",
  ],
  [
    "History of International Growth Center ",
    "Milad Bahrami",
    "react.org",
    "sixth core",
    "sixth event",
  ],
];

const titles = document.querySelectorAll(".others-title-items .item");
const info = document.querySelector(".detail-info-item");
const tabsDetail = document.querySelectorAll(".tabs-detail-item");

window.onload = function () {
  info.innerHTML = others[0][0];
};

let title_index = 0;

function firstPart(others) {
  titles.forEach((item, index) => {
    item.addEventListener("click", () => {
      info.innerHTML = others[index][0];
      title_index = index;
    });
  });
}

function otherPart(others) {
  tabsDetail.forEach((item, index) => {
    item.addEventListener("click", () => {
      info.innerHTML = others[title_index][index];
    });
  });
}


firstPart(others);
otherPart(others);

langFa.addEventListener("click", () => {
  firstPart(others);
});

langFa.addEventListener("click", () => {
  otherPart(others);
});

langEn.addEventListener("click", () => {
  firstPart(othersEn);
});

langEn.addEventListener("click", () => {
  otherPart(othersEn);
});
