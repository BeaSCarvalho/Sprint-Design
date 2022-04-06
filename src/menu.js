const buttonMobile = document.getElementById("button-mobile")

buttonMobile.addEventListener("click", toggleMenu)
buttonMobile.addEventListener("touchstart", toggleMenu)

function toggleMenu (event) {
	if(event.type === 'touchstart') {
		event.preventDefault();
	}

	const navigation = document.getElementById("nav");
	navigation.classList.toggle('active');
	const navActive = nav.classList.contains('active');
	event.currentTarget.setAttribute('aria-expanded', navActive);

	if (navActive) {
		event.currentTarget.setAttribute('aria-laberl', 'Close Menu')
	} else {
		event.currentTarget.setAttribute('aria-laberl', 'Open Menu')
	}
}