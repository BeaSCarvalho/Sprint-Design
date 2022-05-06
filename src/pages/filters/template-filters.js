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

  return container;
}
