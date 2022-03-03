import data from "./data/pokemon/pokemon.js";

/*
 Pegar os dados importantes
 Exibir os dados na tela
 Criar template do card (html)
 Passar esse template para dentro do loop
 Jogar de volta para o document a string criada
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
startOnpokemon();

function startOnpokemon() {
  // quando entra no arquivo home
  startPageHome();
  //quando entra no arquivo filters
  startPageFilters();
}

function startPageFilters() {
  window.location.href = "filters.html";
  document
    .getElementById("confirm-button")
    .addEventListener("click", formDataCheckbox);
  //caso o link no onpokemon, voltar para home
}

function startPageHome() {
  let rotationPage = false;
  do {
    heightWindow();
    rotationPage = screen.orientation.onchange = function (e) {
      location.reload();
    };
  } while (rotationPage == false);
  let clickPokedex = document.getElementsByClassName("pokedex-close").onclick;
  if (clickPokedex == true) {
    startPageFilters();
  }
}

function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  console.log(heightWindow);
  let heightLogo = Number(document.querySelector(".header-home").scrollHeight);
  console.log(heightLogo);
  let heightText = Number(document.querySelector(".intro-text").scrollHeight);
  console.log(heightText);
  let heightTab = Number(document.querySelector(".details-info").scrollHeight);
  console.log(heightTab);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  console.log(sumAll);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}
