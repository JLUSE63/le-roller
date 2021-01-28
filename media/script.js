function page(id, name=undefined) {
	let element = new Array();
	let elements = document.getElementsByTagName("div");
	for(i in elements) {
		if(elements[i].id == id) {
			element.push(elements[i])
		}
	}
	if(name != undefined) {
		element.push(document.getElementsByName(name)[0])
	}
	for(i in elements) {
		if(elements[i].id)
		if(elements[i].id != "sommaire") {
			elements[i].style.display = "none";
		}
	}
	console.log(element)
	for(i in element) {
		element[i].style.display = "block"
	}
}

function jourNuit() {
	inputBoutton = document.getElementById("journuit");
	lienCSS = document.getElementById("fichierHTML");
	console.log(inputBoutton.style.backgroundColor)
	console.log(lienCSS.href)
	if(inputBoutton.style.backgroundColor == "rgb(51, 51, 51)") {
		inputBoutton.value = "Lightmode";
		inputBoutton.title = "Appuie pour mettre en mode clair !";
		inputBoutton.style.backgroundColor = "#D3D3D3";
		inputBoutton.style.color = "#333";
		lienCSS.href = "./media/styleBlack.css";
	} else {
		inputBoutton.title = "Appuie pour mettre en mode sombre !";
		inputBoutton.value = "Darkmode"
		inputBoutton.style.backgroundColor = "#333";
		inputBoutton.style.color = "#D3D3D3";
		lienCSS.href = "./media/styleWhite.css";
	}
}

window.addEventListener("load", function () {
	let elements = document.getElementsByTagName("div");
	for(i in elements) {
		if(elements[i].id) {
			elements[i].name = elements[i].id;
			if((elements[i].id != "sommaire") && (elements[i].id != "histoire")) {
				elements[i].style.display = "none";
			}
		}
	}
	console.log("Page charg\351e.");
});