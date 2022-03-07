import data from "./data/pokemon/pokemon.js";

const allDatas = data.pokemon;
let formFilters = document.getElementsByClassName("full-checkbox");
let nameInput = document.getElementById("name-pokemon");
let formCheckType = document.forms.formFilters.elements.type;
let formCheckWeakness = document.forms.formFilters.elements.weakness;
let confirmationButton = document.getElementById("confirm-button");
let clearButton = document.getElementById("clear-button");
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

//startSiteOnpokemon();
startPageFilters();

function clearFormFilters() {
  let namePokemon = getElementsByClassName("input-name");
  let checkbox = getElementsByClassName("checkbox");
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = false;
  }
  namePokemon.value = "";
  confirmationButton.disabled = false;
  startPageFilters();
}

function startPageFilters() {
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }
  for (let i = 0; i <= formFilters.length; i++) {
    formFilters[i].addEventListener("focus", onchangeForm);
  }
}

//Colocar essa função no start-page
function onchangeForm(e) {
  if (nameChange.onchange != "") {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType.disabled = true;
      formCheckWeakness.disabled = true;
    }
    confirmationButton.addEventListener("click", formName);
  } else {
    nameInput.disabled = true;
    confirmationButton.addEventListener("click", formCheckbox);
  }
}

function formName(e) {
  e.preventDefault();
  confirmationButton.disabled = true;
  let namePokemon = nameInput.value;
  resultName = namePokemon.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  clearButton.addEventListener("click", clearFormFilters);
}

function formCheckbox(e) {
  e.preventDefault();
  confirmationButton.disabled = true;
  for (let i = 0; i < formCheckType.length; i++) {
    if (formCheckType[i].checked) {
      resultsType += formCheckType[i].value + ",";
    } else if (formCheckWeakness[i].checked) {
      resultsWeakness += formCheckWeakness[i].value + ",";
    }
  }
  clearButton.addEventListener("click", clearFormFilters);
}

function showResults() {

  for (let i = 0; i < data.pokemon.length; i++) {
    let allDatas = data.pokemon[i];
    const alteredName = allDatas.name[0].toUpperCase() + allDatas.name.substring(1);

    // card dos pokemons string
    const pokemonCard = `
    <section class="show-the-cards">
      <div class="img-box">
        <img src= "${allDatas.img}" alt=${allDatas.name}>
      </div>
         
      <div class="text-box">
        <p class="poke-name">Nome ${allDatas.name} </p>
        <p class="poke-number">N° ${allDatas.num} </p>
        <p class="poke-type">Tipo ${allDatas.type}</p>
        <p class="poke-weaknesses">Fraqueza ${allDatas.weaknesses}</p>
      </div>
    </section>
    `;

    /*
<div class="card">
  <img class="pokedex-open" src="img/pokedex-open.png">
  <p class="poke-number">N° 001</p>
  <div class="card-box">
    <figure class="box-poke-img">
      <img class="poke-img" src="img/001.png" alt="Pokémon 001 Bulbasaur">
    </figure>
    <main class="box-poke-text">
      <h4 class="poke-title">Exemplo de nome grande</h4>
      <ul class="poke-items">
        <span class="poke-item-title">Tipo: </span>
        <li>Planta</li>
        <li>Venenoso</li>
      </ul>
      <ul class="poke-items">
        <span class="poke-item-title">Fraqueza:</span>
        <li>Fogo</li>
        <li>Gelo</li>
        <li>Voador</li>
        <li>Psíquico</li>
        <li>Gelo</li>
        <li>Voador</li>
        <li>Psíquico</li>
        <li>Gelo</li>
        <li>Voador</li>
        <li>Psíquico</li>
      </ul>
    </main>
  </div>
</div>

    */

    const sectionResults = document.createElement("view-cards");
    document.getElementById("result").appendChild(sectionResults);
    sectionResults.innerHTML = pokemonCard;
}

//função para começar aparecer o botão return
