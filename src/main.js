import {
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
} from "./data.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
let changeCheckboxGeneral = document.getElementById("container-checkbox");
let namePokemon = document.querySelector("#name-pokemon");
let clearButton = document.getElementById("clear-button");
let resultName = "";
//const selectOrder = document.getElementById("order-selector").addEventListener("change", orderToShow);
//const selectOrderByWeakness = document.getElementById("calculation-selector").addEventListener("change", showInOrderOfWeakness);
const percentage = document.getElementById("quantify-text");
const checkboxTypeSelected = document.querySelectorAll("input[name=type]");
const checkboxWeaknessSelected = document.querySelectorAll(
  "input[name=weakness]"
);

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
  changeCheckboxGeneral.addEventListener("change", changeFormCheckbox);
  clearButton.addEventListener("click", clearFormFilters);
}

function changeFormName(e) {
  if (e.target.value != "") {
    for (let i = 0; i < checkboxTypeSelected.length; i++) {
      checkboxTypeSelected[i].disabled = true;
      checkboxWeaknessSelected[i].disabled = true;
    }
    let namePokemon = document.getElementById("name-pokemon").value;
    resultName = namePokemon
      .replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "")
      .toLocaleLowerCase();
    //Fazer filtro
  } else {
    for (let i = 0; i < checkboxTypeSelected.length; i++) {
      checkboxTypeSelected[i].disabled = false;
      checkboxWeaknessSelected[i].disabled = false;
    }
    resultName = "";
    namePokemon.disabled = false;
    startPageFilters();
  }
}

function formCheckbox() {
  for (let i = 0; i < checkboxTypeSelected.length; i++) {
    checkboxTypeSelected[i].addEventListener("click", activeFilterType);
    checkboxTypeSelected[i].addEventListener("click", showPercentagePerFilter);
    return true;
  }
  for (let i = 0; i < checkboxWeaknessSelected.length; i++) {
    checkboxWeaknessSelected[i].addEventListener("click", activeFilterWeakness);
    checkboxWeaknessSelected[i].addEventListener(
      "click",
      showPercentagePerFilter
    );
    return true;
  }
  return false;
}

function changeFormCheckbox() {
  let check = formCheckbox(); //enviou os checks
  if (check == true) {
    namePokemon.disabled = true;
    showResults();
  } else {
    namePokemon.disabled = false;
    startPageFilters();
  }
}

function clearFormFilters() {
  namePokemon.disabled = false;
  namePokemon = "";
  resultsType = "";
  resultsWeakness = "";
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].disabled = false;
    formCheckWeakness[i].disabled = false;
  }
}

function showResults() {
  createCards(pokemons);
}

function createCards(data) {
  document.getElementById("show-the-cards").innerHTML = `<a href="filters.html">
    <button type="button" id="back-button" class="back-button">
      &#8634;
    </button>
  </a>;`;

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

function activeFilterType(e) {
  const selectedValue = e.target.value;
  pokemons = filterByType(pokemons, selectedValue);
  createCards(pokemons);
}

function activeFilterWeakness(e) {
  const selectedValue = e.target.value;
  pokemons = filterByWeakness(pokemons, selectedValue);
  createCards(pokemons);
}

function orderToShow() {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
}

function showInOrderOfWeakness() {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
}

function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
