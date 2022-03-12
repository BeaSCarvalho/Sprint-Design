import { searchNamePokemon, formCheckbox } from "../main.js";
let namePokemon = document.getElementById("name-pokemon");
let confirmationButton = document.getElementById("confirm-button");
let changeCheckboxGeneral = document.getElementById("container-checkbox");

export let changeFormName = (e) => {
  let formCheckType = document.forms.formFilters.elements.type;
  let formCheckWeakness = document.forms.formFilters.elements.weakness;
  if (e.target.value != "") {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = true;
      formCheckWeakness[i].disabled = true;
    }
    confirmationButton.addEventListener("click", searchNamePokemon);
    namePokemon.addEventListener("change", changeFormName);
  } else {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = false;
      formCheckWeakness[i].disabled = false;
    }
  }
};

export let changeFormCheckbox = (e) => {
  let formCheckType = document.forms.formFilters.elements.type;
  let formCheckWeakness = document.forms.formFilters.elements.weakness;
  let countChecked = 0;
  let countNoChecked = 0;
  if (e.target.checked == true) {
    namePokemon.disabled = true;
    confirmationButton.addEventListener("click", formCheckbox);
    changeCheckboxGeneral.addEventListener("change", function () {
      countChecked += 1;
    });
  }
  if (e.target.checked == false) {
    for (let i = 0; i < formCheckType.length; i++) {
      if (formCheckType[i].checked || formCheckWeakness[i].checked) {
        countNoChecked += 1;
      }
    }
    countChecked -= countNoChecked;
    if (countChecked == 0) {
      namePokemon.disabled = false;
    }
    namePokemon.addEventListener("change", changeFormName);
    changeCheckboxGeneral.addEventListener("change", changeFormCheckbox);
  }
};
