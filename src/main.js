import { startPageHome } from "./js/start-page.js";
import {
  searchByName,
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
} from "./js/data.js";
import { createCards } from "./js/cards.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
const resultCards = document.getElementById("result-cards");
const namePokemon = document.getElementById("name-pokemon");
const selectOrder = document.getElementById("order-selector");
const selectOrderByWeakness = document.getElementById("calculation-selector");
const percentage = document.getElementById("quantify-text");
const cleanButton = document.getElementById("clean-button");

startSiteOnpokemon();

function startPageFilters() {
  console.log("Entrei");
  /*
  namePokemon.addEventListener("change", searchNamePokemon);
  //Adicionar filtro Types
  //Adicionar filtro Weaknesses
  selectOrder.addEventListener("change", orderToShow);
  selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);
  addButton();
  clearButton.addEventListener("click", function () {
    location.reload();
  });
  */
}

/*
function searchNamePokemon() {
  let name = namePokemon.value;
  name = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  pokemons = searchByName(pokemons, name);
  createCards(pokemons);
  showResults();
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro nome!</p>
    `;
  }
}

function activeFilterType(selectedValue) {
  pokemons = filterByType(pokemons, selectedValue);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  } else {
    createCards(pokemons);
  }
}

function activeFilterWeakness(selectedValue) {
  pokemons = filterByWeakness(pokemons, selectedValue);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  } else {
    createCards(pokemons);
  }
}

export let orderToShow = () => {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
};

export let showInOrderOfWeakness = () => {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
};

function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, data.pokemon.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
*/

function startSiteOnpokemon() {
  let url = Array.from(location.href).join();
  url = url.replace(/\W/g, "");
  url = url.includes("filters");
  if (url === true) {
    startPageFilters();
  } else {
    let containerMain = document.getElementById("main-home");
    containerMain.style.height = "";
    startPageHome();
  }
}

const phrase = document.querySelector("#quantify-text");
typeWriter(phrase);

function typeWriter(letter) {
  const textArray = letter.innerHTML.split("");
  letter.innerHTML = "";
  textArray.forEach((arr, i) => {
    setTimeout(() => (letter.innerHTML += arr), 75 * i);
  });
}
