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
}

function activeFilterType(selectedValue) {
  pokemons = filterByType(pokemons, selectedValue);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <Tente id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  } else {
    createCards(pokemons);
  }
}

function activeFilterWeakness(selectedValue) {
  pokemons = filterByWeakness(pokemons, selectedValue);
  if (pokemons == "") {
    resultCards.innerHTML = `
    <Tente id="not-pokemon">Pokémons não encontrados!<br>Tente outro resultado!</p>
    `;
  } else {
    createCards(pokemons);
  }
}

function orderToShow() {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
}

function showInOrderOfWeakness() {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
}

/*
function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
*/


function createCards(data) {
  resultCards.innerHTML = data
    .map((item) => {
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
              <span class="poke-item-title">Tipo:</span>
              <div class="items">
                ${item.type}
              </div>
            </ul>
            <ul class="poke-items">
              <span class="poke-item-title">Fraqueza:</span> 
              <div class="items">
                ${item.weaknesses}
              </div>
            </ul>
          </main>
        </div>
      </div>
      `;
    })
    .join("");
}

function addButton() {
  document.getElementById("button-return").innerHTML = `
  <a href="filters#header-filters">
    <button type="button" id="back-button" class="back-button">
      &#8634;
    </button>
  </a>;
`;
}

function createColors() {
  let items = document.querySelectorAll(".items");
  itemsType = Array.from(itemsType);

  for (let i = 0; i <= items.length; i++) {
    let li = document.createElement("li");
    let value = document.createTextNode(items[i]);

    for (let j = 0; j <= itemsType.length; j++) {
      li.appendChild(value);
      items.appendChild(li);

      switch (itemsType[i]) {
        case "bug":
          list.style.backgroundColor = rgb(158, 191, 63);
          break;
        case "dark":
          list.style.backgroundColor = rgb(93, 96, 109);
          break;
        case "dragon":
          list.style.backgroundColor = rgb(21, 116, 196);
          break;
        case "electric":
          list.style.backgroundColor = rgb(238, 212, 79);
          break;
        case "fairy":
          list.style.backgroundColor = rgb(237, 153, 229);
          break;
        case "fight":
          list.style.backgroundColor = rgb(215, 68, 86);
          break;
        case "fire":
          list.style.backgroundColor = rgb(224, 164, 86);
          break;
        case "flying":
          list.style.backgroundColor = rgb(156, 180, 230);
          break;
        case "ghost":
          list.style.backgroundColor = rgb(107, 114, 196);
          break;
        case "grass":
          list.style.backgroundColor = rgb(98, 190, 101);
          break;
        case "ground":
          list.style.backgroundColor = rgb(214, 133, 91);
          break;
        case "ice":
          list.style.backgroundColor = rgb(129, 212, 201);
          break;
        case "normal":
          list.style.backgroundColor = rgb(154, 158, 163);
          break;
        case "poison":
          list.style.backgroundColor = rgb(180, 103, 202);
          break;
        case "psychic":
          list.style.backgroundColor = rgb(247, 124, 124);
          break;
        case "rock":
          list.style.backgroundColor = rgb(205, 192, 144);
          break;
        case "stell":
          list.style.backgroundColor = rgb(89, 150, 163);
          break;
        case "water":
          list.style.backgroundColor = rgb(88, 159, 222);
          break;
      }
    }
  }
}