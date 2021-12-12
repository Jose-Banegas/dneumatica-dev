const topDiv = document.getElementById("btn-container");
const botDiv = document.getElementById("btn-bot");
const btn = document.getElementById("btn-contacto");

window.addEventListener("resize", () => {
	if (window.innerWidth < 1024) {
		botDiv.appendChild(btn);
	}

	if (window.innerWidth >= 1024) {
		topDiv.appendChild(btn)
	}
})

window.onload = () => {
		if (window.innerWidth < 1024) {
		botDiv.appendChild(btn);
	}

}
