let interval = 0;
let maxSlider = document.querySelectorAll(".box-image").length - 1;

disappearBanner();
actionOfAppearing();
controllerBanner();
heightBackground();

function disappearBanner() {
  let img = document.querySelectorAll(".box-image img");
  let span = document.querySelector(".box-cursor");

  img[1].style.display = "none";
  img[2].style.display = "none";

  for (let i = 0; i < maxSlider + 1; i++) {
    if (i == 0) {
      span.innerHTML += '<span class="marker"></span>';
    } else {
      span.innerHTML += "<span></span>";
    }
  }
}

function actionOfAppearing() {
  let img = document.querySelectorAll(".box-image img");
  let span = document.querySelectorAll(".box-cursor span");

  setInterval(function () {
    img[interval].style.display = "none";
    span[interval].classList.remove("marker");
    interval++;
    if (interval > maxSlider) {
      interval = 0;
    }
    img[interval].style.display = "block";
    span[interval].classList.add("marker");
  }, 5000);
}

function controllerBanner() {
  let img = document.querySelectorAll(".box-image img");
  document
    .querySelectorAll(".box-cursor span")
    .forEach(function (count, index) {
      count.addEventListener("click", function () {
        img[interval].style.display = "none";
        interval = index;
        img[interval].style.display = "block";

        let div = document.querySelectorAll(".box-cursor span").length;

        if (div == 3) {
          document
            .querySelectorAll(".box-cursor span")
            .forEach(function (count) {
              count.classList.remove("marker");
            });
        }

        valor.classList.add("marker");
      });
    });
}

function heightBackground() {
  const heightWindow = Number(window.screen.height);
  const heightHeader = Number(
    document.querySelector("#header-filters").offsetHeight
  );
  const heightBox = Number(document.querySelector(".box-cursor").offsetHeight);
  const box = document.querySelector(".box");
  const buttonBox = document.querySelector(".box-cursor span");

  let paddingBox = window.getComputedStyle(box).paddingTop;
  let heightButton = window.getComputedStyle(buttonBox).height;
  const regex = /\D|,/g;
  paddingBox = Number(paddingBox.replace(regex, "")) * 2;
  heightButton = Number(heightButton.replace(regex, "")) * 2;

  let sumAll =
    heightWindow - (heightHeader + heightBox + paddingBox + heightButton);
  let count = sumAll - 1080;
  count = Math.abs(count);

  let containerBanner = document.getElementsByClassName("img-carousel");
  containerBanner[0].style.height = count + "px";
  containerBanner[1].style.height = count + "px";
  containerBanner[2].style.height = count + "px";
}