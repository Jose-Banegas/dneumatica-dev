const section = document.getElementById("sectionExplorar");
const boton = document.getElementById("a-conoce");
const goTo = document.getElementById("boton-explorar");
boton.onclick = () => {
	section.scrollIntoView();
}

goTo.onclick = () => {
	window.location.href = "/servicio.html"
}
