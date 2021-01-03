// nav menu

const navList = [...document.querySelectorAll(".nav__link")];

navList.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add("nav__link--active");
  }
});

const addActivityToNav = (index) => {
  for (let i = 0; i < navList.length; i++) {
    if (i === Number(index)) {
      navList[i].classList.add("nav__link--active");
    } else {
      navList[i].classList.remove("nav__link--active");
    }
  }
};

document.querySelector(".nav__list").addEventListener("click", (event) => {
  if (event.target.classList.contains('nav__link')) {
    addActivityToNav(event.target.dataset.index);
  }
});
