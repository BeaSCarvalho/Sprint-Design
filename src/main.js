import {
  filterName,
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
} from "./data.js";
import data from "./data/pokemon/pokemon.js";

/*
Arrumar showResults
Arrumar os filtros
Fazer o filtro de nome
*/

let pokemons = data.pokemon;
let changeCheckboxGeneral = document.getElementById("container-checkbox");
let namePokemon = document.getElementById("name-pokemon");
let confirmationButton = document.getElementById("confirm-button");
let clearButton = document.getElementById("clear-button");
let formCheckType = document.forms.formFilters.elements.type;
let formCheckWeakness = document.forms.formFilters.elements.weakness;
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

/*
const selectOrder = document
  .getElementById("order-selector")
  .addEventListener("change", orderToShow);
const selectOrderByWeakness = document
  .getElementById("calculation-selector")
  .addEventListener("change", showInOrderOfWeakness);
const percentage = document.getElementById("quantify-text");
*/

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

function startPageHome() {
  let rotationPage = false;
  do {
    heightWindowHome();
    rotationPage = screen.orientation.onchange = function (e) {
      location.reload();
    };
  } while (rotationPage == false);
  let clickPokedex = document.getElementsByClassName("pokedex-close").onclick;
  if (clickPokedex == true) {
    window.location.href = "filters.html";
    startPageFilters();
  }
}

function heightWindowHome() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").offsetHeight);
  let heightText = Number(document.querySelector(".intro-text").offsetHeight);
  let heightTab = Number(document.querySelector(".details-info").offsetHeight);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}

function startPageFilters() {
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }
  namePokemon.addEventListener("change", changeFormName);
  changeCheckboxGeneral.addEventListener("change", changeFormCheckbox);
  clearButton.addEventListener("click", clearFormFilters);
}

function changeFormName(e) {
  if (e.target.value != "") {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = true;
      formCheckWeakness[i].disabled = true;
    }
    confirmationButton.addEventListener("click", searchNamePokemon);
    namePokemon.addEventListener("change", changeFormName);
  } else {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = false;
      formCheckWeakness[i].disabled = false;
    }
  }
}

//botão
function searchNamePokemon(e) {
  e.preventDefault();
  let namePokemon = document.getElementById("name-pokemon").value;
  resultName = namePokemon.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  showResults();
}

//botão
function formCheckbox() {
  for (let i = 0; i < checkboxTypeSelected.length; i++) {
    if (checkboxTypeSelected[i].checked) {
      resultsType += checkboxTypeSelected[i].value + ",";
    } else if (checkboxWeaknessSelected[i].checked) {
      resultsWeakness += checkboxWeaknessSelected[i].value + ",";
    }
  }
  showResults();
}

function changeFormCheckbox(e) {
  let countChecked = 0;
  let countNoChecked = 0;
  // Houve um evento com checked true
  if (e.target.checked == true) {
    // Desativa o input name
    namePokemon.disabled = true;
    // Se o usuário quiser enviar
    confirmationButton.addEventListener("click", formCheckbox);
    // Se o ususário quiser modificar mais alguma coisa
    changeCheckboxGeneral.addEventListener("change", function () {
      // Adiciona mais um evento
      countChecked += 1;
    });
  }
  if (e.target.checked == false) {
    //Conta quantos checks foram desativados
    for (let i = 0; i < checkboxTypeSelected.length; i++) {
      if (
        checkboxTypeSelected[i].checked ||
        checkboxWeaknessSelected[i].checked
      ) {
        countNoChecked += 1;
      }
    }
    countChecked -= countNoChecked;
    // Ativou o input name, pois todos os checks foram desativados
    if (countChecked == 0) {
      namePokemon.disabled = false;
    }
    // Esperando o evento change ocorrer
    namePokemon.addEventListener("change", changeFormName);
    changeCheckboxGeneral.addEventListener("change", changeFormCheckbox);
  }
}

function clearFormFilters(e) {
  e.preventDefault();
  resultsType = "";
  resultsWeakness = "";
  resultName = "";
  namePokemon.value = "";
  if (namePokemon.disabled == true) {
    namePokemon.disabled = false;
  }
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].disabled = false;
    formCheckWeakness[i].disabled = false;
  }
}

function showResults() {
  if (resultName != "") {
    resultsType = resultsType.split(",");
    resultsType.pop();
    resultsWeakness = resultsWeakness.split(",");
    resultsWeakness.pop();
  }
  console.log(resultName);
  console.log(resultsType);
  console.log(resultsWeakness);
}

/*

function createCards(data) {

  document.getElementById("show-the-cards").innerHTML = `
  <a href="filters.html">
    <button type="button" id="back-button" class="back-button">
      &#8634;
    </button>
  </a>;
  `;


  document.getElementById("result-cards").innerHTML = data
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
            <h4 class="poke-title"> ${
              item.name[0].toUpperCase() + item.name.substr(1)
            }</h4>
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
      `;
    })
    .join("");
}

function activeFilterType(e) {
  const selectedValue = e.target.value;
  pokemons = filterByType(pokemons, selectedValue);
  createCards(pokemons);
}

function activeFilterWeakness(e) {
  const selectedValue = e.target.value;
  pokemons = filterByWeakness(pokemons, selectedValue);
  createCards(pokemons);
}

function orderToShow() {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
}

function showInOrderOfWeakness() {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
}

function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
*/
