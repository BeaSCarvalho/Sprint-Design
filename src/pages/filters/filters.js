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
    const cardsList = document.querySelector("#result-cards");
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
}

function startAllFilters() {
  const nameTyped = document.querySelector("#name-pokemon");
  const selectOrder = document.querySelector("#order-selector");
  const selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  const selectElements = document.querySelector("#filter-atributtes");
  const selectRarity = document.querySelector("#rarity-selector");
  const selectOrderByWeakness = document.querySelector("#calculation-selector");
  const cleanButton = document.querySelector("#clean-button");

  selectElements.disabled = true;

  nameTyped.addEventListener("keyup", () => {
    searchNamePokemon(nameTyped);
  });
  nameTyped.addEventListener("change", cleanForm);

  selectOrder.addEventListener("change", () => {
    orderToShow(selectOrder);
  });

  selectTypeOrWeakness.addEventListener("change", function () {
    const containerCards = document.querySelector("#result-cards");
    selectTypeOrWeakness.classList.replace("color-select", "new-color-select");
    selectElements.disabled = false;
    containerCards.innerHTML = '<p id="not-pokemon">Select Elements filter options.</p>';
  });

  selectElements.addEventListener("change", function () {
    selectElements.classList.replace("color-select", "new-color-select");
    activeElementsFilters(selectTypeOrWeakness, selectElements);
  });
  
  selectRarity.addEventListener("change", function () {
    selectRarity.classList.replace("color-select", "new-color-select");
    filterPerRarity(selectRarity);
  });

  selectOrderByWeakness.addEventListener("change", function () {
    selectOrderByWeakness.classList.replace("color-select", "new-color-select");
    showInOrderOfWeakness(selectOrderByWeakness);
  });

  cleanButton.addEventListener("click", cleanForm);
}

function searchNamePokemon(nameTyped) {
  let name = nameTyped.value;
  let resultName = "";
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  const resultOfFilters = searchByName(data.pokemon, resultName);
  showFilteredPokemon(resultOfFilters);
  const results = resultName.length;
  percentagePokemon(results, data.pokemon);
}

function orderToShow(selectedOrder) {
  const selectedOrderValue = selectedOrder.value;
  const resultOfFilters = alphabeticOrder(data.pokemon, selectedOrderValue);
  showFilteredPokemon(resultOfFilters);
  const results = resultOfFilters.length;
  percentagePokemon(results, data.pokemon);
}

function activeElementsFilters(selectTypeOrWeakness, selectElements) {
  const selectTypeOrWeaknessValue = selectTypeOrWeakness.value;
  const selectElementsValue = selectElements.value;
  const resultOfFilters = filterBy(
    data.pokemon,
    selectTypeOrWeaknessValue,
    selectElementsValue
  );
  showFilteredPokemon(resultOfFilters);
  const results = resultOfFilters.length;
  percentagePokemon(results, data.pokemon);
}

function filterPerRarity(selectRarity) {
  const selectedRarityValue = selectRarity.value;
  let resultOfFilters = filterRarity(data.pokemon, selectedRarityValue);
  showFilteredPokemon(resultOfFilters);
  resultOfFilters = resultOfFilters.length;
  percentagePokemon(resultOfFilters, data.pokemon);
}

function showInOrderOfWeakness(selectedOrderByWeakness) {
  const selectOrderByWeaknessValue = selectedOrderByWeakness.value;
  let resultOfFilters = orderOfWeakness(data.pokemon, selectOrderByWeaknessValue);
  showFilteredPokemon(resultOfFilters);
  resultOfFilters = resultOfFilters.length;
  percentagePokemon(resultOfFilters, data.pokemon);
}

function percentagePokemon(resultOfFilters, pokemon) {
  const percentage = document.querySelector("#quantify-text");
  const resultCards= document.getElementById("result-cards");
  const resultPercentage = percentagePerFilter(resultOfFilters, pokemon.length);
  percentage.innerHTML = `This filter represents ${resultPercentage}% of total Pokémon.`;
  if (resultPercentage == 0.0) {
    resultCards.innerHTML = `
      <p id="not-pokemon">Pokémon not found!<br>Choose another result!</p>
    `;
  }
}

function cleanForm() {
  const nameTyped = document.querySelector("#name-pokemon");
  const selectOrder = document.querySelector("#order-selector");
  const selectTypeOrWeakness = document.querySelector("#filter-type-weakness");
  const selectElements = document.querySelector("#filter-atributtes");
  const selectRarity = document.querySelector("#rarity-selector");
  const selectOrderByWeakness = document.querySelector("#calculation-selector");
  const percentage = document.querySelector("#quantify-text");

  nameTyped.value = "";
  selectOrder.selectedIndex = 0;
  selectElements.disabled = true;

  selectTypeOrWeakness.classList.replace("new-color-select", "color-select");
  selectElements.classList.replace("new-color-select", "color-select");
  selectRarity.classList.replace("new-color-select", "color-select");
  selectOrderByWeakness.classList.replace("new-color-select", "color-select");
  percentage.innerHTML = `This filter represents 100% of the total Pokémon.`;
  showAllPokemon(alphabeticOrder(data.pokemon, "number"));
}