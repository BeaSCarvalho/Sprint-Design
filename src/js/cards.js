const resultCards = document.getElementById("result-cards");
let itemsType = [];
let itemsWeakness = [];

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
  itemsType = [];
  itemsWeakness = [];
  resultCards.innerHTML = data
    .map((item) => {
      itemsType.push(item.type);
      itemsWeakness.push(item.weaknesses);
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
  let listType = document.querySelectorAll(".list-type");
  for (let j = 0; j < itemsType.length; j++) {
    let itemsT = itemsType[j];
    for (let i = 0; i < itemsT.length; i++) {
      const li = document.createElement("li");
      listType[j].after(li);
      li.textContent = `${itemsT[i]}`;
      li.classList.add("li-item");
      li.textContent = types[li.textContent];
      li.classList.add(li.textContent);
    }
  }
};

export let createLiWeakness = () => {
  let listWeakness = document.querySelectorAll(".list-weakness");
  for (let j = 0; j < itemsWeakness.length; j++) {
    let itemsW = itemsWeakness[j];
    for (let i = 0; i < itemsW.length; i++) {
      const li = document.createElement("li");
      listWeakness[j].after(li);
      li.textContent = `${itemsW[i]}`;
      li.classList.add("li-item");
      li.textContent = types[li.textContent];
      li.classList.add(li.textContent);
    }
  }
};
