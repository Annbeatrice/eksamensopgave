let url = new URL(window.location.href);
let parameter = new URLSearchParams(url.search);
let id = parameter.get("id");
let receiver = document.querySelector("[data-receiver]");
let single;
let template = document.querySelector("[data-template-webshop-single]");
let template_clone = template.cloneNode(true).content;
document.addEventListener("DOMContentLoaded", getJson);
async function getJson() {
    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/webshop/" + id);
    single = await jsonObject.json();
    showSingle();
}
function showSingle(){
    template_clone.querySelector("[data-item-title]").innerHTML = single.title.rendered;
    template_clone.querySelector("[data-item-image]").src = single.acf.product_image.url;
    template_clone.querySelector("[data-item-price]").innerHTML = single.acf.price + " kr";
    template_clone.querySelector("[data-item-description]").innerHTML = single.acf.product_description;
    console.log(single);
    receiver.appendChild(template_clone);
    activateModal();
}
let modal;
function activateModal(){
    modal = document.getElementById("myModal");

    let arrayOfmodalBtns = document.querySelectorAll(".modalBtn");

    let closeBtn = document.getElementsByClassName("closeBtn")[0];

    arrayOfmodalBtns.forEach( modalBtn => {
        modalBtn.addEventListener("click", openModal);
    })

    closeBtn.addEventListener("click", closeModal);
}


function openModal(){

    modal.style.display = "block";

}

function closeModal(){

    modal.style.display = "none";

}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
