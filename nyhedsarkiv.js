let receiver = document.querySelector("[data-receiver]");
let template = document.querySelector("[data-template-nyhedsarkiv]");

let nyhedsarkiv;

document.addEventListener("DOMContentLoaded", getJson);

async function getJson(){

    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/nyhedsgalleri?per_page=100");


    nyhedsarkiv = await jsonObject.json();

    showNyhedsarkiv();

}

function showNyhedsarkiv(){

    nyhedsarkiv.forEach(nyhed =>{

        let template_clone = template.cloneNode(true).content;

        template_clone.querySelector("[data-news-title]").innerHTML = nyhed.title.rendered;
        template_clone.querySelector("[data-text-box]").innerHTML = nyhed.acf.newsletter_date;
        template_clone.querySelector("[data-news-image]").src = nyhed.acf.newsletter_img.sizes.medium;

        receiver.appendChild(template_clone);

    })


}
