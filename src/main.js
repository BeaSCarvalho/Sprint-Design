import {
  searchByName,
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
} from "./data.js";
/*import { startPageHome, startPageFilters } from "./js/start-page.js";*/
import { addButton, createCards } from "./js/cards.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
const nameTyped = document.getElementById("name-pokemon");
const selectType = document.getElementById("filter-type");
const selectWeakness = document.getElementById("filter-weaknesses");
const resultCards = document.getElementById("result-cards");
const selectOrder = document.getElementById("order-selector");
const selectOrderByWeakness = document.getElementById("calculation-selector");
const percentage = document.getElementById("quantify-text");
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

createCards(pokemons);

function searchNamePokemon(e) {
  let name = e.target.value;
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  pokemons = searchByName(pokemons, name);
  createCards(pokemons);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro nome!</p>
    `;
  }
  pokemons = data.pokemon;
};

nameTyped.addEventListener("keyup", searchNamePokemon);

function activeFilterType(e) {
  const selectedValue = e.target.value;
  pokemons = filterByType(pokemons, selectedValue);
  createCards(pokemons);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  }
  pokemons = data.pokemon;
};

selectType.addEventListener("change", activeFilterType);

function activeFilterWeakness(e) {
  const selectedValue = e.target.value;
  pokemons = filterByWeakness(pokemons, selectedValue);
  createCards(pokemons);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  }
  pokemons = data.pokemon
};

selectWeakness.addEventListener("change", activeFilterWeakness);

function orderToShow(e) {
  const selectedOrder = e.target.value;
  pokemons = alphabeticOrder(pokemons, selectedOrder);
  createCards(pokemons);
};

selectOrder.addEventListener("change", orderToShow);

function showInOrderOfWeakness(e) {
  const selectedOrderByWeakness = e.target.value;
  pokemons = orderOfWeakness(pokemons, selectedOrderByWeakness);
  createCards(pokemons);
};

selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);

function showPercentagePerFilter() {
  let totalOfPokemons = pokemons.length;
  const showThePercentage = percentagePerFilter(pokemons, totalOfPokemons);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}

showPercentagePerFilter()




