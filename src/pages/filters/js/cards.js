
const resultCards = document.getElementById("result-cards");
let itemsType = [];

export let createCards = (data) => {
  itemsType = [];
  resultCards.innerHTML = data
    .map((item) => {
      itemsType.push(item.type);
      return `
      <div class="card">
        <p class="poke-number">${item.num}</p>
        <div class="card-box">
          <img class="poke-img" src="${item.img}" alt=${item.name}>
        </div>
        <h4 class="poke-title">
          ${item.name[0].toUpperCase() + item.name.substr(1)}
        </h4>
        <ul class="poke-items list-type">
        </ul>
        <button type="button" class="small-button" data-modal="open-modal">
          open
          <div class="container-icon">
            <img src="./img/icon-open.png" alt="More information" class="small-icon">
          </div>
        </button>
      </div>
      `;
    })
    .join("");
  createLiType();
};
let createLiType = () => {
  let number = document.querySelectorAll(".poke-number");
  let listType = document.querySelectorAll(".list-type");
  for (let j = 0; j < itemsType.length; j++) {
    let itemsT = itemsType[j];
    for (let i = 0; i < itemsT.length; i++) {
      const li = document.createElement("li");
      listType[j].after(li);
      li.textContent = `${itemsT[i]}`;
      li.classList.add("li-item");

      if (li.textContent === "bug") {
        li.classList.add("bug");
        number[j].classList.add("bug");
      } else if (li.textContent === "dark") {
        li.classList.add("dark");
        number[j].classList.add("dark");
      } else if (li.textContent === "dragon") {
        li.classList.add("dragon");
        number[j].classList.add("dragon");
      } else if (li.textContent === "electric") {
        li.classList.add("electric");
        number[j].classList.add("electric");
      } else if (li.textContent === "fairy") {
        li.classList.add("fairy");
        number[j].classList.add("fairy");
      } else if (li.textContent === "fighting") {
        li.classList.add("fighting");
        number[j].classList.add("fighting");
      } else if (li.textContent === "fire") {
        li.classList.add("fire");
        number[j].classList.add("fire");
      } else if (li.textContent === "flying") {
        li.classList.add("flying");
        number[j].classList.add("flying");
      } else if (li.textContent === "ghost") {
        li.classList.add("ghost");
        number[j].classList.add("ghost");
      } else if (li.textContent === "grass") {
        li.classList.add("grass");
        number[j].classList.add("grass");
      } else if (li.textContent === "ground") {
        li.classList.add("ground");
        number[j].classList.add("ground");
      } else if (li.textContent === "ice") {
        li.classList.add("ice");
        number[j].classList.add("ice");
      } else if (li.textContent === "normal") {
        li.classList.add("normal");
        number[j].classList.add("normal");
      } else if (li.textContent === "poison") {
        li.classList.add("poison");
        number[j].classList.add("poison");
      } else if (li.textContent === "psychic") {
        li.classList.add("psychic");
        number[j].classList.add("psychic");
      } else if (li.textContent === "rock") {
        li.classList.add("rock");
        number[j].classList.add("rock");
      } else if (li.textContent === "steel") {
        li.classList.add("steel");
        number[j].classList.add("steel");
      } else if (li.textContent === "water") {
        li.classList.add("water");
        number[j].classList.add("water");
      }
    }
  }
};
