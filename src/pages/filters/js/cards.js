
export let createCards = function (pokemonArray) {

  const containerList = document.querySelector("#result-cards");
const pokemonModal = document.querySelector("#modal-pokemon");
const button = document.querySelector("#back-button");

let body = document.getElementsByTagName("body")[0];

  containerList.innerHTML = "";
  for (let i = 0; pokemonArray.length; i++) {
  //pokemonArray.forEach((pokemon) => {
    const item = document.createElement("section");
    item.className = "card pokemon";
    item.id = pokemonArray[i].num;
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
              .map(
                (move) => `
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
              .join("")}</p>
          </article>
                  
          <article class="titleAttack" >
            <h2 class="modal-titles">Special Attack</h2>
            <p>${pokemon["special-attack"]
              .map(
                (attack) => `
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
              .join("")}</p>
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
              </section>
            </section>
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
  };
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
