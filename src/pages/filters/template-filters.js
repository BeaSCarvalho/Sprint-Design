import header from '../../components/header.js';
import {
  searchByName,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
  filterBy,
  filterRarity,
} from './js/data.js';
import data from "../../data/pokemon/pokemon.js";

export default function pageFilters() {
  const container = document.createElement("div");
  container.setAttribute("id","container-pokemon");

  const templateFilters = `
    <form id="form-filters">
      <h1 class="filter-title">TO FILTER</h1>
      <input type="text" id="name-pokemon" placeholder=" Search by Pokemon name">

      <div id="group-pokemon">
        <img id="poke-1" class="pokemon-one" src="./img/pokemon/poke-01.png" />
        <img id="poke-2" class="pokemon-two" src="./img/pokemon/poke-02.png" />
        <img id="poke-3" class="pokemon-one" src="./img/pokemon/poke-03.png" />
        <img id="poke-4" class="pokemon-two" src="./img/pokemon/poke-04.png" />
        <img id="poke-5" class="pokemon-one" src="./img/pokemon/poke-05.png" />
        <img id="poke-6" class="pokemon-two" src="./img/pokemon/poke-07.png" />
        <img id="poke-7" class="pokemon-one" src="./img/pokemon/poke-06.png" />
      </div>

      <div id="group-select">
        <select class="order-calculation new-color-select" id="order-selector">
          <option disabled>Order by</option>
          <option selected value="number">Pokedex number</option>
          <option value="name-az">A-Z name</option>
          <option value="name-za">Z-A name</option>
        </select>

        <select class="order-calculation color-select" id="filter-type-weakness">
          <option selected disabled>Select by</option>
          <option value="type">Type</option>
          <option value="weaknesses">Weakness</option>
          <option value="resistant">Resistance to</option>
        </select>

        <select class="order-calculation color-select" id="filter-atributtes">
          <option selected disabled>Elements</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fight</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>

        <select class="order-calculation color-select" id="rarity-selector">
          <option selected disabled>Rarity</option>
          <option value="normal">Normal</option>
          <option value="legendary">Legendary</option>
          <option value="mythic">Mythic</option>
        </select>

        <select class="order-calculation color-select" id="calculation-selector">
          <option selected disabled>Ordered by Weakness</option>
          <option value="less-weakness">Lesser amount of weakness</option>
          <option value="more-weakness">Greater amount of weakness</option>
        </select>
      </div>

      <button type="reset" id="clean-button" class="btn-action">
        <img src="./img/icon-close.png" alt="To clean filters">
      </button>
    </form>

    <section id="results-header">
      <h1 class="filter-title">RESULTS</h1>
      <p id="quantify-text">This filter represents 100% of the total Pokemon.</p>
      <a href="#form-filters">
        <button type="button" id="back-button" class="btn-action">
          <img src="./img/icon-up-arrow.png" alt="Back to filters">
        </button>
      </a>
    </section>

    <section id="result-cards" class="list">
    </section>
    <div id="modal-pokemon" class="modal-container">
    </div>
  `;

  container.appendChild(header());
  container.innerHTML += templateFilters;

 
  let createCards = function (pokemonArray) {
    const containerList = container.querySelector("#result-cards");
    const pokemonModal = container.querySelector("#modal-pokemon");
    const button = container.querySelector("#back-button");
  
    let body = document.getElementsByTagName("body")[0];
    
    containerList.innerHTML = "";
    
    pokemonArray.forEach((pokemon) => {
      const item = document.createElement("section");
      item.className = "card pokemon";
      item.id = pokemon.num;
      containerList.appendChild(item).innerHTML = `
        <p
          ${pokemon.type
            .map((type) => 'class="poke-number ' + type + '"')
            .join("")}>
          ${pokemon.num}  
        </p>
        <figure class="card-box" id="pokemon-${pokemon.num}">
          <img class="poke-img" src="${pokemon.img}" alt=${pokemon.name}>
        </figure>
        <main class="card-info">
          <h4 class="poke-title">
            ${pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</p>
          </h4>
          <ul class="poke-items">
            ${pokemon.type
              .map(
                (type) =>
                  '<li class="li-item-card ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul> 
          <div class="container-icon">
            <img src="./img/icon-open.png" alt="More information" class="small-icon">
          </div>
        </main>
      `;

      const pokemonButton = item.querySelector(
        '[id="pokemon-' + pokemon.num + '"]'
      );

      pokemonButton.addEventListener("click", () => {
        let prevEvolution = "";
        let nextEvolution = "";

        if (pokemon.evolution["prev-evolution"]) {
          let evolutions = getPrevEvolution(pokemon.evolution["prev-evolution"]);

          evolutions.forEach((evol) => {
            prevEvolution += `
              <div class="evolution-each-container">
                <img class="evolution-img" 
                  src="https://www.serebii.net/pokemongo/pokemon/${evol.num}.png">
                <p class="evolution-p">${evol.name}</p><p class="evolution-p">N° ${evol.num}</p>
              </div>
            `;
          });
        }

        if (pokemon.evolution["next-evolution"]) {
          let evolutions = getNextEvolution(pokemon.evolution["next-evolution"]);

          evolutions.forEach((evol) => {
            nextEvolution += `
              <div class="evolution-each-container">
                <img class="evolution-img" 
                  src="https://www.serebii.net/pokemongo/pokemon/${evol.num}.png">
                <p class="evolution-p">${evol.name}</p>
                <p class="evolution-p">N° ${evol.num}</p>
              </div>
            `;
          });
        }

        let template = `
          <div id="modal-container" class="modal-container">
          <div class="modal-group">
            <button id="spanClose" class="close-modal">X</button> 
            <div class="group-header">
              <span class="header-number">
                <p class="modal-poke-number">${pokemon.num}</p>
              </span>
              <span class="header-name">
                <h4 class="modal-poke-name">${
                  pokemon.name[0].toUpperCase() + pokemon.name.substr(1)
                }
                </h4>
              </span>
            </div>
            <div class="group-modal">
              <div class="first">
                <figure class="group-img">
                  <img class="modal-poke-img" src="${pokemon.img}" 
                  alt=${pokemon.name}>
                </figure>
                <p class="poke-about">${pokemon.about}</p> 
                <p class="li-item poke-rarity"><span class="list-title">Rarity: </span>${
                  pokemon.rarity
                }</p> 
              </div>  
              <div class="container-group">
                <div class="second">
                  <section class="group-type">
                    <h2 class="poke-type modal-titles">Type</h2>
                    <ul class="poke-items list-type">
                    ${pokemon.type
                      .map(
                      (type) =>
                      '<li class="li-item-card ' + type + '">' + type + "</li>"
                      )
                     .join("")}
                    </ul>
                  </section>
                  <section class="group-weakness">
                    <h2 class="modal-titles">Weaknesses</h2>
                    <ul class="poke-items list-weaknesses">
                      ${pokemon.weaknesses
                      .map(
                      (type) =>
                      '<li class="li-item-card ' + type + '">' + type + "</li>"
                      )
                      .join("")}
                    </ul>
                  </section>
                  <section class="group-resistant">
                    <h2 class="modal-titles">Resistant</h2>
                    <ul class="poke-items list-resistant">
                    ${pokemon.resistant
                    .map(
                    (type) =>
                    '<li class="li-item-card ' + type + '">' + type + "</li>"
                    )
                    .join("")}
                    </ul>
                  </section>
                </div>  
                <section class="group-move-special">

                  <section class="group-moves">
                    <section class="group-stats">
                      <h1 class="modal-titles">Stats</h1>
                      <ul class="poke-items">
                        <span class="list-title">Max-HP</span>
                          <li class="li-item">${pokemon.stats["max-hp"]}</li>
                      </ul>
                      <ul class="poke-items">
                        <span class="list-title">Max-CP</span>
                          <li class="li-item">${pokemon.stats["max-cp"]}</li>
                      </ul>
                      <ul class="poke-items">
                        <span class="list-title">Base-Attack</span>
                          <li class="li-item">${pokemon.stats["base-attack"]}</li>
                      </ul>
                      <ul class="poke-items">
                        <span class="list-title">Base-Defense</span>
                          <li class="li-item">${pokemon.stats["base-defense"]}</li>
                      </ul>
                      <ul class="poke-items">
                        <span class="list-title">Base-Stamina</span>
                          <li class="li-item">${pokemon.stats["base-stamina"]}</li>
                      </ul>
                    </section>  

                    <article class="titleAttack" >
                      <h2 class="modal-titles">Quick Moves</h2>
                      <p>${pokemon["quick-move"]
                        .map((move) => `
                          <section class="group-moves-attack">
                            <ul class="poke-items">
                              <span class="list-title">${move.name}</span>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Type</span>
                              <li class="li-item">${move.type}</li>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Damage</span>
                              <li class="li-item">${move["base-damage"]}</li>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Energy</span>
                              <li class="li-item">${move.energy}</li>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Move duration - seg</span>
                              <li class="li-item">${move["move-duration-seg"]}</li>
                            </ul>
                          </section>
                        `
                        )
                        .join("")}
                      </p>
                    </article>
                  
                    <article class="titleAttack" >
                      <h2 class="modal-titles">Special Attack</h2>
                      <p>${pokemon["special-attack"]
                        .map((attack) => `
                          <section class="group-moves-attack">
                            <ul class="poke-items">
                              <span class="list-title">${attack.name}</span>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Type</span>
                              <li class="li-item">${attack.type}</li>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Damage</span>
                              <li class="li-item">${attack["base-damage"]}</li>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Energy</span>
                              <li class="li-item">${attack.energy}</li>
                            </ul>
                            <ul class="poke-items">
                              <span class="list-title">Move duration - seg</span>
                              <li class="li-item">${attack["move-duration-seg"]}</li>
                            </ul>
                          </section>
                        `
                        )
                        .join("")}
                      </p>
                   </article>

                    <section class="group-evolutions">
                      <h2 class="modal-titles">Evolution</h2>
                      <div class="container-movements">
                        <p>${prevEvolution ? prevEvolution : ""}</p>
                        <p>${nextEvolution ? nextEvolution : ""}</p>
                      </div>
                    </section>
                  </section>
                </section>
              </div>
            </div>  
        `;

      pokemonModal.innerHTML = template;
      let span = pokemonModal.querySelector('[id="spanClose"]');

      pokemonModal.style.display = "block";
      body.style.position = "static";
      body.style.height = "50vh";
      body.style.overflow = "hidden";
      button.style.display = "none";

      span.onclick = function () {
        pokemonModal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
        button.style.display = "block";
      };
    });
  });
};

  function getNextEvolution(pokemon) {
    let evolutions = [];
    pokemon.forEach((evol) => {
      let nextEvolution = evol["next-evolution"];
      if (nextEvolution) {
        evolutions.push(...getNextEvolution(nextEvolution));
      }
      evolutions.push(evol);
    });
    return evolutions;
  }

  function getPrevEvolution(pokemon) {
    let prevEvolution = pokemon[0]["prev-evolution"];
    let evolutions = [];
    if (prevEvolution) {
      evolutions.push(...getPrevEvolution(prevEvolution));
    }
    evolutions.push(pokemon[0]);
    return evolutions;
  }

  const nameTyped = container.querySelector("#name-pokemon");
  const selectTypeOrWeakness = container.querySelector("#filter-type-weakness");
  const selectAtributte = container.querySelector("#filter-atributtes");
  const selectOrder = container.querySelector("#order-selector");
  const selectOrderByWeakness = container.querySelector("#calculation-selector");
  const cleanButton = container.querySelector("#clean-button");
  const percentage = container.querySelector("#quantify-text");
  const resultCards = container.querySelector("#result-cards");
  const selectRarity = container.querySelector("#rarity-selector");

  startPageFilters();
  
  function startPageFilters() {
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
  

  return container;
}