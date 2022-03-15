/*import { searchNamePokemon, formCheckbox } from "../main.js";
const namePokemon = document.getElementById("name-pokemon");
const formCheckType = document.querySelectorAll("input[name=type]");
const formCheckWeakness = document.querySelectorAll("input[name=weakness]");
const confirmButton = document.getElementById("confirm-button");
const changeCheckboxGeneral = document.getElementById("container-checkbox");

export let changeFormName = (e) => {
  if (e.target.value != "") {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = true;
      formCheckWeakness[i].disabled = true;
    }
    confirmButton.addEventListener("click", function () {
      confirmButton.classList.add("button-none");
      searchNamePokemon();
    });
    namePokemon.addEventListener("change", changeFormName);
  } else {
    for (let i = 0; i < formCheckType.length; i++) {
      formCheckType[i].disabled = false;
      formCheckWeakness[i].disabled = false;
    }
  }
};

export let changeFormCheckbox = (e) => {
  let countChecked = 0;
  let countNoChecked = 0;
  if (e.target.checked == true) {
    namePokemon.disabled = true;
    confirmButton.addEventListener("click", function () {
      confirmButton.classList.add("button-none");
      formCheckbox();
    });
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
};*/
