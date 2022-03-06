import data from "./data/pokemon/pokemon.js";

const allDatas = data.pokemon;
let formFilters = document.getElementsByClassName("full-checkbox");
let confirmationButton = document.getElementById("confirm-button");
let clearButton = document.getElementById("clear-button");
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

//cancelar quando nome for digitado
//aparecer os cards somente surgir
//limpar formulário

startSiteOnpokemon();

function startPageFilters() {
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }
  //formFilters.addEventListener("change", changeFormFilters);
  confirmationButton.addEventListener("click", formName);
  confirmationButton.addEventListener("click", formCheckbox);
  //clearButton.addEventListener("click", clearFormFilters);
}

function clearFormFilters() {
  let checkbox = getElementsByClassName("checkbox");
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = false;
  }
  namePokemon.textContent = "";
  //Habilitando botão
  confirmationButton.disabled = false;
}

function changeFormFilters(e) {
  confirmationButton.addEventListener("click", formName);
  confirmationButton.addEventListener("click", formCheckbox);
  //Desabilita para não enviar mais de uma vez
  confirmationButton.disabled = true;
  console.log(e.target.value);
}

function formCheckbox(e) {
  e.preventDefault();
  let formCheckType = document.forms.formFilters.elements.type;
  let formCheckWeakness = document.forms.formFilters.elements.weakness;
  for (let i = 0; i < formCheckType.length; i++) {
    if (formCheckType[i].checked) {
      resultsType += formCheckType[i].value + ",";
    } else if (formCheckWeakness[i].checked) {
      resultsWeakness += formCheckWeakness[i].value + ",";
    }
  }
  //teste
  console.log(resultsType);
  console.log(resultsWeakness);
}

function formName(e) {
  e.preventDefault();
  let namePokemon = document.querySelector(".input-name").value;
  resultName = namePokemon.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  //teste
  console.log(resultName);
}

function heightWindowHome() {
  let heightWindow = Number(window.innerHeight);
  let heightLogo = Number(document.querySelector(".header-home").offsetHeight);
  let heightText = Number(document.querySelector(".intro-text").offsetHeight);
  let heightTab = Number(document.querySelector(".details-info").offsetHeight);
  let sumAll = heightWindow - (heightLogo + heightText + heightTab);
  let containerMain = document.querySelector(".main-home");
  containerMain.style.height = sumAll + "px";
}

function startPageHome() {
  let rotationPage = false;
  do {
    heightWindowHome();
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
