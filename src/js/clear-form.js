let namePokemon = document.getElementById("name-pokemon");
let formCheckType = document.forms.formFilters.elements.type;
let formCheckWeakness = document.forms.formFilters.elements.weakness;
let resultsType = "";
let resultsWeakness = "";
let resultName = "";

export let clearFormFilters = () => {
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

export let clearName = () => {
  namePokemon.value = "";
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].disabled = false;
    formCheckWeakness[i].disabled = false;
  }
};

export let clearCheckbox = () => {
  for (let i = 0; i < formCheckType.length; i++) {
    formCheckType[i].checked = false;
    formCheckWeakness[i].checked = false;
  }
  namePokemon.disabled = false;
};
