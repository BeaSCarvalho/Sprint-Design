let namePokemon = document.getElementById("name-pokemon");
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

export let clearFormFilters = () => {
  let formCheckType = document.forms.formFilters.elements.type;
  let formCheckWeakness = document.forms.formFilters.elements.weakness;
  resultsType = "";
  resultsWeakness = "";
  resultName = "";
  namePokemon.value = "";
  if (namePokemon.disabled == true) {
    namePokemon.disabled = false;
  }
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].disabled = false;
    formCheckWeakness[i].disabled = false;
  }
  document.getElementById("show-the-cards").innerHTML = "";
  document.getElementsByClassName("result-cards").innerHTML = "";
};

export let clearInputName = () => {
  let formCheckType = document.forms.formFilters.elements.type;
  let formCheckWeakness = document.forms.formFilters.elements.weakness;
  namePokemon.value = "";
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].disabled = false;
    formCheckWeakness[i].disabled = false;
  }
};

export let clearInputCheckbox = () => {
  let formCheckType = document.forms.formFilters.elements.type;
  let formCheckWeakness = document.forms.formFilters.elements.weakness;
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].checked = false;
    formCheckWeakness[i].checked = false;
  }
  namePokemon.disabled = false;
};
