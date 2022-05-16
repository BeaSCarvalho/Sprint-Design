import { createHeader } from './template-header.js';

export function creatingInternalElements() {
  const container = document.getElementById('container-pokemon');
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  header.innerHTML = createHeader();
  container.append(header);
  const buttonMobile = container.querySelector("#button-mobile");
  buttonMobile.addEventListener("click", toggleMenu);
  buttonMobile.addEventListener("touchstart", toggleMenu);
}

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const navigation = document.getElementById("nav");
  navigation.classList.toggle("active");
  const navActive = navigation.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", navActive);
  if (navActive) {
    event.currentTarget.setAttribute("aria-laberl", "Close Menu");
  } else {
    event.currentTarget.setAttribute("aria-laberl", "Open Menu");
  }
}
