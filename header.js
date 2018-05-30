window.addEventListener("load", hentHeader);

async function hentHeader() {

	// Vi henter #header som findes i alle html filer og kalder den headerDOM
	let headerDOM = document.querySelector("#header");
	// Henter lokal header.html fil
	let headerHentes = await fetch("header.html");
	// Bruger .text() istedet for .json(). Du har en string af indeholdet af header.html
	let header = await headerHentes.text();
	// Du ligger header ind i innerHTML for elementet på din nuværende side.
	headerDOM.innerHTML = header;

}

function openNav() {
	document.getElementById("myNav").style.height = "100vh";
}

function closeNav() {
	document.getElementById("myNav").style.height = "0vh";
}
