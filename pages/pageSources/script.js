const Links = [
	// http://www.rollerenligne.com/articles-473-le-roller-histoire-de-1760-a-nos-jours.html
	[
		"1formatik",
		"https://www.1formatik.com/",
		"https://www.1formatik.com/4902/comment-creer-un-lien-en-javascript"
	],
	[
		"developer",
		"https://developer.mozilla.org/",
		"https://developer.mozilla.org/fr/docs/Web/API"
	],
	[
		"w3docs",
		"https://fr.w3docs.com/",
		"https://fr.w3docs.com/snippets/html/comment-creer-un-bouton-html-agissant-comme-un-lien.html"
	],
	[
		"w3bai",
		"http://www.w3bai.com/",
		"http://www.w3bai.com/fr/css/css3_buttons.html"
	],
	[
		"w3bai",
		"http://www.w3bai.com/",
		"http://www.w3bai.com/fr/jsref/jsref_abs.html"
	],
	[
		"larousse",
		"https://www.larousse.fr/",
		"https://www.larousse.fr/dictionnaires/francais/roller/69738"
	],
	[
		"dictionnaire",
		"https://dictionnaire.lerobert.com/",
		"https://dictionnaire.lerobert.com/definition/roller"
	],
	[
		"wikipedia",
		"https://fr.wikipedia.org/",
		"https://fr.wikipedia.org/wiki/Patinage_%C3%A0_roulettes"
	],
	[
		"coolriders",
		"https://www.coolriders.org/",
		"https://www.coolriders.org/choisir-ses-rollers/"
	],
	[
		"htmlcolorcodes",
		"https://htmlcolorcodes.com/",
		"https://htmlcolorcodes.com/fr/"
	],
	[
		"forum",
		"https://forum.zebulon.fr/",
		"https://forum.zebulon.fr/topic/187307-r%C3%A9solu-rassembler-plusieurs-pages-html-en-une-seule/"
	],
	[
		"cascade",
		"https://la-cascade.io/",
		"https://la-cascade.io/cacher-des-elements-avec-css/"
	],
	[
		"w3schools",
		"https://www.w3schools.com/",
		"https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp"
	],
	[
		"colbert-innovation",
		"https://www.colbert-innovation.eu/",
		"https://www.colbert-innovation.eu/cahier-histoire/qui-a-invente-le-roulement-a-billes/"
	]
].sort();
const MyLinks = [
	[
	"index",
	"./index.html"
	]
];

window.addEventListener("load", function () {
	for (i in MyLinks) {
		let a = document.createElement('a');
		let li = document.createElement('li');
		let lien = document.createTextNode(MyLinks[i][0]);
		a.appendChild(lien);
		a.href = `../../${MyLinks[i][1]}`;
		li.appendChild(a);
		document.getElementById("UlDeMesSources").appendChild(li);
	}
	for (i in Links) {
	 	let a = document.createElement('a');
		let li = document.createElement('li');
		let lien = document.createTextNode(Links[i][1]);
		a.appendChild(lien);
		a.href = Links[i][2];
		li.appendChild(a);
		document.getElementById("UlDesSources").appendChild(li);
	}
	for (var i = (Math.abs(Links.length - MyLinks.length)); i > 0; i--) {
		if(Links.length > MyLinks.length) {
			document.getElementById("ClasseDeMesSources").append(document.createElement("br"));
		} else {
			document.getElementById("ClasseDesSources").append(document.createElement("br"));
		}
		document.getElementById("page").append(document.createElement("br"));
	}
	console.log("Page charg\351e.");
});

//&bull; <a href=""></a>