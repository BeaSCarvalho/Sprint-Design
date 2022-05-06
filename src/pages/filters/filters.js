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

export function initPageFilters() {
  const nameTyped = document.querySelector("#name-pokemon");
  const selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  const selectAtributte = document.querySelector("#filter-atributtes");
  const selectOrder = document.querySelector("#order-selector");
  const selectOrderByWeakness = document.querySelector("#calculation-selector");
  const cleanButton = document.querySelector("#clean-button");
  const percentage = document.querySelector("#quantify-text");
  const selectRarity = document.querySelector("#rarity-selector");

  createCards(data.pokemon);
  selectAtributte.disabled = true;
  nameTyped.addEventListener("keyup", searchNamePokemon);
  nameTyped.addEventListener("change", function () {
    nameTyped.value = "";
  });
  selectOrder.addEventListener("change", orderToShow);
  selectTypeOrWeakness.addEventListener("change", function () {
    selectTypeOrWeakness.classList.replace("color-select", "new-color-select");
    selectAtributte.disabled = false;
    activeFilters();
  });
  selectAtributte.addEventListener("change", function () {
    selectAtributte.classList.replace("color-select", "new-color-select");
    activeFilters();
  });
  selectOrderByWeakness.addEventListener("change", function () {
    selectOrderByWeakness.classList.replace("color-select", "new-color-select");
    showInOrderOfWeakness();
  });
  selectRarity.addEventListener("change", function () {
    selectRarity.classList.replace("color-select", "new-color-select");
    filterPerRarity();
  });
  typeWriter(percentage);
  cleanButton.addEventListener("click", cleanForm);
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
  filterPerRarity(alphabeticOrder(data.pokemon, selectedOrder));
  
}

function showInOrderOfWeakness() {
  const selectedOrderByWeakness = selectOrderByWeakness.value;
  activeFilters(orderOfWeakness(data.pokemon, selectedOrderByWeakness));
  filterPerRarity(orderOfWeakness(data.pokemon, selectedOrderByWeakness));
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
  let textArray = letter.innerHTML.split("");
  letter.innerHTML = "";
  textArray.forEach((arr, i) => {
    setTimeout(() => (letter.innerText += arr), 75 * i);
  });
}

function cleanForm() {
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

function filterPerRarity() {
  let selectedValueRarity = selectRarity.value;
  let resultOfFilters = filterRarity(data.pokemon, selectedValueRarity);
  createCards(resultOfFilters);
  resultOfFilters = resultOfFilters.length;
  percentagePokemon(resultOfFilters, data.pokemon);
}
