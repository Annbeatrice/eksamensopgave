let receiver = document.querySelector("[data-receiver]");
let template = document.querySelector("[data-template-videogallery]");
let videoGallery;

document.addEventListener("DOMContentLoaded", getJson);

async function getJson() {
	console.log("get json");
	let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/youtube_video");


	videoGallery = await jsonObject.json();

	showVideoGallery();
}

function showVideoGallery() {
	console.log("show video");

	videoGallery.forEach(video => {
		let template_clone = template.cloneNode(true).content;

		template_clone.querySelector("[data-gallery-item-title]").innerHTML = video.title.rendered;

		template_clone.querySelector("[data-video-gallery]").src = video.acf.link;

		receiver.appendChild(template_clone);

	})
}
