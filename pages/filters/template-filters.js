export function pageFilters() {
  const container = document.createElement("div");
  container.innerHTML = `
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
        <img src="./img/icons/icon-close.png" alt="To clean filters">
      </button>
    </form>

    <section id="results-header">
      <h1 class="filter-title">RESULTS</h1>
      <p id="quantify-text">This filter represents 100% of the total Pokemon.</p>
      <a href="#form-filters">
        <button type="button" id="back-button" class="btn-action">
          <img src="./img/icons/icon-up-arrow.png" alt="Back to filters">
        </button>
      </a>
    </section>

    <section id="result-cards" class="list">
    </section>
    <div id="modal-pokemon" class="modal-container">
    </div>
  `;


  function initPageFilters() {
    const nameTyped = container.querySelector("#name-pokemon");
    const selectTypeOrWeakness = container.querySelector("#filter-type-weakness");
    const selectAtributte = container.querySelector("#filter-atributtes");
    const selectOrder = container.querySelector("#order-selector");
    const selectOrderByWeakness = container.querySelector("#calculation-selector");
    const cleanButton = container.querySelector("#clean-button");
    const percentage = container.querySelector("#quantify-text");
    const selectRarity = container.querySelector("#rarity-selector");
  
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
    const selectTypeOrWeakness = container.querySelector("#filter-type-weakness");
    const selectAtributte = container.querySelector("#filter-atributtes");
    const selectOrder = container.querySelector("#order-selector");
    const selectOrderByWeakness = container.querySelector("#calculation-selector");
    const percentage = container.querySelector("#quantify-text");
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
