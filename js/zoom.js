/* El siguiente código sirve para que al hacer click sobre una de las imágenes 
se genere una especie de modal.

Para evitar conflictos, debe haber por cada imágen un thumbnail creo que se escribe, y
la imagen a mostrar una vez hecho click. Los Thumb ya están agregados en el documento 
HTML
*/
const thumb1 = document.getElementById("img1");
const thumb2 = document.getElementById("img2");
const thumb3 = document.getElementById("img3");
const thumb4 = document.getElementById("img4");

/* Las imágenes que van en el modal van acá */

const img1 = document.createElement("img");
img1.src = "../img/productos/1.png";
const img2 = document.createElement("img");
img2.src = "../img/productos/2.png";
const img3 = document.createElement("img");
img3.src = "../img/productos/3.png";
const img4 = document.createElement("img");
img4.src = "../img/productos/4.png";

/* Modal */
const body = document.getElementById("body");
const screen = document.createElement("div");

screen.style.position = "fixed";
screen.style.top = "0";
screen.style.left = "0";
screen.style.backgroundColor = "rgba(0, 0, 0, .9)";
screen.style.height = "100vh";
screen.style.width = "100vw";
screen.style.display = "flex";
screen.style.justifyContent = "center";
screen.style.alignItems = "center";

screen.onclick = () => {
	body.removeChild(screen);
	screen.removeChild(screen.lastChild);
}


function activarModal(imagen) {
	screen.appendChild(imagen);
	imagen.style.width = "45%";
	body.appendChild(screen)
}




thumb1.onclick = () => {
	if (window.innerWidth >= 1024) {
		activarModal(img1);
		
	}
}
thumb2.onclick = () => {
	if (window.innerWidth >= 1024) {

	activarModal(img2);


	}
}
thumb3.onclick = () => {
	if (window.innerWidth >= 1024) {
		activarModal(img3);
		
	}
}
thumb4.onclick = () => {
if (window.innerWidth >= 1024) {
	activarModal(img4);
}
}

