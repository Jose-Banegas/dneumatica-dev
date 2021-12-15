// get

const padre = document.getElementById("scrollPadre");

// padres de cada texto e img

const padreBox1 = document.getElementById("padreBox1")
const padreBox2 = document.getElementById("padreBox2")
const padreBox3 = document.getElementById("padreBox3")
const padreBox4 = document.getElementById("padreBox4")
const padreBox5 = document.getElementById("padreBox5")
const padreBox6 = document.getElementById("padreBox6")

const padreImg1 = document.getElementById("padreImg1")
const padreImg2 = document.getElementById("padreImg2")
const padreImg3 = document.getElementById("padreImg3")
const padreImg4 = document.getElementById("padreImg4")
const padreImg5 = document.getElementById("padreImg5")
const padreImg6 = document.getElementById("padreImg6")



// texto e img

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

// nuevas rows

const renglon1 = document.createElement("div");
const renglon2 = document.createElement("div");
const renglon3 = document.createElement("div");
const renglon4 = document.createElement("div");
const renglon5 = document.createElement("div");
const renglon6 = document.createElement("div");

function modoCelular(renglon, texto, imagen, numRow) {
	renglon.style.display = "flex";
	renglon.style.flexDirection = "column";
	renglon.style.gap = "20px";	
	renglon.style.gridRow = numRow;
	renglon.style.gridColumn = "2 / 8";
	imagen.style.width = "90%";
	imagen.style.borderRadius = "15px"
	renglon.appendChild(texto);
	renglon.appendChild(imagen);
	renglon.style.margin = "auto"
	padre.appendChild(renglon);

}



if(window.innerWidth < 1024) {

	modoCelular(renglon1, texto1, imagen1, 1);
	modoCelular(renglon2, texto2, imagen2, 2);
	modoCelular(renglon3, texto3, imagen3, 3);
	modoCelular(renglon4, texto4, imagen4, 4);
	modoCelular(renglon5, texto5, imagen5, 5);
	modoCelular(renglon6, texto6, imagen6, 6);
}

window.addEventListener("resize", () => {
	
	if(window.innerWidth <= 1023) {
		modoCelular(renglon1, texto1, imagen1, 1);
		modoCelular(renglon2, texto2, imagen2, 2);
		modoCelular(renglon3, texto3, imagen3, 3);
		modoCelular(renglon4, texto4, imagen4, 4);
		modoCelular(renglon5, texto5, imagen5, 5);
		modoCelular(renglon6, texto6, imagen6, 6);

	}

	if (window.innerWidth >= 1024) {
		padreBox1.appendChild(texto1)
		padreBox2.appendChild(texto2)
		padreBox3.appendChild(texto3)
		padreBox4.appendChild(texto4)
		padreBox5.appendChild(texto5)
		padreBox6.appendChild(texto6)
		padreImg1.appendChild(imagen1)
		padreImg2.appendChild(imagen2)
		padreImg3.appendChild(imagen3)
		padreImg4.appendChild(imagen4)
		padreImg5.appendChild(imagen5)
		padreImg6.appendChild(imagen6)
		renglon1.style.display = "none";	
		renglon2.style.display = "none";	
		renglon3.style.display = "none";	
		renglon4.style.display = "none";	
		renglon5.style.display = "none";	
		renglon6.style.display = "none";	


	}
	
})
