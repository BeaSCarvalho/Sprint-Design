import data from "./data/pokemon/pokemon.js";

const allDatas = data.pokemon;
let formFilters = document.getElementsByClassName("full-checkbox");
let nameInput = document.getElementById("name-pokemon");
var formCheckType = document.forms.formFilters.elements.type;
var formCheckWeakness = document.forms.formFilters.elements.weakness;
let confirmationButton = document.getElementById("confirm-button");
let clearButton = document.getElementById("clear-button");
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

//startSiteOnpokemon();
startPageFilters();

function startPageFilters() {
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }
  //erro
  //formFilters.addEventListener("focus", onchangeForm);
  confirmationButton.addEventListener("click", formName);
  confirmationButton.addEventListener("click", formCheckbox);
  clearButton.addEventListener("click", clearFormFilters);
}

function formName(e) {
  e.preventDefault();
  let namePokemon = nameInput.value;
  resultName = namePokemon.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  //teste
  console.log(resultName);
  startPageFilters();
}

function formCheckbox(e) {
  e.preventDefault();
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
  startPageFilters();
}

function clearFormFilters() {
  nameInput.value = "";
  resultsType = "";
  resultsWeakness = "";
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].checked = false;
    formCheckWeakness[i].checked = false;
  }
}

/*
//Colocar essa função no start-page
function onchangeForm(event) {
  console.log(event);
  if (nameChange.onchange != "") {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType.disabled = true;
      formCheckWeakness.disabled = true;
    }
    confirmationButton.addEventListener("click", formName);
  } else {
    nameInput.disabled = true;
    confirmationButton.addEventListener("click", formCheckbox);
  }
}
*/
