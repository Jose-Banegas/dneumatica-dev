const tituloBot = document.getElementById("titulo-bot");
const tituloTop = document.getElementById("titulo-top");

const titulo = document.getElementById("tituloServicio");

window.addEventListener("resize", () => {
	if(window.innerWidth < 1024) {
		tituloBot.appendChild(titulo);
		
	}

	if(window.innerWidth >= 1024) {
		tituloTop.appendChild(titulo);
	}
});

window.onload = () => {
	if(window.innerWidth < 1024) {
		tituloBot.appendChild(titulo);
		
	}	
}
