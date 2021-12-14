const footerTop = document.getElementById("footer-top");
const footerBot = document.getElementById("footer-bot");
const herramientas1 = document.getElementById("herr1");
const herramientas2 = document.getElementById("herr2");
const dire1 = document.getElementById("dire1");
const dire2 = document.getElementById("dire2");
const direDiv = document.getElementById("dire");
const divPadre = document.getElementById("footer-izq");
const divH3 = document.getElementById("izq-container");
const h3 = document.getElementById("h3Dire");

divH3.style.textAlign = "center";
var posible = true;


	if (window.innerWidth < 1024) {
			footerTop.style.display = "block";
			footerBot.style.display = "block";

			posible ? (direDiv.appendChild(divH3), posible = false) : null
	
		}




	if (window.innerWidth >= 1024) {
			footerTop.style.display = "grid";
			footerBot.style.display = "grid";



	}

window.addEventListener("resize", function() {
		if (window.innerWidth < 1024) {
			footerTop.style.display = "block";
			footerBot.style.display = "block";
			posible ? (direDiv.appendChild(divH3), posible = false) : null
		
		}



	if (window.innerWidth >= 1024) {
			footerTop.style.display = "grid";
			footerBot.style.display = "grid";
			-posible ? (divPadre.appendChild(divH3), posible = true) : null

	

	}

	

})
