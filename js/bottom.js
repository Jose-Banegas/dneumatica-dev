const footerTop = document.getElementById("footer-top");
const footerBot = document.getElementById("footer-bot");
const herramientas1 = document.getElementById("herr1");
const herramientas2 = document.getElementById("herr2");
const dire1 = document.getElementById("dire1");
const dire2 = document.getElementById("dire2");
const direDiv = document.getElementById("dire");

const h3 = document.getElementById("h3Dire");

	if (window.innerWidth < 1024) {
			footerTop.style.display = "block";
			footerBot.style.display = "block";
	
		}

	if (window.innerWidth < 1366) {
			herramientas1.style.display = "none";
			herramientas2.style.display = "none";
			dire1.style.display = "none";
			dire2.style.display = "none";

	}

	if (window.innerWidth >= 1024) {
			footerTop.style.display = "grid";
			footerBot.style.display = "grid";
		

	}

	if (window.innerWidth >= 1366) {
			herramientas1.style.display = "initial";
			herramientas2.style.display = "initial";
			dire1.style.display = "initial";
			dire2.style.display = "initial";

	}

window.addEventListener("resize", function() {
		if (window.innerWidth < 1024) {
			footerTop.style.display = "block";
			footerBot.style.display = "block";
		
		}

	if (window.innerWidth < 1366) {
			herramientas1.style.display = "none";
			herramientas2.style.display = "none";
			dire1.style.display = "none";
			dire2.style.display = "none";

	}

	if (window.innerWidth >= 1024) {
			footerTop.style.display = "grid";
			footerBot.style.display = "grid";

	

	}

	if (window.innerWidth >= 1366) {
		herramientas1.style.display = "initial";
		herramientas2.style.display = "initial";
		dire1.style.display = "initial";
		dire2.style.display = "initial";

	}
	

})
