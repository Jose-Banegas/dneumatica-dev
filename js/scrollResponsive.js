// get

const padre = document.getElementById("scrollPadre");

const texto1 = document.getElementById("box1");
const texto2 = document.getElementById("box2");
const texto3 = document.getElementById("box3");
const texto4 = document.getElementById("box4");
const texto5 = document.getElementById("box5");
const texto6 = document.getElementById("box6");

const imagen1 = document.getElementById("imagen1");

const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");
const imagen5 = document.getElementById("imagen5");
const imagen6 = document.getElementById("imagen6");

const renglon1 = document.createElement("div");
const renglon2 = document.createElement("div");
const renglon3 = document.createElement("div");
const renglon4 = document.createElement("div");
const renglon5 = document.createElement("div");
const renglon6 = document.createElement("div");

if(window.innerWidth < 1024) {
	renglon1.style.display = "flex";
	renglon1.style.flexDirection = "column";
	renglon1.style.gap = "20px";	
	renglon1.style.gridRow = "1";
	renglon1.style.gridColumn = "2 / 8";
	imagen1.style.width = "90%";
	imagen1.style.borderRadius = "15px"
	renglon1.appendChild(texto1);
	renglon1.appendChild(imagen1);
	renglon1.style.margin = "auto"
	padre.appendChild(renglon1);
	
	renglon2.style.display = "flex";
	renglon2.style.gap = "20px";	
	renglon2.style.flexDirection = "column";
	renglon2.style.gridRow = "2";
	renglon2.style.gridColumn = "2 / 8";
	renglon2.style.margin = "auto"
	imagen2.style.width = "90%";
	imagen2.style.borderRadius = "15px"
	renglon2.appendChild(texto2);
	renglon2.appendChild(imagen2);
	padre.appendChild(renglon2);

	renglon3.style.display = "flex";	
	renglon3.style.flexDirection = "column";
	renglon3.style.gap = "20px";	
	renglon3.style.gridRow = "3";
	renglon3.style.gridColumn = "2 / 8";
	renglon3.style.margin = "auto"
	imagen3.style.width = "90%";
	imagen3.style.borderRadius = "15px"
	renglon3.appendChild(texto3);
	renglon3.appendChild(imagen3);
	padre.appendChild(renglon3);

	renglon4.style.display = "flex";	
	renglon4.style.flexDirection = "column";
	renglon4.style.gap = "20px";	
	renglon4.style.gridRow = "4";
	renglon4.style.gridColumn = "2 / 8";
	renglon4.style.margin = "auto"
	imagen4.style.width = "90%";
	imagen4.style.borderRadius = "15px"
	renglon4.appendChild(texto4);
	renglon4.appendChild(imagen4);
	padre.appendChild(renglon4);

	renglon5.style.display = "flex";	
	renglon5.style.flexDirection = "column";
	renglon5.style.gap = "20px";	
	renglon5.style.gridRow = "5";
	renglon5.style.gridColumn = "2 / 8";
	renglon5.style.margin = "auto"
	imagen5.style.width = "90%";
	imagen5.style.borderRadius = "15px"
	renglon5.appendChild(texto5);
	renglon5.appendChild(imagen5);
	padre.appendChild(renglon5);

	renglon6.style.display = "flex";	
	renglon6.style.flexDirection = "column";
	renglon6.style.gap = "20px";	
	renglon6.style.gridRow = "6";
	renglon6.style.gridColumn = "2 / 8";
	renglon6.style.margin = "auto"
	imagen6.style.width = "90%";
	imagen6.style.borderRadius = "15px";
	texto6.style.justifyContent = "left";
	renglon6.appendChild(texto6);
	renglon6.appendChild(imagen6);
	padre.appendChild(renglon6);
}

window.addEventListener("resize", () => {
	
	if(window.innerWidth < 1024) {
	renglon1.style.display = "flex";
	renglon1.style.flexDirection = "column";
	renglon1.style.gap = "20px";	
	renglon1.style.gridRow = "1";
	renglon1.style.gridColumn = "2 / 8";
	imagen1.style.width = "90%";
	imagen1.style.borderRadius = "15px"
	renglon1.appendChild(texto1);
	renglon1.appendChild(imagen1);
	renglon1.style.margin = "auto"
	padre.appendChild(renglon1);
	
	renglon2.style.display = "flex";
	renglon2.style.gap = "20px";	
	renglon2.style.flexDirection = "column";
	renglon2.style.gridRow = "2";
	renglon2.style.gridColumn = "2 / 8";
	renglon2.style.margin = "auto"
	imagen2.style.width = "90%";
	imagen2.style.borderRadius = "15px"
	renglon2.appendChild(texto2);
	renglon2.appendChild(imagen2);
	padre.appendChild(renglon2);

	renglon3.style.display = "flex";	
	renglon3.style.flexDirection = "column";
	renglon3.style.gap = "20px";	
	renglon3.style.gridRow = "3";
	renglon3.style.gridColumn = "2 / 8";
	renglon3.style.margin = "auto"
	imagen3.style.width = "90%";
	imagen3.style.borderRadius = "15px"
	renglon3.appendChild(texto3);
	renglon3.appendChild(imagen3);
	padre.appendChild(renglon3);

	renglon4.style.display = "flex";	
	renglon4.style.flexDirection = "column";
	renglon4.style.gap = "20px";	
	renglon4.style.gridRow = "4";
	renglon4.style.gridColumn = "2 / 8";
	renglon4.style.margin = "auto"
	imagen4.style.width = "90%";
	imagen4.style.borderRadius = "15px"
	renglon4.appendChild(texto4);
	renglon4.appendChild(imagen4);
	padre.appendChild(renglon4);

	renglon5.style.display = "flex";	
	renglon5.style.flexDirection = "column";
	renglon5.style.gap = "20px";	
	renglon5.style.gridRow = "5";
	renglon5.style.gridColumn = "2 / 8";
	renglon5.style.margin = "auto"
	imagen5.style.width = "90%";
	imagen5.style.borderRadius = "15px"
	renglon5.appendChild(texto5);
	renglon5.appendChild(imagen5);
	padre.appendChild(renglon5);

	renglon6.style.display = "flex";	
	renglon6.style.flexDirection = "column";
	renglon6.style.gap = "20px";	
	renglon6.style.gridRow = "6";
	renglon6.style.gridColumn = "2 / 8";
	renglon6.style.margin = "auto"
	imagen6.style.width = "90%";
	imagen6.style.borderRadius = "15px";
	texto6.style.justifyContent = "left";
	renglon6.appendChild(texto6);
	renglon6.appendChild(imagen6);
	padre.appendChild(renglon6);
}
	
})
