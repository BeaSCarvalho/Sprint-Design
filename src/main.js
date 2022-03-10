import {
  filterByType, 
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter
} 
from './data.js';
import data from "./data/pokemon/pokemon.js";

startPageHome();

function startPageHome() {
  heightWindow();
  screen.orientation.onchange = function (e) {
    let containerMain = document.querySelector(".main-home");
    containerMain.style.height = "";
    heightWindow();
  };
}

function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  console.log(heightWindow);
  let heightLogo = Number(document.querySelector(".header-home").scrollHeight);
  console.log(heightLogo);
  let heightText = Number(document.querySelector(".intro-text").scrollHeight);
  console.log(heightText);
  let heightTab = Number(document.querySelector(".details-info").scrollHeight);
  console.log(heightTab);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  console.log(sumAll);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}

let pokemons = data.pokemon;

function createCards(data) {
  document.getElementById("result-cards").innerHTML = data.map((item) => {
    return  `
    <div class="card">
      <img class="pokedex-open" src="img/pokedex-open.png">
      <p class="poke-number">${item.num}</p>

      <div class="card-box">
        <figure class="box-poke-img">
          <img class="poke-img" src="${item.img}" alt=${item.name}>
        </figure>

        <main class="box-poke-text">
          <h4 class="poke-title"> ${item.name[0].toUpperCase() + item.name.substr(1)}</h4>
          <ul class="poke-items">
            <span class="poke-item-title">Tipo: ${item.type}</span>
          </ul>

          <ul class="poke-items">
            <span class="poke-item-title">Fraqueza:
              <li>${item.weaknesses}</li>
            </span>  
          </ul>
        </main>
      </div>
    </div>
    `})
  .join("");
}

//html
const selectOrder = document.getElementById("order-selector");
const confirmButton = document.getElementById("confirm-button");
const selectOrderByWeakness = document.getElementById("calculation-selector");
const percentage = document.getElementById("quantify-text");
const checkboxTypeSelected = document.querySelectorAll("input[name=type]");
const checkboxWeaknessSelected = document.querySelectorAll("input[name=weakness]");

function showResults () {
  createCards(pokemons)
}

confirmButton.addEventListener("click", showResults);

//função que pega o valor do checkbox e chama a função de filtros = type
function activeFilterType(e) {
  const selectedValue = e.target.value;
  pokemons = filterByType(pokemons, selectedValue);
  createCards(pokemons)
}

//loop para ouvir todos os checkboxes name=type
for (let i = 0; i < checkboxTypeSelected.length; i++) {
  checkboxTypeSelected[i].addEventListener("click", activeFilterType)
  checkboxTypeSelected[i].addEventListener("click", showPercentagePerFilter)
}

//função que pega o valor do checkbox e chama a função de filtros = weakness
function activeFilterWeakness(e) {
  const selectedValue = e.target.value;
  pokemons = filterByWeakness(pokemons, selectedValue);
  createCards(pokemons);
}

//loop para ouvir todos os checkboxes name=weakness
for (let i = 0; i < checkboxWeaknessSelected.length; i++) {
  checkboxWeaknessSelected[i].addEventListener("click", activeFilterWeakness)
  checkboxWeaknessSelected[i].addEventListener("click", showPercentagePerFilter)
}

//ordenar ordem alfabetica
function orderToShow() {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
}

selectOrder.addEventListener("change", orderToShow);

//ordenar por quantidade de fraquezas
function showInOrderOfWeakness () {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
}

selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);

function showPercentagePerFilter () {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`
}

