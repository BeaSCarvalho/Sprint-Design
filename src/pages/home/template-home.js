import header from '../../components/header.js';

export default function pageHome() {
  const container = document.createElement("div");
  const templateHome = `
    <div id="container-pokemon">
      <main class="background">
        <div class="box">
          <div class="box-image"><img src="img/primeiro.png" /></div>
          <div class="box-image"><img src="img/segundo.png" /></div>
          <div class="box-image"><img src="img/terceiro.png" /></div>
        </div>

        <section class="box-cursor"></section>
        <nav class="principal">
          <section class="about-us">
            <h2 class="title-about">ABOUT US</h2>
            <div class="container-contacts">
              <section class="about-contact cont1">
                <p class="name">Adriana Watanabe</p>
                <a href="https://github.com/adrianatwatanabe" class="git">
                  <img src="./img/icon-github.png" alt="logo github" class="icon-git" />
                  <p class="about-name">github.com/adriantwatanabe</p>
                </a>
              </section>

              <section class="about-contact cont2">
                <p class="name">Ana Clara Freitas</p>
                <a href="https://github.com/AnaClaraFreitas" class="git">
                  <img src="./img/icon-github.png" alt="logo github" class="icon-git" />
                  <p class="about-name">github.com/AnaClaraFreitas</p>
                </a>
              </section>

              <section class="about-contact cont3">
                <p class="name">Beatriz Carvalho</p>
                <a href="https://github.com/BeaSCarvalho" class="git"><br />
                  <img src="./img/icon-github.png" alt="logo github" class="icon-git" />
                  <p class="about-name">github.com/BeaSCarvalho</p>
                </a>
              </section>

              <section class="about-contact cont4">
                <p class="name">Érika Krause</p>
                <a href="https://github.com/erikakrause" class="git">
                  <img src="./img/icon-github.png" alt="logo github" class="icon-git" />
                  <p class="about-name">github.com/erikakrause</p>
                </a>
              </section>

              <section class="about-contact cont5">
                <p class="name">Helena Gonçalves</p>
                <a href=" https://github.com/nannayusuf" class="git">
                  <img src="./img/icon-github.png" alt="logo github" class="icon-git" />
                  <p class="about-name">github.com/nannayusuf</p>
                </a>
              </section>

              <section class="about-contact cont6">
                <p class="name">Marione Pereira</p>
                <a href=" https://github.com/Marione-Tainara" class="git">
                  <img src="./img/icon-github.png" alt="logo github" class="icon-git" />
                  <p class="about-name">github.com/Marione-Tainara</p>
                </a>
              </section>
            </div>  
          </section>
        </nav>
      </main>
      <script src="./components/carrossel/carrossel.js"></script>
    </div>
  `;
  
  container.appendChild(header());
  container.innerHTML += templateHome;

  const buttonMobile = container.querySelector("#button-mobile");
  buttonMobile.addEventListener("click", toggleMenu);
  buttonMobile.addEventListener("touchstart", toggleMenu);


  function toggleMenu(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    const navigation = document.getElementById("nav");
    navigation.classList.toggle("active");
    const navActive = navigation.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", navActive);
    if (navActive) {
      event.currentTarget.setAttribute("aria-laberl", "Close Menu");
    } else {
      event.currentTarget.setAttribute("aria-laberl", "Open Menu");
    }
  }


  let interval = 0;

  let maxSlider = container.querySelectorAll(".box-image").length - 1;
  disappear();

  function disappear() {
    let img = container.querySelectorAll(".box-image img");
    let span = container.querySelector(".box-cursor");

    img[1].style.display = "none";
    img[2].style.display = "none";

    for (let i = 0; i < maxSlider + 1; i++) {
      if (i == 0) {
        span.innerHTML += '<span class="marcador"></span>';
      } else {
        span.innerHTML += "<span></span>";
      }
    } 
  }

  action();

  function action() {
    let img = container.querySelectorAll(".box-image img");
    let span = container.querySelectorAll(".box-cursor span");

    setInterval(function () {
      img[interval].style.display = "none";
      span[interval].classList.remove("marcador");
      interval++;
      if (interval > maxSlider) {
        interval = 0;
      }
      img[interval].style.display = "block";
      span[interval].classList.add("marcador");
    }, 5000);
  }

  controller();

  function controller() {
  let img = container.querySelectorAll(".box-image img");
  container
    .querySelectorAll(".box-cursor span")
    .forEach(function (value, index) {
      value.addEventListener("click", function () {
        img[interval].style.display = "none";
        interval = index;
        img[interval].style.display = "block";

        let div = container.querySelectorAll(".box-cursor span").length;

        if (div == 3) {
          container
            .querySelectorAll(".box-cursor span")
            .forEach(function (value) {
              value.classList.remove("marcador");
            });
        }

        value.classList.add("marcador");
      });
    });
  }

  return container;
}  
