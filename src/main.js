import { filterByType, filterByWeakness, alphabeticOrder } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
let changeFormCheck = document.getElementById("container-checkbox");
let namePokemon = document.getElementById("name-pokemon");
var formCheckeds = document.forms.formFilters.elements;
var formCheckType = document.forms.formFilters.elements.type;
var formCheckWeakness = document.forms.formFilters.elements.weakness;
let confirmationButton = document.getElementById("confirm-button");
let clearButton = document.getElementById("clear-button");
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

startSiteOnpokemon();

function startSiteOnpokemon() {
  let url = Array.from(location.href).join();
  url = url.replace(/\W/g, "");
  url = url.includes("filters");
  if (url === true) {
    startPageFilters();
  } else {
    let containerMain = document.querySelector(".main-home");
    containerMain.style.height = "";
    startPageHome();
  }
}

function startPageHome() {
  let rotationPage = false;
  do {
    heightWindowHome();
    rotationPage = screen.orientation.onchange = function (e) {
      location.reload();
    };
  } while (rotationPage == false);
  let clickPokedex = document.getElementsByClassName("pokedex-close").onclick;
  if (clickPokedex == true) {
    window.location.href = "filters.html";
    startPageFilters();
  }
}

function heightWindowHome() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").offsetHeight);
  let heightText = Number(document.querySelector(".intro-text").offsetHeight);
  let heightTab = Number(document.querySelector(".details-info").offsetHeight);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}

function startPageFilters() {
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }
  namePokemon.addEventListener("change", changeFormName);
  changeFormCheck.addEventListener("change", changeFormCheckbox);
  clearButton.addEventListener("click", clearFormFilters);
}

function changeFormCheckbox(e) {
  let countChecked = 0;
  if (e.target.checked == true) {
    namePokemon.disabled = true;
    confirmationButton.addEventListener("click", formCheckbox);
    changeFormCheck.addEventListener("change", function () {
      countChecked += 1;
    });
  } else {
    let countNoChecked = 0;
    for (let i = 0; i < formCheckType.length; i++) {
      if (formCheckType[i].checked || formCheckWeakness[i].checked) {
        countNoChecked += 1;
      }
    }
    countChecked -= countNoChecked;
    if (countChecked == 0) namePokemon.disabled = false;
    namePokemon.addEventListener("change", changeFormName);
    changeFormCheck.addEventListener("change", changeFormCheckbox);
  }
}

function changeFormName(e) {
  if (e.target.value != "") {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = true;
      formCheckWeakness[i].disabled = true;
    }
    confirmationButton.addEventListener("click", formName);
    namePokemon.addEventListener("change", changeFormName);
  } else {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = false;
      formCheckWeakness[i].disabled = false;
    }
    startPageFilters();
  }
}

function formName(e) {
  e.preventDefault();
  let namePokemon = document.getElementById("name-pokemon").value;
  resultName = namePokemon.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  startPageFilters();
}

function formCheckbox(e) {
  e.preventDefault();
  let formCheckType = document.forms.formFilters.elements.type;
  let formCheckWeakness = document.forms.formFilters.elements.weakness;
  for (let i = 0; i < formCheckType.length; i++) {
    if (formCheckType[i].checked) {
      resultsType += formCheckType[i].value + ",";
    } else if (formCheckWeakness[i].checked) {
      resultsWeakness += formCheckWeakness[i].value + ",";
    }
  }
  startPageFilters();
}

function clearFormFilters() {
  namePokemon = "";
  resultsType = "";
  resultsWeakness = "";
  for (let i = 0; i <= inputsCheckbox.length; i++) {
    inputsCheckbox[i].disabled = false;
  }
}

function showResults() {
  resultsType = resultsType.split(",");
  resultsType.pop();
  resultsWeakness = resultsWeakness.split(",");
  resultsWeakness.pop();

  /*
    let resultsType = "";
    let resultsWeakness = "";
    let resultName = "";

    comparar os valores, caso sim, enviar para o card
    filtros
  */

  createCards(pokemons);
}

function createCards(data) {
  document.getElementById("result-cards").innerHTML = data
    .map((item) => {
      return `
    <div class="card">
      <img class="pokedex-open" src="img/pokedex-open.png">
      <p class="poke-number">${item.num}</p>
      <div class="card-box">
        <figure class="box-poke-img">
          <img class="poke-img" src="${item.img}" alt=${item.name}>
        </figure>
        <main class="box-poke-text">
          <h4 class="poke-title"> ${
            item.name[0].toUpperCase() + item.name.substr(1)
          }</h4>
          <ul class="poke-items">
            <span class="poke-item-title">Tipo: ${item.type}</span>
          </ul>
          <ul class="poke-items">
            <span class="poke-item-title">Fraqueza:
              <li>${item.weaknesses}</li>
            </span>  
          </ul>
        </main>
      </div>
    </div>
    `;
    })
    .join("");
}
