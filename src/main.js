import {
  searchByName,
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
} from "./data.js";
import { startPageHome, startPageFilters } from "./js/start-page.js";
import {
  addButton,
  createCards,
  createLiType,
  createLiWeakness,
} from "./js/cards.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
const formCheckType = document.querySelectorAll("input[name=type]");
const formCheckWeakness = document.querySelectorAll("input[name=weakness]");
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

export let searchNamePokemon = () => {
  let name = document.getElementById("name-pokemon").value;
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  pokemons = searchByName(pokemons, resultName);
  createCards(pokemons);
  showResults();
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro nome!</p>
    `;
  }
};

export let formCheckbox = () => {
  for (let i = 0; i < formCheckType.length; i++) {
    if (formCheckType[i].checked) {
      resultsType += formCheckType[i].value + " ";
    }
    if (formCheckWeakness[i].checked) {
      resultsWeakness += formCheckWeakness[i].value + " ";
    }
  }
  showResults();
};

function showResults() {
  if (resultsType != "") {
    resultsType = resultsType.split(" ");
    resultsType.pop();
    for (let i = 0; i < resultsType.length; i++) {
      activeFilterType(resultsType[i]);
      showPercentagePerFilter();
    }
    selectOrder.addEventListener("change", orderToShow);
    selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);
  }
  if (resultsWeakness != "") {
    resultsWeakness = resultsWeakness.split(" ");
    resultsWeakness.pop();
    for (let i = 0; i < resultsWeakness.length; i++) {
      activeFilterWeakness(resultsWeakness[i]);
      showPercentagePerFilter();
    }
    selectOrder.addEventListener("change", orderToShow);
    selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);
  }
  if (resultName != "") {
    createLiType();
    createLiWeakness();
    selectOrder.addEventListener("change", orderToShow);
    selectOrderByWeakness.addEven;
  }
  resultName = "";
  resultsType = "";
  resultsWeakness = "";
  addButton();
}

function activeFilterType(selectedValue) {
  pokemons = filterByType(pokemons, selectedValue);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  } else {
    createCards(pokemons);
    createLiType();
    createLiWeakness();
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
    createLiType();
    createLiWeakness();
  }
}

export let orderToShow = () => {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
  createLiType();
  createLiWeakness();
};

export let showInOrderOfWeakness = () => {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
  createLiType();
  createLiWeakness();
};

function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, data.pokemon.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
