import {
  searchByName,
  alphabeticOrder,
  filtersResult,
  percentagePerFilter,
  cleanFilters,
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
    const cardsList = document.querySelector("#result-cards");
    cardsList.append(item);
  });
  const pokemonModalList = createModal(data.pokemon);
  pokemonModalList.forEach((item) => {
    const modalList = document.querySelector("#modal-pokemon");
    modalList.append(item);
  })
  filtersResult('number');
}

function showFilteredPokemon(pokemonArray) {
  const pokemonList = createCards(pokemonArray);
  pokemonList.forEach((item) => {
    const cardsList = document.querySelector("#result-cards");
    cardsList.append(item);
  });
  const pokemonModalList = createModal(pokemonArray);
  pokemonModalList.forEach((item) => {
    const modalList = document.querySelector("#modal-pokemon");
    modalList.append(item);
  })
  activeModal();
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
  const selectOrder = document.querySelector("#order-selector");
  const selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  const selectElements = document.querySelector("#filter-atributtes");
  const selectRarity = document.querySelector("#rarity-selector");
  const selectOrderByWeakness = document.querySelector("#calculation-selector");
  const cleanButton = document.querySelector("#clean-button");
  const containerCards = document.querySelector("#result-cards");

  selectElements.disabled = true;
  cleanButton.addEventListener("click", cleanForm);

  nameTyped.addEventListener("keyup", () => {
    searchNamePokemon(nameTyped);
  });
  nameTyped.addEventListener("change", () => {
    const nameTyped = document.querySelector("#name-pokemon");
    nameTyped.value = "";
  });

  selectOrder.addEventListener("change", () => {
    const selectedOrderValue = selectOrder.value;
    filterOption(selectedOrderValue);
  });
  
  selectRarity.addEventListener("change", function () {
    selectRarity.classList.replace("color-select", "new-color-select");
    const selectedRarityValue = selectRarity.value;
    filterOption(selectedRarityValue);
  });

  selectOrderByWeakness.addEventListener("change", function () {
    selectOrderByWeakness.classList.replace("color-select", "new-color-select");
    const selectOrderByWeaknessValue = selectOrderByWeakness.value;
    filterOption(selectOrderByWeaknessValue);
  });

  selectTypeOrWeakness.addEventListener("change", function () {
    const selectTypeOrWeaknessValue = selectTypeOrWeakness.value;
    filtersResult(selectTypeOrWeaknessValue);
    selectTypeOrWeakness.classList.replace("color-select", "new-color-select");
    selectElements.selectedIndex = 0;
    selectElements.disabled = false;
    containerCards.innerHTML = '<p id="not-pokemon">Select Elements filter options.</p>';
  });

  selectElements.addEventListener("change", function () {
    selectElements.classList.replace("color-select", "new-color-select");
    const selectElementsValue = selectElements.value;
    filterOption(selectElementsValue);
  });
}

function searchNamePokemon(nameTyped) {
  const name = nameTyped.value;
  let resultName = "";
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  const resultOfFilters = searchByName(data.pokemon, resultName);
  showFilteredPokemon(resultOfFilters);
  percentagePokemon(resultOfFilters.length);
}

function filterOption(selectedOption) {
  const resultOfFilters = filtersResult(selectedOption);
  showFilteredPokemon(resultOfFilters);
  percentagePokemon(resultOfFilters.length);
}

function percentagePokemon(resultOfFilters) {
  const resultCards= document.getElementById("result-cards");
  const percentage = document.querySelector("#quantify-text");
  const resultPercentage = percentagePerFilter(data.pokemon.length, resultOfFilters);
  percentage.innerHTML = `This filter represents ${resultPercentage}% of total Pokémon.`;
  if (resultPercentage == 0.0) {
    resultCards.innerHTML = `
      <p id="not-pokemon">Pokémon not found!<br>Choose another result!</p>
    `;
  }
}

function cleanForm() {
  const selectOrder = document.querySelector("#order-selector");
  const selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  const selectElements = document.querySelector("#filter-atributtes");
  const selectRarity = document.querySelector("#rarity-selector");
  const selectOrderByWeakness = document.querySelector("#calculation-selector");
  const percentage = document.querySelector("#quantify-text");

  selectOrder.selectedIndex = 0;
  selectElements.disabled = true;

  selectTypeOrWeakness.classList.replace("new-color-select", "color-select");
  selectElements.classList.replace("new-color-select", "color-select");
  selectRarity.classList.replace("new-color-select", "color-select");
  selectOrderByWeakness.classList.replace("new-color-select", "color-select");
  percentage.innerHTML = `This filter represents 100% of the total Pokémon.`;
  cleanFilters();
  showAllPokemon(alphabeticOrder(data.pokemon, "number"));
}