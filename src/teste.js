





function startPageFilters() {
  let clickLogo = document.getElementsByClassName(
    "logo-onpokemon-filter"
  ).onclick;
  if (clickLogo == true) {
    startPageHome();
  }
  namePokemon.addEventListener("change", changeFormName);
  changeCheckboxGeneral.addEventListener("change", changeFormCheckbox);
}
