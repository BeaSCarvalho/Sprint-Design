const resultCards = document.getElementById("result-cards");

export let createCards = (data) => {
  resultCards.innerHTML = data
    .map((item) => {
      return `
      <section class="card">
        <p
          ${item.type
            .map((type) => 'class="poke-number ' + type + '"')
            .join("")}>
          ${item.num}  
        </p>
        <figure class="card-box">
          <img class="poke-img" src="${item.img}" alt=${item.name}>
        </figure>
        <main class="card-info">
          <h4 class="poke-title">
            ${item.name[0].toUpperCase() + item.name.substr(1)}
          </h4>
          <ul class="poke-items">
            ${item.type
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
      </section>
      <section class="modal-container" data-modal="container">
        <div id="modal" class="modal">
          <button class="close" data-modal="close-modal">X</button>

          <p class="pokemon-number">${item.num}</p> 
          <p class="name-pokemon">
            ${item.name[0].toUpperCase() + item.name.substr(1)}
          </p>
          <img class="poke-img" src="${item.img}" alt=${item.name}>
          <p class="pokemon-about">${item.about}</p> 
          <p class="pokemon-rarity">${item["pokemon-rarity"]}</p>

          <h2 class="modal-titles">Type</h2> 
          <ul class="poke-items">
            ${item.type
              .map(
                (type) => '<li class="li-item ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul>
          <h2 class="modal-titles">Weaknesses</h2> 
          <ul class="poke-items">
            ${item.weaknesses
              .map(
                (type) => '<li class="li-item ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul>
          <h2 class="modal-titles">Resistant</h2> 
          <ul class="poke-items">
            ${item.type
              .map(
                (type) => '<li class="li-item ' + type + '">' + type + "</li>"
              )
              .join("")}
          </ul>


          <h2 class="modal-titles">Special Attack</h2> 
          <ul class="poke-items list-special-attack">
            <li>${item["special-attack"]}</li>
          </ul>

          <h2 class="modal-titles">Quick Moves</h2> 
          <ul class="poke-items list-quick-moves">
            <li>${item["quick-move"]}</li>
          </ul>

          <section class="evolutions">
            <h2 class="modal-titles">Evolution</h2>
            <div class="evolution">
              <p class="evolution">
                ${item.evolution["prev-evolution"].num}
              </p>  
              <p class="evolution">
                ${item.evolution["prev-evolution"].name}
              </p>
              <p class="evolution">
                ${item.evolution["prev-evolution"].candy}
              </p>
            </div>
          </section>
        </div>
      </section>
    `;
    })
    .join("");
};

function initModal() {
  let openModal = document.querySelectorAll(".open-modal");
  let closeModal = document.querySelectorAll(".close-modal");
  let containerModal = document.querySelectorAll(".modal-container");
  openModal.addEventListener("click", toogle);
  closeModal.addEventListener("click", toogle);
  containerModal.addEventListener("click", outside);
}

function toogle(e) {
  e.preventDefault();
  containerModal.classList.toggle("active-modal");
}

function outside(e) {
  if (e.target === this) {
    e.preventDefault();
    containerModal.classList.toggle("active-modal");
  }
}
