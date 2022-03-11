import {
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
} from "./data.js";
import { startPageHome, startPageFilters } from "./js/start-page.js";
import { clearFormFilters, clearName, clearCheckbox } from "./js/clear-form.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
let formCheckType = document.forms.formFilters.elements.type;
let formCheckWeakness = document.forms.formFilters.elements.weakness;
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

const selectOrder = document
  .getElementById("order-selector")
  .addEventListener("change", orderToShow);
const selectOrderByWeakness = document
  .getElementById("calculation-selector")
  .addEventListener("change", showInOrderOfWeakness);
const percentage = document.getElementById("quantify-text");

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

export let searchNamePokemon = (e) => {
  e.preventDefault();
  let name = document.getElementById("name-pokemon").value;
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  //fazer filtro

  clearName();
  showResults();
};

export let formCheckbox = (e) => {
  e.preventDefault();
  for (let i = 0; i < formCheckType.length; i++) {
    if (formCheckType[i].checked) {
      resultsType += formCheckType[i].value + ",";
    } else if (formCheckWeakness[i].checked) {
      resultsWeakness += formCheckWeakness[i].value + ",";
    }
  }
  clearCheckbox();
  showResults();
};

function showResults() {
  if (resultsType != "") {
    resultsType = resultsType.split(",");
    resultsType.pop();
    for (let i = 0; i < resultsType.length; i++) {
      activeFilterType(resultsType[i]);
      //showPercentagePerFilter(resultsType[i]);
    }
  }
  if (resultsWeakness != "") {
    resultsWeakness = resultsWeakness.split(",");
    resultsWeakness.pop();
    for (let i = 0; i < resultsWeakness.length; i++) {
      activeFilterWeakness(resultsWeakness[i]);
      //showPercentagePerFilter(resultsWeakness[i]);
    }
  }
  if (resultName != "") {
    console.log("nome");
  }
  addButton();
  createCards(pokemons);
}

function activeFilterType(selectedValue) {
  pokemons = filterByType(pokemons, selectedValue);
  createCards(pokemons);
}
function activeFilterWeakness(selectedValue) {
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
/*
function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
*/

function addButton() {
  document.getElementById("show-the-cards").innerHTML = `
  <a href="filters.html">
    <button type="button" id="back-button" class="back-button">
      &#8634;
    </button>
  </a>;
`;
}

function createCards(data) {
  document.getElementsByClassName("result-cards").innerHTML = data
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
