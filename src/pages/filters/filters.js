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
import { createModal } from './modal.js';

export function initPageFilters() {
  showAllPokemon();
  activeModal();
  startAllFilters();
}

function showAllPokemon() {
  const pokemonList = createCards(data.pokemon);
  pokemonList.forEach((item) => {
    const cardsList = document.querySelector("#results-cards");
    cardsList.append(item);
  });
  const pokemonModalList = createModal(data.pokemon);
  pokemonModalList.forEach((item) => {
    const modalList = document.querySelector("#modal-pokemon");
    modalList.append(item);
  })
}

function activeModal(){
  const clickOnTheCard = document.querySelectorAll(".card");
  clickOnTheCard.forEach((card) => {
    card.addEventListener("click", () => {
      const cardNumber = card.getAttribute('data-pokemon');
      const modal = document.querySelector(`.pokemon-modal-${cardNumber}`);
      const modalContainer = document.querySelector("#modal-pokemon");
      const button = document.querySelector("#back-button");
      modalContainer.classList.add('active');
      button.classList.add('active');
      modal.classList.add('active');
    });
  });
  const modalCloseButton = document.querySelectorAll(".close-modal");
  modalCloseButton.forEach((modal) => {
    modal.addEventListener("click", () => {
      const modalNumber = modal.getAttribute('data-pokemon-modal');
      const modalPokemon = document.querySelector(`.pokemon-modal-${modalNumber}`);
      const modalContainer = document.querySelector("#modal-pokemon");
      const button = document.querySelector("#back-button");
      modalContainer.classList.remove('active');
      button.classList.remove('active');
      modalPokemon.classList.remove('active');
    });
  });
}

function startAllFilters() {
  const nameTyped = document.querySelector("#name-pokemon");
  const selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  const selectAtributte = document.querySelector("#filter-atributtes");
  const selectOrder = document.querySelector("#order-selector");
  const selectOrderByWeakness = document.querySelector("#calculation-selector");
  const selectRarity = document.querySelector("#rarity-selector");
  const cleanButton = document.querySelector("#clean-button");
  const percentage = document.querySelector("#quantify-text");

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

/* funciona */
function searchNamePokemon() {
  const nameTyped = document.querySelector("#name-pokemon");
  let name = nameTyped.value;
  let resultName = "";
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  resultName = searchByName(data.pokemon, resultName);
  createCards(resultName);
  resultName = resultName.length;
  percentagePokemon(resultName, data.pokemon);
}

function activeFilters() {
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

function orderToShow() {
  let selectedOrder = document.querySelector("#order-selector");
  selectedOrder = selectedOrder.value;
  activeFilters(alphabeticOrder(data.pokemon, selectedOrder));
  filterPerRarity(alphabeticOrder(data.pokemon, selectedOrder));
}

function showInOrderOfWeakness() {
  let selectedOrderByWeakness = document.querySelector("#calculation-selector");
  selectedOrderByWeakness = selectedOrderByWeakness.value;
  activeFilters(orderOfWeakness(data.pokemon, selectedOrderByWeakness));
  filterPerRarity(orderOfWeakness(data.pokemon, selectedOrderByWeakness));
}

function percentagePokemon(resultOfFilters, pokemon) {
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
  let selectRarity = document.querySelector("#rarity-selector");
  let selectedValueRarity = selectRarity.value;
  let resultOfFilters = filterRarity(data.pokemon, selectedValueRarity);
  createCards(resultOfFilters);
  resultOfFilters = resultOfFilters.length;
  percentagePokemon(resultOfFilters, data.pokemon);
}

function typeWriter(letter) {
  let textArray = letter.innerHTML.split("");
  letter.innerHTML = "";
  textArray.forEach((arr, i) => {
    setTimeout(() => (letter.innerText += arr), 75 * i);
  });
}