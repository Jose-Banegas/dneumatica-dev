//TO DO: Control botones

/* Carousel */


/* DOM */
const carouselBase = document.getElementById("carousel-base");
const item1 = document.getElementById("carousel1");
const item2 = document.getElementById("carousel2");
const item3 = document.getElementById("carousel3");

const lugares = [item1, item2, item3]

const cambiar = (x) => {
		item1.style.display = "none";
		item2.style.display = "none";
		item3.style.display = "none";
		lugares[x].style.display = "block";

}


const flex = () => {
		item1.style.display = "block";
		item2.style.display = "block";
	item3.style.display = "block";


}

let intervalId;
const calesita = () => {
	if (window.innerWidth < 1024) {
		cambiar(0)
		let i = 1;

		 intervalId = setInterval( 
			function() {
				cambiar(i);
				i++;
				if(i == 3) {
					i = 0;
				}
			}, 3000)
	} else {
	
		flex();
	}
}



window.onload = function() {
	calesita();

}

window.addEventListener('resize', function() {
	clearInterval(intervalId)
	
	calesita();	
})
