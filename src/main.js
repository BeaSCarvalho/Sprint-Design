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
startSiteOnpokemon();

function formDataCheckbox(e) {
  e.preventDefault();
  const formCheck = document.querySelector(".full-checkbox").elements;
  let result = "";
  for (let i = 0; i < formCheck.length; i++) {
    if (formCheck[i].checked) {
      result = result + formCheck[i].value + " ";
      console.log(typeof formCheck[i]);
    }
  }
  document.getElementById("resultado").innerHTML =
    "Valor(es) selecionado(s) = " + result;
  //console.log(form.weakness.value);
  //form.reset();
}

function startSiteOnpokemon() {
  let url = Array.from(location.href).join();
  url = url.replace(/\W/g, "");
  url = url.includes("filters");
  if (url === true) {
    startPageFilters();
  } else {
    let containerMain = document.querySelector(".main-home");
    containerMain.style.height = "";
    startPageHome();
  }
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
    window.location.href = "filters.html";
    startPageFilters();
  }
}

function heightWindow() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").offsetHeight);
  let heightText = Number(document.querySelector(".intro-text").offsetHeight);
  let heightTab = Number(document.querySelector(".details-info").offsetHeight);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}

function startPageFilters() {
  document
    .getElementById("confirm-button")
    .addEventListener("click", formDataCheckbox);
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }
}