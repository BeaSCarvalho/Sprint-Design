import { startPageHome } from "./js/start-page.js";
import {
  searchByName,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
  filterBy,
} from "./data.js";
import { createCards } from "./js/cards.js";
import data from "./data/pokemon/pokemon.js";

const nameTyped = document.getElementById("name-pokemon");
const selectTypeOrWeakness = document.getElementById("filter-type-weakness");
const selectAtributte = document.getElementById("filter-atributtes");
const resultCards = document.getElementById("result-cards");
const selectOrder = document.getElementById("order-selector");
const selectOrderByWeakness = document.getElementById("calculation-selector");
const percentage = document.getElementById("quantify-text");

startSiteOnpokemon();

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

function startPageFilters() {
  createCards(data.pokemon);
  nameTyped.addEventListener("keyup", searchNamePokemon);
  nameTyped.addEventListener("change", function () {
    nameTyped.value = "";
  });
  selectTypeOrWeakness.addEventListener("change", activeFilters);
  selectAtributte.addEventListener("change", activeFilters);
  selectOrder.addEventListener("change", orderToShow);
  selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);

  const phrase = document.querySelector("#quantify-text");
  typeWriter(phrase);
}

function searchNamePokemon() {
  let name = nameTyped.value;
  let resultName = "";
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  resultName = searchByName(data.pokemon, resultName);
  createCards(resultName);
  resultName = resultName.length;
  percentagePokemon(resultName, data.pokemon);
}

function activeFilters() {
  let selectedValueTypeOrWeakness = selectTypeOrWeakness.value;
  let selectedValueAttribute = selectAtributte.value;
  let resultOfFilters = filterBy(
    data.pokemon,
    selectedValueTypeOrWeakness,
    selectedValueAttribute
  );
  createCards(resultOfFilters);
  resultOfFilters = resultOfFilters.length;
  percentagePokemon(resultOfFilters, data.pokemon);
}

function orderToShow() {
  const selectedOrder = selectOrder.value;
  activeFilters(alphabeticOrder(data.pokemon, selectedOrder));
}

function showInOrderOfWeakness() {
  const selectedOrderByWeakness = selectOrderByWeakness.value;
  activeFilters(orderOfWeakness(data.pokemon, selectedOrderByWeakness));
}

function percentagePokemon(resultOfFilters, pokemon) {
  pokemon = pokemon.length;
  let resultPercentage = percentagePerFilter(resultOfFilters, pokemon);
  percentage.innerHTML = `Esse filtro representa ${resultPercentage}% do total de Pokémons.`;
  if (resultPercentage == 0.0) {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  }
}

function typeWriter(letter) {
  const textArray = letter.innerHTML.split("");
  letter.innerHTML = "";
  textArray.forEach((arr, i) => {
    setTimeout(() => (letter.innerHTML += arr), 75 * i);
  });
}
