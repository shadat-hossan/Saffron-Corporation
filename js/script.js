const reviewAllImg = document.querySelector(".reviewMassageLeftALLImg");
const reviewImg = document.querySelectorAll(".reviewMassageLeftALLImg img");
const reviewALlMassage = document.querySelector(".reviewALlMassage");
const dot = document.querySelectorAll(".charkel");
const h3 = document.querySelector(".testimonoalCardTopContant h3");

console.log(h3);

window.addEventListener("scroll", () => {
  if (window.scrollY > 2200) {
    h3.style.color = "#fff";
  } else {
    h3.style.color = "#333";
  }
  console.log(window.scrollY);
});

const slideImage = () => {
  var c = 0;
  setInterval(function () {
    c += 170;
    reviewAllImg.style.transform = `translateY(-${c}px)`;
    if (c == 340) {
      c = 0;
    }
  }, 4000);
};

slideImage();

const slideMassage = (n) => {
  var d = 0;
  setInterval(function () {
    d += 202;
    reviewALlMassage.style.transform = `translateY(-${d}px)`;

    if (d == 0) {
      dot[0].classList.add("cActive");
      dot[1].classList.remove("cActive");
      dot[2].classList.remove("cActive");
    }
    if (d == 202) {
      dot[0].classList.remove("cActive");
      dot[1].classList.add("cActive");
      dot[2].classList.remove("cActive");
    }
    if (d == 404) {
      dot[0].classList.remove("cActive");
      dot[1].classList.remove("cActive");
      dot[2].classList.add("cActive");
    }
    if (d == 404) {
      d = 0;
    }
  }, 4000);
};
slideMassage();

console.log(dot[0]);
const currentSlide = (n) => {
  slideMassage(n);
  if (n == 1) {
    dot[0].classList.add("cActive");
    dot[1].classList.remove("cActive");
    dot[2].classList.remove("cActive");
  }
  if (n == 2) {
    dot[0].classList.remove("cActive");
    dot[1].classList.add("cActive");
    dot[2].classList.remove("cActive");
  }
  if (n == 3) {
    dot[0].classList.remove("cActive");
    dot[1].classList.remove("cActive");
    dot[2].classList.add("cActive");
  }
};
