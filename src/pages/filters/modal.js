export function createModal (pokemonArray) {
  const pokemonList = [];
  pokemonArray.forEach((pokemon) => {
    const item = document.createElement("li");
    item.setAttribute('class', `modal-group pokemon-modal-${pokemon.num}`);
    item.innerHTML = `
          <header class="group-header">
            <span class="group-header-number">
              <p class="header-poke-number">${pokemon.num}</p>
            </span>
            <span class="group-header-name">
              <h4 class="header-poke-name">${
                pokemon.name[0].toUpperCase() + pokemon.name.substr(1)
              }
              </h4>
            </span>
            <button class="close-modal" data-pokemon-modal="${pokemon.num}">X</button> 
          </header>
          <section class="group-modal-items">
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
              <section class="container-list-type">
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
              </section>
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
                  <section class="group-evolutions">
                    <h2 class="modal-titles">EVOLUTION</h2>
                    <div class="container-movements">
                      ${getEvolution(pokemon)}
                    </div>
                  </section>
                </section>
              </section>
            </section>
          </section>
    `;
    pokemonList.push(item);
  });
  return pokemonList;
}

/*
  pokemon001 {
    next-evolution 002 {
      next-evolution 003
    }
  }
  pokemon002 {
    prev-evolution 001
    next-evolution 002
  }
  pokemon003 {
    prev-evolution 002 {
      prev-evolution 001
    }
  }
*/

function getEvolution(pokemon) {
  console.log(pokemon);
  const prevEvolution = pokemon.evolution["prev-evolution"];
  const nextEvolution = pokemon.evolution["next-evolution"];
  const nextNextEvolution = pokemon.evolution["next-evolution"]["nex-evolution"];
  console.log(prevEvolution);
  console.log(nextEvolution);
  const pokemonArray = [];
  if (prevEvolution) {
    pokemonArray.push(`
      <div class="evolution-container">
        <img class="evolution-img" src="./img/pokemon/number-pokemon/${prevEvolution.num}.png">
        <p class="evolution-p">${prevEvolution.name}</p>
        <p class="evolution-p">N°: ${prevEvolution.num}</p>
        <p class="evolution-p">Candy-cost: ${prevEvolution['candy-cost']}</p>
      </div>
    `);
  }
  if (nextEvolution !== undefined) {
    console.log(nextEvolution.name);
    pokemonArray.push(`
      <div class="evolution-container">
        <img class="evolution-img" src="./img/pokemon/number-pokemon/${nextEvolution.num}.png">
        <p class="evolution-p">${nextEvolution.name}</p>
        <p class="evolution-p">N°: ${nextEvolution.num}</p>
        <p class="evolution-p">Candy-cost: ${nextEvolution['candy-cost']}</p>
      </div>
    `);
  }
  if (nextNextEvolution !== undefined) {
    console.log(nextNextEvolution.name);
    pokemonArray.push(`
      <div class="evolution-container">
        <img class="evolution-img" src="./img/pokemon/number-pokemon/${nextNextEvolution.num}.png">
        <p class="evolution-p">${nextNextEvolution.name}</p>
        <p class="evolution-p">N°: ${nextNextEvolution.num}</p>
        <p class="evolution-p">Candy-cost: ${nextNextEvolution['candy-cost']}</p>
      </div>
    `);
  }
  return pokemonArray;
}
