/*import { changeFormName, changeFormCheckbox } from "./change-form.js";

export let startPageHome = () => {
  let rotationPage = false;
  do {
    heightWindowHome();
    rotationPage = screen.orientation.onchange = function () {
      location.reload();
    };
  } while (rotationPage == false);
  let clickPokedex = document.getElementsByClassName("pokedex-close").onclick;
  if (clickPokedex == true) {
    window.location.href = "filters.html";
    startPageFilters();
  }
};

export let startPageFilters = () => {
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }

  document
    .getElementById("name-pokemon")
    .addEventListener("change", changeFormName);
  document
    .getElementById("container-checkbox")
    .addEventListener("change", changeFormCheckbox);
  document
    .getElementById("clear-button")
    .addEventListener("click", function () {
      location.reload();
    });
};

function heightWindowHome() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").offsetHeight);
  let heightText = Number(document.querySelector(".intro-text").offsetHeight);
  let heightTab = Number(document.querySelector(".details-info").offsetHeight);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}*/
