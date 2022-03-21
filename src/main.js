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

createCards(data.pokemon)

function searchNamePokemon() {
  let resultName = "";
  let name = nameTyped.value;
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  createCards(searchByName(data.pokemon, resultName));
  if (data.pokemon == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro nome!</p>
    `;
  }
}

nameTyped.addEventListener("keyup", searchNamePokemon);

function activeFilters() {
  let selectedValueTypeOrWeakness = selectTypeOrWeakness.value;
  let selectedValueAttribute = selectAtributte.value;
  let resultOfFilters = filterBy(data.pokemon, selectedValueTypeOrWeakness, selectedValueAttribute)

  percentage.innerHTML = `Esse filtro representa
  ${percentagePerFilter(resultOfFilters.length, data.pokemon.length)}% do total de Pokemons.`;

  createCards(resultOfFilters)
  if (data.pokemon == "") {
    resultCards.innerHTML = `
    <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  }
}

selectTypeOrWeakness.addEventListener("change", activeFilters);
selectAtributte.addEventListener("change", activeFilters);

function orderToShow() {
  const selectedOrder = selectOrder.value;
  createCards(alphabeticOrder(data.pokemon,selectedOrder))
  activeFilters(alphabeticOrder(data.pokemon,selectedOrder));
} 

selectOrder.addEventListener("change", orderToShow);

function showInOrderOfWeakness() {
  const selectedOrderByWeakness = selectOrderByWeakness.value;
  createCards(orderOfWeakness(data.pokemon,selectedOrderByWeakness))
  activeFilters(orderOfWeakness(data.pokemon, selectedOrderByWeakness))
}

selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);






