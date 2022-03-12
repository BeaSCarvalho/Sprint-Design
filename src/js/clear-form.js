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
  document.getElementById("result-cards").innerHTML = "";
  document.getElementById("button-return").innerHTML = "";
};
