document.querySelector(".dot1").addEventListener("click", () => {
    currentSlide(1)
});
document.querySelector(".dot2").addEventListener("click", () => {
    currentSlide(2)
});
document.querySelector(".dot3").addEventListener("click", () => {
    currentSlide(3)
});

document.querySelector(".prev").addEventListener("click", () => {
    plusSlides(-1)
});
document.querySelector(".next").addEventListener("click", () => {
    plusSlides(1)
});

setInterval( () => {
    plusSlides(1);
} , 3000) ;

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";

}


let products;

let receiver = document.querySelector("[data-receiver]");

document.addEventListener("DOMContentLoaded", getJson);

let webshop_item = document.querySelector("[data-template-webshop]");

async function getJson() {

    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/webshop?per_page=100");

    products = await jsonObject.json();
    showProducts();


}

function showProducts() {

    products.forEach(product => {

        let template_clone = webshop_item.cloneNode(true).content;

        template_clone.querySelector("[data-item-link]").href = "/webshop_single.html?id=" + product.id;
        template_clone.querySelector("[data-item-title]").textContent = product.title.rendered;

        template_clone.querySelector("[data-item-price]").innerHTML = product.acf.price + " kr";

        template_clone.querySelector("[data-item-image]").src = product.acf.product_image.sizes.medium;

        template_clone.querySelector("[data-item-container]").classList.add(product.acf.kategorier[0]);

        receiver.appendChild(template_clone);

    })
    activateModal();
    filter();

}

function filter(){

    let buttons = document.querySelectorAll(".button");

    let item_alle = document.querySelectorAll(".webshop_item");
    let item_krus = document.querySelectorAll(".krus_og_kopper");
    let item_vaser = document.querySelectorAll(".vaser");
    let item_tekander = document.querySelectorAll(".tekander");
    let item_kander = document.querySelectorAll(".kander");
    let item_skaale = document.querySelectorAll(".skaale");
    let item_tallerkener = document.querySelectorAll(".tallerkener");

    buttons.forEach( button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            openDropdown();

            let buttonName = event.target.dataset.button;


            item_alle.forEach( item => { item.style.display = "none"; })

            if ( buttonName === "webshop_item" ){
                item_alle.forEach( item => { item.style.display = "grid"; })
            }
            if ( buttonName === "krus_og_kopper" ){
                item_krus.forEach( item => { item.style.display = "grid"; })
            }
            if ( buttonName === "vaser" ){
                item_vaser.forEach( item => { item.style.display = "grid"; })
            }
            if ( buttonName === "tekander" ){
                item_tekander.forEach( item => { item.style.display = "grid"; })
            }
            if ( buttonName === "kander" ){
                item_kander.forEach( item => { item.style.display = "grid"; })
            }
            if ( buttonName === "skaale" ){
                item_skaale.forEach( item => { item.style.display = "grid"; })
            }
            if ( buttonName === "tallerkener" ){
                item_tallerkener.forEach( item => { item.style.display = "grid"; })
            }

        })

    })
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
let dropdownSection = document.querySelector(".section_button");
let dropdownActive = false;
let dropdownBtn = document.querySelector("[data-dropbtn-webshop]");
dropdownBtn.addEventListener("click", openDropdown);


function openDropdown(){

    if (dropdownActive){

        dropdownActive = false;
        dropdownSection.classList.add("dropdown-hidden");
    }else{
        dropdownActive = true;
        dropdownSection.classList.remove("dropdown-hidden");
    }


}
