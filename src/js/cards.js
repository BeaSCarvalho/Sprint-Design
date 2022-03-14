let resultCards = document.getElementById("result-cards");
let itemsType = "";
let itemsWeakness = "";

export let addButton = () => {
  document.getElementById("button-return").innerHTML = `
  <a href="filters#header-filters">
    <button type="button" id="back-button" class="back-button">
      &#8634;
    </button>
  </a>;
`;
};

export let createCards = (data) => {
  resultCards.innerHTML = data
    .map((item) => {
      itemsType = item.type;
      itemsWeakness = item.weaknesses;
      return `
      <div class="card">
        <img class="pokedex-open" src="img/pokedex-open.png">
        <p class="poke-number">${item.num}</p>
        <div class="card-box">
          <figure class="box-poke-img">
            <img class="poke-img" src="${item.img}" alt=${item.name}>
          </figure>
          <main class="box-poke-text">
            <h4 class="poke-title"> 
              ${item.name[0].toUpperCase() + item.name.substr(1)}
            </h4>
            <ul class="poke-items">
              <span class="poke-item-title list-type">Tipo:</span>
            </ul>
            <ul class="poke-items">
              <span class="poke-item-title list-weakness">Fraqueza:</span> 
            </ul>
          </main>
        </div>
      </div>
      `;
    })
    .join("");
};

export let createLiType = () => {
  let type = document.querySelectorAll(".list-type");
  for (let j = 0; j < type.length; j++) {
    for (let i = 0; i < itemsType.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${itemsType[i]}`;
      li.classList.add("li-item");
      type[j].after(li);

      if (li.textContent == "bug") {
        li.textContent = "inseto";
        li.classList.add("bug");
      } else if (li.textContent == "dark") {
        li.textContent = "sombrio";
        li.classList.add("dark");
      } else if (li.textContent == "dragon") {
        li.textContent = "dragão";
        li.classList.add("dragon");
      } else if (li.textContent == "electric") {
        li.textContent = "elétrico";
        li.classList.add("electric");
      } else if (li.textContent == "fairy") {
        li.textContent = "fada";
        li.classList.add("fairy");
      } else if (li.textContent == "fighting") {
        li.textContent = "lutador";
        li.classList.add("fighting");
      } else if (li.textContent == "fire") {
        li.textContent = "fogo";
        li.classList.add("fire");
      } else if (li.textContent == "flying") {
        li.textContent = "voador";
        li.classList.add("flying");
      } else if (li.textContent == "ghost") {
        li.textContent = "fastama";
        li.classList.add("ghost");
      } else if (li.textContent == "grass") {
        li.textContent = "planta";
        li.classList.add("grass");
      } else if (li.textContent == "ground") {
        li.textContent = "terra";
        li.classList.add("ground");
      } else if (li.textContent == "ice") {
        li.textContent = "gelo";
        li.classList.add("ice");
      } else if (li.textContent == "normal") {
        li.textContent = "normal";
        li.classList.add("normal");
      } else if (li.textContent == "poison") {
        li.textContent = "venenoso";
        li.classList.add("poison");
      } else if (li.textContent == "psychic") {
        li.textContent = "psíquico";
        li.classList.add("psychic");
      } else if (li.textContent == "rock") {
        li.textContent = "pedra";
        li.classList.add("rock");
      } else if (li.textContent == "steel") {
        li.textContent = "aço";
        li.classList.add("steel");
      } else if (li.textContent == "water") {
        li.textContent = "água";
        li.classList.add("water");
      }
    }
  }
};

export let createLiWeakness = () => {
  let types = document.querySelectorAll(".list-weakness");
  for (let j = 0; j < types.length; j++) {
    for (let i = 0; i < itemsWeakness.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${itemsWeakness[i]}`;
      li.classList.add("li-item");
      types[j].after(li);

      if (li.textContent == "bug") {
        li.textContent = "inseto";
        li.classList.add("bug");
      } else if (li.textContent == "dark") {
        li.textContent = "sombrio";
        li.classList.add("dark");
      } else if (li.textContent == "dragon") {
        li.textContent = "dragão";
        li.classList.add("dragon");
      } else if (li.textContent == "electric") {
        li.textContent = "elétrico";
        li.classList.add("electric");
      } else if (li.textContent == "fairy") {
        li.textContent = "fada";
        li.classList.add("fairy");
      } else if (li.textContent == "fighting") {
        li.textContent = "lutador";
        li.classList.add("fighting");
      } else if (li.textContent == "fire") {
        li.textContent = "fogo";
        li.classList.add("fire");
      } else if (li.textContent == "flying") {
        li.textContent = "voador";
        li.classList.add("flying");
      } else if (li.textContent == "ghost") {
        li.textContent = "fastama";
        li.classList.add("ghost");
      } else if (li.textContent == "grass") {
        li.textContent = "planta";
        li.classList.add("grass");
      } else if (li.textContent == "ground") {
        li.textContent = "terra";
        li.classList.add("ground");
      } else if (li.textContent == "ice") {
        li.textContent = "gelo";
        li.classList.add("ice");
      } else if (li.textContent == "normal") {
        li.textContent = "normal";
        li.classList.add("normal");
      } else if (li.textContent == "poison") {
        li.textContent = "venenoso";
        li.classList.add("poison");
      } else if (li.textContent == "psychic") {
        li.textContent = "psíquico";
        li.classList.add("psychic");
      } else if (li.textContent == "rock") {
        li.textContent = "pedra";
        li.classList.add("rock");
      } else if (li.textContent == "steel") {
        li.textContent = "aço";
        li.classList.add("steel");
      } else if (li.textContent == "water") {
        li.textContent = "água";
        li.classList.add("water");
      }
    }
  }
};