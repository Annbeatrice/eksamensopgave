//let url = new URL(window.location.href);
//let parameter = new URLSearchParams(url.search);
//let id = parameter.get("id");

let reciever = document.querySelector("[data-reciever]");

let single;

let template = document.querySelector("[data-template-webshop-single]");

let template_clone = template.cloneNode(true).content;

document.addEventListener("DOMContentLoaded", getJson);


async function getJson() {

    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/webshop/74");

    single = await jsonObject.json();

    showSingle();
}

function showSingle(){

    template_clone.querySelector("[data-item-title]").innerHTML = single.title.rendered;
    template_clone.querySelector("[data-item-image]").src = single.acf.product_image.url;
    template_clone.querySelector("[data-item-price]").innerHTML = single.acf.price + " kr";
    template_clone.querySelector("[data-item-description]").innerHTML = single.acf.product_description;
    console.log(single);

    reciever.appendChild(template_clone);

}
