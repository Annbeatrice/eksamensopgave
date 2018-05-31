window.addEventListener("load", hentFooter);

async function hentFooter() {
	let footerHentes = await fetch("footer.html");
	let footer = await footerHentes.text();
	document.querySelector("#footer").innerHTML = footer;
	initMap();
}


function initMap() {
	//koordinater för kartans centrum
	let perbo = {
		lat: 55.672203,
		lng: 12.594810
	};
	//          let copenhagen = {lat: 55.706371 , lng: 12.539130};
	//här skriver man namn på ställe
	//opretter en karta
	let map = new google.maps.Map(document.querySelector('.map'), {
		//zoom level
		zoom: 14,
		//styr var min karta är centrerad
		center: perbo
	});
	let infowindow = new google.maps.InfoWindow({
		content: "Per Bo Keramik, Sankt Annæ Gade 33, 1416 København K"
	});
	//sätt in marker / kan heta vad som helst
	let marker = new google.maps.Marker({
		//position
		position: perbo,
		//vilket kort ska marker visas på
		//hänvisar till ikonen jag vill ha istället för googleplutten
		//            icon: "img/custom-marker.png",
		map: map
	});
	//infobox öppnas när man klickar på plutten
	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});
}
