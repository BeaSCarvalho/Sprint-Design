import {
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  //percentagePerFilter,
} from "./data.js";
import { startPageHome, startPageFilters } from "./js/start-page.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
const formCheckType = document.querySelectorAll("input[name=type]");
const formCheckWeakness = document.querySelectorAll("input[name=weakness]");
let resultCards = document.getElementById("result-cards");
const selectOrder = document.getElementById("order-selector");
const selectOrderByWeakness = document.getElementById("calculation-selector");
const percentage = document.getElementById("quantify-text");
let resultsType = "";
let resultsWeakness = "";
let resultName = "";
let itemsType = "";
let itemsWeakness = "";

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

export let searchNamePokemon = (e) => {
  e.preventDefault();
  let name = document.getElementById("name-pokemon").value;
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  showResults();
};

export let formCheckbox = (e) => {
  e.preventDefault();
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
      //showPercentagePerFilter();
    }
  }
  if (resultsWeakness != "") {
    resultsWeakness = resultsWeakness.split(" ");
    resultsWeakness.pop();
    for (let i = 0; i < resultsWeakness.length; i++) {
      activeFilterWeakness(resultsWeakness[i]);
      //showPercentagePerFilter();
    }
  }
  resultName = "";
  resultsType = "";
  resultsWeakness = "";
  addButton();
  filtersSelect();
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
    selectColor();
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
    selectColor();
  }
}

function filtersSelect() {
  selectOrder.addEventListener("change", orderToShow);
  selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);
}

export let orderToShow = () => {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
  createLiType();
  createLiWeakness();
  selectColor();
};

export let showInOrderOfWeakness = () => {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
  createLiType();
  createLiWeakness();
  selectColor();
};

/*
function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
*/

function addButton() {
  document.getElementById("button-return").innerHTML = `
  <a href="filters#header-filters">
    <button type="button" id="back-button" class="back-button">
      &#8634;
    </button>
  </a>;
`;
}

function createCards(data) {
  resultCards.innerHTML = data
    .map((item) => {
      itemsType = item.type;
      itemsWeakness = item.weaknesses;
      return `
      <div class="card">
        <img class="pokedex-open" src="img/pokedex-open.png">
        <p class="poke-number">${item.num}</p>
        <div class="card-box">
          <figure class="box-poke-img">
            <img class="poke-img" src="${item.img}" alt=${item.name}>
          </figure>
          <main class="box-poke-text">
            <h4 class="poke-title"> 
              ${item.name[0].toUpperCase() + item.name.substr(1)}
            </h4>
            <ul class="poke-items">
              <span class="poke-item-title list-type">Tipo:</span>
            </ul>
            <ul class="poke-items">
              <span class="poke-item-title list-weakness">Fraqueza:</span> 
            </ul>
          </main>
        </div>
      </div>
      `;
    })
    .join("");
}

function createLiType() {
  let type = document.querySelectorAll(".list-type");
  for (let j = 0; j < type.length; j++) {
    for (let i = 0; i < itemsType.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${itemsType[i]}`;
      li.classList.add("li-item");
      type[j].after(li);
    }
  }
}

function createLiWeakness() {
  let types = document.querySelectorAll(".list-weakness");
  for (let j = 0; j < types.length; j++) {
    for (let i = 0; i < itemsWeakness.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${itemsWeakness[i]}`;
      li.classList.add("li-item");
      types[j].after(li);
    }
  }
}

function selectColor() {
  let list = document.querySelectorAll(".poke-items");
  for (let i = 0; i <= list.length; i++) {
    let listLi = document.querySelectorAll(".li-item");
    for (let j = 0; j <= listLi.length; j++) {
      let item = listLi[i];
      item = item.innerText;
      switch (item) {
        case "bug":
          listLi[i].classList.add("bug");
          break;
        case "dark":
          listLi[i].classList.add("dark");
          break;
        case "dragon":
          listLi[i].classList.add("dragon");
          break;
        case "electric":
          listLi[i].classList.add("electric");
          break;
        case "fairy":
          listLi[i].classList.add("fairy");
          break;
        case "fighting":
          listLi[i].classList.add("fighting");
          break;
        case "fire":
          listLi[i].classList.add("fire");
          break;
        case "fighting":
          listLi[i].classList.add("flying");
          break;
        case "ghost":
          listLi[i].classList.add("ghost");
          break;
        case "grass":
          listLi[i].classList.add("grass");
          break;
        case "ground":
          listLi[i].classList.add("ground");
          break;
        case "ice":
          listLi[i].classList.add("ice");
          break;
        case "normal":
          listLi[i].classList.add("normal");
          break;
        case "poison":
          listLi[i].classList.add("poison");
          break;
        case "psychic":
          listLi[i].classList.add("phychic");
          break;
        case "rock":
          listLi[i].classList.add("rock");
          break;
        case "steel":
          listLi[i].classList.add("steel");
          break;
        case "water":
          listLi[i].classList.add("water");
          break;
      }
    }
  }
}
