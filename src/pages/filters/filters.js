import {
  searchByName,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
  filterBy,
  filterRarity,
} from './data.js';
import data from "../../data/pokemon/pokemon.js";
import { createCards } from './cards.js';

/* funciona */
export function searchNamePokemon(nameTyped) {
  let name = nameTyped.value;
  let resultName = "";
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  resultName = searchByName(data.pokemon, resultName);
  createCards(resultName);
  resultName = resultName.length;
  percentagePokemon(resultName, data.pokemon);
}

export function activeFilters() {
  let selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  let selectAtributte = document.querySelector("#filter-atributtes");
  selectTypeOrWeakness = selectTypeOrWeakness.value;
  selectAtributte = selectAtributte.value;
  let resultOfFilters = filterBy(
    data.pokemon,
    selectTypeOrWeakness,
    selectAtributte
  );
  createCards(resultOfFilters);
  resultOfFilters = resultOfFilters.length;
  percentagePokemon(resultOfFilters, data.pokemon);
}

export function orderToShow() {
  let selectedOrder = document.querySelector("#order-selector");
  selectedOrder = selectedOrder.value;
  activeFilters(alphabeticOrder(data.pokemon, selectedOrder));
  filterPerRarity(alphabeticOrder(data.pokemon, selectedOrder));
}

export function showInOrderOfWeakness() {
  let selectedOrderByWeakness = document.querySelector("#calculation-selector");
  selectedOrderByWeakness = selectedOrderByWeakness.value;
  activeFilters(orderOfWeakness(data.pokemon, selectedOrderByWeakness));
  filterPerRarity(orderOfWeakness(data.pokemon, selectedOrderByWeakness));
}

export function percentagePokemon(resultOfFilters, pokemon) {
  let percentage = document.querySelector("#quantify-text");
  let resultCards= document.getElementById("result-cards");
  pokemon = pokemon.length;
  let resultPercentage = percentagePerFilter(resultOfFilters, pokemon);
  percentage.innerHTML = `Esse filtro representa ${resultPercentage}% do total de Pokémons.`;
  if (resultPercentage == 0.0) {
    resultCards.innerHTML = `
      <p id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  }
}

export function cleanForm() {
  const selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  const selectAtributte = document.querySelector("#filter-atributtes");
  const selectOrder = document.querySelector("#order-selector");
  const selectOrderByWeakness = document.querySelector("#calculation-selector");
  const percentage = document.querySelector("#quantify-text");
  selectTypeOrWeakness.classList.replace("new-color-select", "color-select");
  selectAtributte.classList.replace("new-color-select", "color-select");
  selectOrderByWeakness.classList.replace("new-color-select", "color-select");
  selectAtributte.disabled = true;
  percentage.innerHTML = `Esse filtro representa 100% do total de Pokémons.`;
  selectOrder.selectedIndex = 0;
  createCards(data.pokemon);
}

export function filterPerRarity() {
  let selectRarity = document.querySelector("#rarity-selector");
  let selectedValueRarity = selectRarity.value;
  let resultOfFilters = filterRarity(data.pokemon, selectedValueRarity);
  createCards(resultOfFilters);
  resultOfFilters = resultOfFilters.length;
  percentagePokemon(resultOfFilters, data.pokemon);
}

export function typeWriter(letter) {
  let textArray = letter.innerHTML.split("");
  letter.innerHTML = "";
  textArray.forEach((arr, i) => {
    setTimeout(() => (letter.innerText += arr), 75 * i);
  });
}