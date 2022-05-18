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
              <div class="info-rarity-egg">
                <p class="poke-rarity">RARITY: ${
                pokemon.rarity}</p> 
                <p class="poke-rarity">EGG: ${
                  pokemon.egg}</p> 
              </div>
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

function getEvolution(pokemon) {
  const pokemonArray = [];
  if (pokemon.evolution["prev-evolution"] !== undefined) {
    const prevEvolution = pokemon.evolution["prev-evolution"];
    pokemonArray.push(`
      <div class="evolution-container">
        <img class="evolution-img" src="./img/pokemon/number-pokemon/${prevEvolution[0].num}.png">
        <p class="evolution-p">${prevEvolution[0].name.toUpperCase()}</p>
        <p class="evolution-p">N°: ${prevEvolution[0].num}</p>
        <p class="evolution-p">Candy-cost: ${prevEvolution[0]['candy-cost']}</p>
      </div>
    `);
    if (pokemon.evolution["prev-evolution"][0]["prev-evolution"] !== undefined) {
      const prevPrevEvolution = pokemon.evolution["prev-evolution"][0]["prev-evolution"];
      pokemonArray.push(`
        <div class="evolution-container">
          <img class="evolution-img" src="./img/pokemon/number-pokemon/${prevPrevEvolution[0].num}.png">
          <p class="evolution-p">${prevPrevEvolution[0].name.toUpperCase()}</p>
          <p class="evolution-p">N°: ${prevPrevEvolution[0].num}</p>
          <p class="evolution-p">Candy-cost: ${prevPrevEvolution[0]['candy-cost']}</p>
        </div>
      `);
      pokemonArray.reverse();
    }
  }

  if (pokemon.evolution["next-evolution"]!== undefined) {
    const nextEvolution = pokemon.evolution["next-evolution"];
    for (let position in pokemon.evolution["next-evolution"]) {
      pokemonArray.push(`
      <div class="evolution-container">
        <img class="evolution-img" src="./img/pokemon/number-pokemon/${nextEvolution[position].num}.png">
        <p class="evolution-p">${nextEvolution[position].name.toUpperCase()}</p>
        <p class="evolution-p">N°: ${nextEvolution[position].num}</p>
        <p class="evolution-p">Candy-cost: ${nextEvolution[position]['candy-cost']}</p>
      </div>
    `);
    }
    if (pokemon.evolution["next-evolution"][0]["next-evolution"] !== undefined) {
      const nextNextEvolution = pokemon.evolution["next-evolution"][0]["next-evolution"];
      pokemonArray.push(`
        <div class="evolution-container">
          <img class="evolution-img" src="./img/pokemon/number-pokemon/${nextNextEvolution[0].num}.png">
          <p class="evolution-p">${nextNextEvolution[0].name.toUpperCase()}</p>
          <p class="evolution-p">N°: ${nextNextEvolution[0].num}</p>
          <p class="evolution-p">Candy-cost: ${nextNextEvolution[0]['candy-cost']}</p>
        </div>
      `);
    }
  }

  if (pokemon.evolution["prev-evolution"] === undefined && pokemon.evolution["next-evolution"] === undefined) {
    pokemonArray.push(`
      <p class="not-evolution">This pokemon has no evolution!</p>
    `);
  }
  return pokemonArray;
}
