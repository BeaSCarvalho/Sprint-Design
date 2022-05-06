const pokemonModal = document.getElementById("modal-pokemon");
const button = document.getElementById("back-button");
const body = document.getElementsByTagName("body")[0];

export let createCards = function (pokemonArray) {
  const containerList = document.getElementById("result-cards");
  containerList.innerHTML = "";
  pokemonArray.forEach((pokemon) => {
    const item = document.createElement("section");
    containerList.appendChild(item).innerHTML = `

      <section class="container-card">
        <section class="card" id="pokemon-${pokemon.num}">
          <p
            ${pokemon.type
              .map((type) => 'class="poke-number ' + type + '"')
              .join("")}>
            ${pokemon.num}  
          </p>
          <figure class="card-box">
            <img class="poke-img" src="${pokemon.img}" alt=${pokemon.name}>
          </figure>
          <div class="container-icon">
            <img src="../../img/icons/icon-open.png" alt="More information" class="small-icon">
          </div>
        </section>
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
        </main>
      </div>
    `;

    const pokemonButton = item.querySelector(
      '[id="pokemon-' + pokemon.num + '"]'
    );

    pokemonButton.addEventListener("click", () => {
      let prevEvolution = "";
      let nextEvolution = "";

      if (pokemon.evolution["next-evolution"]) {
        let evolutions = getNextEvolution(pokemon.evolution["next-evolution"]);

        evolutions.forEach((evol) => {
          nextEvolution += `
              <div class="evolution-container">
                <img class="evolution-img" src="../../img/pokemon/number-pokemon/${evol.num}.png">
                <p class="evolution-p">${evol.name.toUpperCase()}</p>
                <p class="evolution-p">N°: ${evol.num}</p>
                <p class="evolution-p">Candy-cost: ${evol['candy-cost']}</p>
              </div>
              `;
        });
      }

      if (pokemon.evolution["prev-evolution"]) {
        let evolutions = getPrevEvolution(pokemon.evolution["prev-evolution"]);

        evolutions.forEach((evol) => {
          prevEvolution += `
              <div class="evolution-container">
                <img class="evolution-img" src="../../img/pokemon/number-pokemon/${evol.num}.png">
                <p class="evolution-p">${evol.name.toUpperCase()}</p>
                <p class="evolution-p">N°: ${evol.num}</p>
                <p class="evolution-p">Candy-cost: ${evol['candy-cost']}</p>
              </div>
            `;
        });
      }

      let template = `
      <div class="modal-group">

        <div class="group-header">
          <span class="group-header-number">
            <p class="header-poke-number">${pokemon.num}</p>
          </span>
          <span class="group-header-name">
            <h4 class="header-poke-name">${
              pokemon.name[0].toUpperCase() + pokemon.name.substr(1)
            }
            </h4>
          </span>
          <button id="spanClose" class="close-modal">X</button> 
        </div>

        <div class="group-modal-items">

          <section class="group-header-items">
            <figure class="container-modal-image-header">
              <img class="modal-poke-img" src="${pokemon.img}" 
              alt=${pokemon.name}>
            </figure>
            <p class="poke-about">${pokemon.about}</p> 
            <p class="poke-rarity">Rarity: ${
              pokemon.rarity}</p> 

            <section class="container-group-stats">
              <div class="items-stats">
                <span class="td-items">
                  <p class="list-title-table-header">Max-HP</p>
                  <p class="li-item-table-header">${pokemon.stats["max-hp"]}</p>
                </span>
                <span class="td-items">
                  <p class="list-title-table-header">Max-CP</p>
                  <p class="li-item-table-header">${pokemon.stats["max-cp"]}</p>
                </span>
              </div>
              <div class="items-stats">
                <span class="td-items">
                  <p class="list-title-table-header">Base-Attack</p>
                  <p class="li-item-table-header">${pokemon.stats["base-attack"]}</p>
                </span>
                <span class="td-items">
                  <p class="list-title-table-header">Base-Defense</p>
                  <p class="li-item-table-header">${pokemon.stats["base-defense"]}</p>
                </span>
                <span class="td-items">
                  <p class="list-title-table-header">Base-Stamina</p>
                  <p class="li-item-table-header">${pokemon.stats["base-stamina"]}</p>
                </span>
              </div>
            </section>  
          </section> 
            
          <section class="container-group-modal-text">
            <div class="container-list-type">
              <section class="group-type">
                <h2 class="modal-titles-table">TYPE</h2>
                <ul>
                 ${pokemon.type
                   .map(
                     (type) =>
                       '<li class="list-item-card-modal ' + type + '">' + type + "</li>"
                   )
                   .join("")}
                </ul>
              </section>
              <section class="group-weakness">
                <h2 class="modal-titles-table">WEAKNESSES</h2>
                <ul>
                ${pokemon.weaknesses
                  .map(
                    (type) =>
                      '<li class="list-item-card-modal ' + type + '">' + type + "</li>"
                  )
                  .join("")}
                </ul>
              </section>
              <section class="group-resistant">
                <h2 class="modal-titles-table">RESISTANT</h2>
                <ul>
                ${pokemon.resistant
                  .map(
                    (type) =>
                      '<li class="list-item-card-modal ' + type + '">' + type + "</li>"
                  )
                  .join("")}
                </ul>
              </section>
            </div>

            <section class="group-move-special">
                  
              <section class="group-moves">
                <h2 class="modal-titles">QUICK MOVES</h2>
                <section class="container-info-text-table">

                ${pokemon["quick-move"]
                    .map(
                      (move) => `
                      <section class="group-moves-attack ${move.type}">
                        <div class="group-moves-title">
                          <p class="poke-items-name-table">${move.name.toUpperCase()}</p>
                          <p class="list-title-table type-text-table">${move.type.toUpperCase()}</p>
                        </div>
                        <table class="list-items-table">
                          <tbody class="list-items-table-body">
                            <tr>
                              <td>
                                <p class="list-title-table">Damage</p>
                                <p class="item-table-text">${move["base-damage"]}</->
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="list-title-table">Energy</p>
                                <p class="item-table-text">${move.energy}</->
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="list-title-table">Move-duration</p>
                                <p class="item-table-text">${move["move-duration-seg"]}</->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </section>
                      `
                    )
                    .join("")}
                  </section>
                </section>

                <section class="group-moves">
                <h2 class="modal-titles">SPECIAL ATTACK</h2>
                <section class="container-info-text-table">
                ${pokemon["special-attack"]
                    .map(
                      (attack) => `
                      <section class="group-moves-attack ${attack.type}">
                        <div class="group-moves-title">
                          <p class="poke-items-name-table">${attack.name.toUpperCase()}</p>
                          <p class="list-title-table type-text-table">${attack.type.toUpperCase()}</p>
                        </div>
                        <table class="list-items-table">
                          <tbody class="list-items-table-body">
                            <tr>
                              <td>
                                <p class="list-title-table">Damage</p>
                                <p class="item-table-text">${attack["base-damage"]}</->
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="list-title-table">Energy</p>
                                <p class="item-table-text">${attack.energy}</->
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p class="list-title-table">Move-duration</p>
                                <p class="item-table-text">${attack["move-duration-seg"]}</->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </section>
                      `
                    )
                    .join("")}
                  </section>
                </section>


              <section class="group-evolutions">
                <h2 class="modal-titles">EVOLUTION</h2>
                <div class="container-movements">
                  ${nextEvolution ? nextEvolution : ""}
                  ${prevEvolution ? prevEvolution : ""}
                </div>
              </section>
              </section>
              </section>
            </div>
          </section>
        </div>
      </div>
          `;

      pokemonModal.innerHTML = template;
      let span = pokemonModal.querySelector('[id="spanClose"]');

      pokemonModal.style.display = "block";
      button.style.display = "none";

      span.onclick = function () {
        pokemonModal.style.display = "none";
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