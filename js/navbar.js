//Este script lo escribi para manejar el despliegue de los enlaces de navegacion cuando se toca el botón menú en el modo mobile
// El append lo voy a hacer 

//DOM get
const menu = document.getElementById("menu");
const navbarItems = document.getElementById("navbar-items");
const ulNav = document.getElementById("ul-nav");
const navTop = document.getElementById("nav-top");
//Menu items
const menuItems = document.createElement("div");
menuItems.style.height = "355px";
menuItems.style.backgroundColor = "#000000";
const exterior = document.createElement("div");
exterior.style.height = "100vh";
exterior.style.width = "100%";



let posibilidad = true;
menu.onclick = function() {
	posibilidad ? (
			navbarItems.appendChild(menuItems),
			menuItems.appendChild(ulNav),
			menuItems.appendChild(exterior),
			navbarItems.style.display = "block",
			posibilidad = false
		) : (
			navbarItems.style.display = "none",
			posibilidad = true
		);
}

exterior.onclick = function() {
			navbarItems.style.display = "none",
		posibilidad = true;

}

//Devolver "automaticamente" los links a su lugar al volver a resolucion desktop
window.addEventListener('resize', function() {
	if (window.innerWidth >= 1024) {
		navTop.appendChild(ulNav);
		navbarItems.style.display = "none";
		posibilidad = true;
	}
})

