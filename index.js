const bdayYear = document.querySelector(".year");

bdayYear.textContent = 1995;

var yearPlus = 1995;

const giveYear = () => {
  if (yearPlus != 2022) {
    yearPlus += 1;
    bdayYear.textContent = yearPlus;
  } else {
    bdayYear.textContent = 2022;
  }
};

setTimeout(() => {
  setInterval(giveYear, 100);
}, 4000);

const celeb = document.querySelector(".celeb");

setTimeout(() => {
  celeb.removeAttribute("loop", "");
}, 4120);