export function pageHome() {
  const container = document.createElement("div");
  container.setAttribute("id", "container-pokemon");
  container.innerHTML = `
<main>
  <section id="background">
    <div class="box">
      <div class="box-image"><img src="img/carousel-and-background/carousel-one.png" class="img-carousel"/></div>
      <div class="box-image"><img src="img/carousel-and-background/carousel-two.png" class="img-carousel"/></div>
      <div class="box-image"><img src="img/carousel-and-background/carousel-three.png" class="img-carousel" /></div>
    </div>
  <section class="box-cursor"></section>
</main>

<footer id="contacts">
  <nav class="about-us">
    <h2 class="title-about">ABOUT US</h2>
    <div class="container-contacts">
      <address class="about-contact cont1">
        <p class="name">Adriana Watanabe</p>
        <a href="https://github.com/adrianatwatanabe" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/adrianatwatanabe</p>
        </a>
      </address>

      <address class="about-contact cont2">
        <p class="name">Ana Clara Freitas</p>
        <a href="https://github.com/AnaClaraFreitas" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/AnaClaraFreitas</p>
        </a>
      </address>

      <address class="about-contact cont3">
        <p class="name">Beatriz Carvalho</p>
        <a href="https://github.com/BeaSCarvalho" class="git"><br />
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/BeaSCarvalho</p>
        </a>
      </address>

      <address class="about-contact cont4">
        <p class="name">Érika Krause</p>
        <a href="https://github.com/erikakrause" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/erikakrause</p>
        </a>
      </address>

      <address class="about-contact cont5">
        <p class="name">Helena Gonçalves</p>
        <a href=" https://github.com/nannayusuf" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/nannayusuf</p>
        </a>
      </address>

      <address class="about-contact cont6">
        <p class="name">Marione Pereira</p>
        <a href=" https://github.com/Marione-Tainara" class="git">
          <img src="./img/icons/icon-github.png" alt="logo github" class="icon-git" />
          <p class="link-git">github.com/Marione-Tainara</p>
        </a>
      </address>
  </nav>
  <a href="index.html#header-filters">
    <button type="button" id="back-button-home" class="btn-action">
      <img src="./img/icons/icon-up-arrow.png" alt="Back to top">
    </button>
  </a>
</footer>

  `;
  return container;
}

let interval = 0;

export function initHome (){
  let maxSlider = document.querySelectorAll(".box-image").length - 1;
  initSizeBackground();
  disappearBanner(maxSlider);
  actionOfAppearing(maxSlider);
  controllerBanner();
}

function disappearBanner(maxSlider) {
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

function actionOfAppearing(maxSlider) {
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
        count.classList.add("marker");
      });
    });
}

function initSizeBackground() {
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
  const bannerImage = document.querySelectorAll(".img-carousel");
  if (heightWindow < widthWindow) {
    bannerImage[0].style.width = "";
    bannerImage[1].style.width = "";
    bannerImage[2].style.width = "";
    bannerImage[0].style.height = "60vh";
    bannerImage[1].style.height = "60vh";
    bannerImage[2].style.height = "60vh";
  } else {
    bannerImage[0].style.width = "90vw";
    bannerImage[1].style.width = "90vw";
    bannerImage[2].style.width = "90vw";
    bannerImage[0].style.height = "";
    bannerImage[1].style.height = "";
    bannerImage[2].style.height = "";
  }
}
