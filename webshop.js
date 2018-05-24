/* jag vill hämta json fil från wordpress */
/* här har jag desinierat namnet som functionen får där nere?*/
let products;

let reciever = document.querySelector("[data-reciever]");

document.addEventListener("DOMContentLoaded", getJson);

let webshop_item = document.querySelector("[data-template-webshop]");

async function getJson() {

    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/webshop");

    products = await jsonObject.json();
    showProducts();


}

/* jag vill fånga alla de olika produkterna

for each product klone the template*/

function showProducts() {

    products.forEach(product => {

        let template_clone = webshop_item.cloneNode(true).content;

        template_clone.querySelector("[data-item-title]").textContent = product.title.rendered;
        template_clone.querySelector("[data-item-image]").src = product.acf.product_image.url;
        template_clone.querySelector("[data-item-price]").innerHTML = product.acf.price;


        reciever.appendChild(template_clone);

    })

}
