export function createCards (pokemonArray) {
  const pokemonList = [];
  const cardsList = document.querySelector("#result-cards");
  cardsList.innerHTML = "";
  pokemonArray.forEach((pokemon) => {
    const item = document.createElement("li");
    item.setAttribute('class', 'container-card');
    item.innerHTML = `
      <section class="card" data-pokemon="${pokemon.num}">
        <p
          ${pokemon.type
            .map((type) => 'class="poke-number ' + type + '"')
            .join("")}>
          ${pokemon.num}  
        </p>
        <figure class="card-box">
          <img class="poke-img" src="${pokemon.img}" alt=${pokemon.name}>
        </figure>
        <figure class="container-icon">
          <img src="./img/icons/icon-open.png" alt="More information" class="small-icon">
        </figure>
      </section>

      <section class="card-info">
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
      </section>
    `         
    pokemonList.push(item);
  });
  return pokemonList;
}
