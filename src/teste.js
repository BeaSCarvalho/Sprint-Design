import data from "./data/pokemon/pokemon.js";

//startPageHome();

/*
 Pegar os dados importantes
 Exibir os dados na tela
 Criar template do card (html)
 Passar esse template para dentro do loop
 Jogar de volta para o document a string criada
*/
let confirmationButton = document.getElementById("confirm-button");
confirmationButton.addEventListener("click", formData);

function formData(e) {
  e.preventDefault();
  const formCheck = document.querySelector(".full-checkbox").elements;
  let result = "";
  for (let i = 0; i < formCheck.length; i++) {
    if (formCheck[i].checked) {
      result = result + formCheck[i].value + " ";
    }
  }
  document.getElementById("resultado").innerHTML =
    "Valor(es) selecionado(s) = " + result;
  //console.log(form.weakness.value);
  //form.reset();
}

/*
 Filtrar os dados por tipo
 Filtrar os dados por fraqueza
 Filtrar por nome usando regex
 Não permitir que tipos e fraquezas estejam disponíveis ao escrever o nome
 Ordenar os dados por número da pokédex
 Ordenar os dados por ordem alfabética crescente
 Ordenar os dados por ordem alfabética decrescente
 Ordenar por maior quantidade de fraqueza
 Ordenar por menor quantidade de fraqueza
 Resetar o filtro
*/

/*
function startPageHome() {
  heightWindow();
  screen.orientation.onchange = function (e) {
    location.reload();
  };
}
function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").offsetHeight);
  let heightTextBox = Number(
    document.querySelector(".intro-text").offsetHeight
  );
  let heightTab = Number(document.querySelector(".details-info").offsetHeight);
  let sumAll = heightWindow - heightLogo - heightTextBox - heightTab;
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}
*/

document
  .getElementById("confirm-button")
  .addEventListener("click", showResults);

function showResults(event) {
  event.preventDefault();

  for (let i = 0; i < data.pokemon.length; i++) {
    let allDatas = data.pokemon[i];
    console.log(typeof allDatas);

    /*Primeira letra do nome maiuscula - deixar para fazer no final para nao atrapalhar o sort() 
    const alteredName = allDatas.name[0].toUpperCase() + allDatas.name.substring(1);*/

    // card dos pokemons string
    const pokemonCard = `
    <section class="show-the-cards">
      <div class="img-box">
        <img src= "${allDatas.img}" alt=${allDatas.name}>
      </div>
         
      <div class="text-box">
        <p class="poke-name">Nome ${allDatas.name} </p>
        <p class="poke-number">N° ${allDatas.num} </p>
        <p class="poke-type">Tipo ${allDatas.type}</p>
        <p class="poke-weaknesses">Fraqueza ${allDatas.weaknesses}</p>
      </div>
    </section>
    `;

    const sectionResults = document.createElement("section");
    document.getElementById("result").appendChild(sectionResults);
    sectionResults.innerHTML = pokemonCard;
  }
}
