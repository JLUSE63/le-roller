(function () {
	//création des sources

	function createSources() {
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
		for (i in Links) {
			let a = document.createElement('a');
		    let li = document.createElement('li');
		    let lien = document.createTextNode(Links[i][1]);
		    a.appendChild(lien);
		    a.href = Links[i][2];
		    li.appendChild(a);
		    document.getElementById("NosSources").appendChild(li);
	    };
		
		lis = document.querySelectorAll('.tabs li a');
		for (let i = 0; i < lis.length; i++) {
			let a = document.createElement('a');
			let li = document.createElement('li');
			a.appendChild(document.createTextNode(lis[i].innerHTML));
			a.href = lis[i].href;
			li.appendChild(a);
			document.getElementById("NosPages").appendChild(li);
		};
	}; createSources();

    //Detection id dans l'url

    function hashChange() {
        try {
            if(window.location.hash) {
                document.querySelector('.tab-content.active').classList.remove('active');
                document.querySelector(window.location.hash).classList.add('active');
                document.querySelector('.tabs .active').classList.remove('active');
                document.querySelector(".tabs a[href=\'" + window.location.hash + "\']").parentNode.classList.add('active');
                console.log('- L\'id ' + window.location.hash + " a été affecté.");
            } else {
                document.querySelector('.default-link').classList.add('active');
                console.log('- Pas de window.location.hash existant: affectation automatique à accueil.');
            };
        } catch(error) {
            document.querySelector('.default-link').classList.add('active');
            console.log('- L\'ID présente dans le window.location.hash n\'existe pas');
        };
    }; hashChange();

    // Event Click

    function ongletClick(element) {
        element.addEventListener('click', function (e) {
            var nodesUl = element.parentNode.childNodes;
            for (let i = 0; i < nodesUl.length; i++) {
                if (nodesUl[i].nodeName != "#text") {
                    var hrefEnfant = nodesUl[i].childNodes[0].attributes.href.value;
                    if (hrefEnfant == element.childNodes[0].attributes.href.value) {
                        document.querySelector('.tab-content.active').classList.remove('active');
                        document.querySelector(hrefEnfant).classList.add('active');
                        document.querySelector('.tabs .active').classList.remove('active');
                        document.querySelector(".tabs a[href=\'" + hrefEnfant + "\']").parentNode.classList.add('active');
                        console.log('- Changement d\'onglet effectué pour ' + hrefEnfant + '.');
                    };
                };
            };
        });
    };

    // Boucle all li

    lis = document.querySelectorAll('.tabs li');
    for (let i = 0; i < lis.length; i++) {
        ongletClick(lis[i]);
        window.addEventListener('hashchange', hashChange);
    };
})();
if(document.location.href.includes("mode=light")) {
	document.getElementById("fichierCSS").href = "./media/styleWhite.css";
	document.getElementById("darkmode").value = "Darkmode";
	document.getElementById("darkmode").title = "Appuie pour mettre en mode sombre !";
	console.log("- La page est en clair.");
} else if(document.location.href.includes("mode=dark")) {
	document.getElementById("fichierCSS").href = "./media/styleBlack.css";
		document.getElementById("darkmode").value = "Lightmode";
		document.getElementById("darkmode").title = "Appuie pour mettre en mode clair !";
		console.log("- La page est en sombre.");
} else {
	document.getElementById("fichierCSS").href = "./media/styleWhite.css";
	document.location.href = `${window.location.href}?mode=light`;
	document.getElementById("darkmode").value = "Darkmode";
	document.getElementById("darkmode").title = "Appuie pour mettre en mode sombre !";
	console.log("- La page est en clair.");
};
console.log("-- Page chargée.");

// Mode Sombre

function jourNuit() {
	inputBoutton = document.getElementById("darkmode");
	lienCSS = document.getElementById("fichierCSS");
	if(lienCSS.href.includes("styleWhite")) {
		document.location.href = document.location.href.replace("mode=light", "mode=dark");
		console.log("- La page est en sombre.");
		document.getElementById("darkmode").title = "Appuie pour mettre en mode clair !";
		alert("- Cette page va devenir en sombre.");
	} else {
		document.location.href = document.location.href.replace("mode=dark", "mode=light");
		console.log("- La page est en clair.");
		document.getElementById("darkmode").title = "Appuie pour mettre en mode sombre !";
		alert("- Cette page va devenir en clair.");
	}
};