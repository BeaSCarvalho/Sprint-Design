const containerList = document.getElementById("list");
const pokemonModal = document.getElementById("modal-pokemon");

let body = document.getElementsByTagName("body")[0];

export let createCards = function (pokemonArray) {
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
        <button type="button" class="button-modal open-modal">
          open
          <div class="container-icon">
            <img src="../../img/icon-open.png" alt="More information" class="small-icon">
          </div>
        </button> 
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
          <div class="modal-content">
            <span id="spanClose" class="close">x</span>
              
            <div class="modal_block1">
              <h4 class="poke-title">
                ${pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</p>
              </h4>
              <img class="poke-img" src="${pokemon.img}" alt=${pokemon.name}>
              <p class="modal_block1-txt"> N° ${pokemon.num}</p>
              <p class="version-description">About: ${pokemon.about}</p>    
            </div>
          
            <section class="row-2">
              <section class="rows" id="rows">
                <article class="titleAttack" ><strong>QUIK MOVE: </strong>
                  <p>${pokemon["quick-move"]
                    .map((move) => move.type + move.name)
                    .join("")}</p>
                </article>
                <article class="titleAttack" ><strong>SPECIAL ATTACK:</strong>
                  <p>${pokemon["special-attack"]
                    .map((attack) => attack.type + attack.name)
                    .join("")}</p>
                </article>
              </section>
      
              <section class="rows">
                <section class="modal_block4">
                  <div class="resist-weak-ctn">
                    <h3 class="modal-h4"> TYPE</h3>
                      <div class="typeModal">
                      <p>${pokemon.type.join(" ")}</p>
                      </div>
                  </div>
                  <div class="resist-weak-ctn">
                    <h3 class="modal-h4">RESISTANCE</h3>
                      <p>${pokemon.resistant.join(" ")}</p>
                  </div>
                  <div class="resist-weak-ctn">
                    <h3 class="modal-h4"> WEAKNESSES</h3>
                    <p>${pokemon.weaknesses.join(" ")}</p>
                  </div>
                </section>
      
                <section class="modal_block4" id="column-M">
                  <section class="evoluciones">
                    <h3 class="modal-h3">EVOLUTION</h3>
                    <div class="container-movements">
                      <p>${prevEvolution ? prevEvolution : ""}</p>
                      <p>${nextEvolution ? nextEvolution : ""}</p>
                    </div>
                  </section>

                  <section class="column">
                    <h3 class="subtitle"> STATS </h3>
                    <p> Max-Hp: ${pokemon.stats["max-hp"]} </p>
                    <p> Max-cp: ${pokemon.stats["max-cp"]}</p>
                    <p> Base-attack: ${pokemon.stats["base-attack"]}</p>
                    <p> Base-defense: ${pokemon.stats["base-defense"]}</p>
                    <p> Base-stamina: ${pokemon.stats["base-stamina"]}</p>
                  </section> 
                </section>
              </section>
            </section>
          </div>
        `;

      pokemonModal.innerHTML = template;
      let span = pokemonModal.querySelector('[id="spanClose"]');

      pokemonModal.style.display = "block";
      body.style.position = "static";
      body.style.height = "100%";
      body.style.overflow = "hidden";

      span.onclick = function () {
        pokemonModal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
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
