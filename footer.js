window.addEventListener("load", hentFooter);

async function hentFooter() {
	let footerHentes = await fetch("footer.html");
	let footer = await footerHentes.text();
	document.querySelector("#footer").innerHTML = footer;
	initMap();
}
function initMap() {
	let perbo = {
		lat: 55.672203,
		lng: 12.594810
	};
	let map = new google.maps.Map(document.querySelector('.map'), {
		zoom: 14,
		center: perbo
	});
	let infowindow = new google.maps.InfoWindow({
		content: "Per Bo Keramik, Sankt Annæ Gade 33, 1416 København K"
	});
	let marker = new google.maps.Marker({
		position: perbo,
		map: map
	});
	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});
}
