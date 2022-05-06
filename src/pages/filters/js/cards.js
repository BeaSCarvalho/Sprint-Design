const pokemonModal = document.getElementById("modal-pokemon");
const button = document.getElementById("back-button");
const body = document.getElementsByTagName("body")[0];

export let createCards = function (pokemonArray) {
  const containerList = document.getElementById("result-cards");
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
          <img src="../../img/icon-open.png" alt="More information" class="small-icon">
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
    <div class="modal-group">

      <div class="group-header">
        <span class="header-number">
          <p class="header-poke-number">${pokemon.num}</p>
        </span>
        <span class="header-name">
          <h4 class="header-poke-name">${
            pokemon.name[0].toUpperCase() + pokemon.name.substr(1)
          }
          </h4>
        </span>
        <button id="spanClose" class="close-modal">X</button> 
      </div>

      <div class="group-modal-items">

        <section class="container-header-items">
          <figure class="group-img">
            <img class="modal-poke-img" src="${pokemon.img}" 
            alt=${pokemon.name}>
          </figure>
          <p class="poke-about">${pokemon.about}</p> 
          <p class="li-item poke-rarity">RARITY: ${
            pokemon.rarity}</p> 

          <section class="container-group-stats">
            <table class="items-table-stats">
              <tbdoy>
                <tr>
                  <td>
                    <p class="list-title">Max-HP</p>
                    <p class="li-item">${pokemon.stats["max-hp"]}</p>
                  </td>
                  <td>
                    <p class="list-title">Max-CP</p>
                    <p class="li-item">${pokemon.stats["max-cp"]}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p class="list-title">Base-Attack</p>
                    <p class="li-item">${pokemon.stats["base-attack"]}</p>
                  </td>
                  <td>
                    <p class="list-title">Base-Defense</p>
                    <p class="li-item">${pokemon.stats["base-defense"]}</->
                  </td>
                  <td>
                    <p class="list-title">Base-Stamina</p>
                    <p class="li-item">${pokemon.stats["base-stamina"]}</->
                  </td>
                </tr>
              </tbody>
            </table>
          </section>  
        </section> 
      
        <section class="container-group">
          <div class="container-main-items">
            <div class="container-list-type">

              <section class="group-type">
               <h2 class="poke-type modal-titles">TYPE</h2>
                <ul class="poke-items list-type">
                 ${pokemon.type
                   .map(
                     (type) =>
                       '<li class="li-item-card-modal ' + type + '">' + type + "</li>"
                   )
                   .join("")}
                </ul>
              </section>

              <section class="group-weakness">
                <h2 class="modal-titles">WEAKNESSES</h2>
                <ul class="poke-items list-weaknesses">
                ${pokemon.weaknesses
                  .map(
                    (type) =>
                      '<li class="li-item-card-modal ' + type + '">' + type + "</li>"
                  )
                  .join("")}
                </ul>
              </section>

              <section class="group-resistant">
                <h2 class="modal-titles">RESISTANT</h2>
                <ul class="poke-items list-resistant">
                ${pokemon.resistant
                  .map(
                    (type) =>
                      '<li class="li-item-card-modal ' + type + '">' + type + "</li>"
                  )
                  .join("")}
                </ul>
              </section>
            </div>

            <section class="group-move-special">
              <section class="group-moves">

                <section class="titleAttack">
                  <h2 class="modal-titles">QUICK MOVES</h2>
                  <p>${pokemon["quick-move"]
                    .map(
                      (move) => `
                      <section class="group-moves-attack">
                        <ul class="poke-items">
                          <span class="list-title">${move.name.toUpperCase()}</span>
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
                    .join("")}</p>
                </section>

                <section class="titleAttack" >
                  <h2 class="modal-titles">SPECIAL ATTACK</h2>
                  <p>${pokemon["special-attack"]
                    .map(
                      (attack) => `
                      <section class="group-moves-attack">
                        <ul class="poke-items">
                          <span class="list-title">${attack.name.toUpperCase()}</span>
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
                    .join("")}</p>
                </section>

              <section class="group-evolutions">
                <h2 class="modal-titles">EVOLUTION</h2>
                <div class="container-movements">
                  <p>${prevEvolution ? prevEvolution : ""}</p>
                 <p>${nextEvolution ? nextEvolution : ""}</p>
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
