import { orderToShow, showInOrderOfWeakness } from "../main.js";
import { startPageFilters } from "./start-page.js";

const namePokemon = document.getElementById("name-pokemon");
const formCheckType = document.querySelectorAll("input[name=type]");
const formCheckWeakness = document.querySelectorAll("input[name=weakness]");
const selectOrder = document.getElementById("order-selector");
const selectOrderByWeakness = document.getElementById("calculation-selector");

export let clearFormFilters = () => {
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
  document.getElementById("quantify-text").innerHTML = "";

  selectOrder.removeEventListener("change", orderToShow);
  selectOrderByWeakness.removeEventListener("change", showInOrderOfWeakness);
  selectOrder.selectedIndex = 0;
  selectOrderByWeakness.selectedIndex = 0;

  startPageFilters();
};
