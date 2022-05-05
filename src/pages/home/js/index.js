let interval = 0;
let maxSlider = document.querySelectorAll(".box-image").length - 1;

initSizeBackground();
disappearBanner();
actionOfAppearing();
controllerBanner();

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

function initSizeBackground (){
  let rotationPage = false;
  do {
    heightBackground();
    rotationPage = screen.orientation.onchange = function () {
      location.reload();
    };
  } while (rotationPage == false);
}

function heightBackground() {
  const heightWindow = Number(window.screen.height);
  const widthWindow = Number(window.screen.width);
  const bannerImage = document.querySelectorAll('.img-carousel');
  if (heightWindow < widthWindow) {
    bannerImage[0].style.width = '';
    bannerImage[1].style.width = '';
    bannerImage[2].style.width = '';
    bannerImage[0].style.height = '60vh';
    bannerImage[1].style.height = '60vh';
    bannerImage[2].style.height = '60vh';
  } else {
    bannerImage[0].style.width = '90vw';
    bannerImage[1].style.width = '90vw';
    bannerImage[2].style.width = '90vw';
    bannerImage[0].style.height = '';
    bannerImage[1].style.height = '';
    bannerImage[2].style.height = '';
  }
}