let receiver = document.querySelector("[data-receiver]");
let contact;
let template = document.querySelector("[data-template-contact]");
let template_clone = template.cloneNode(true).content;
document.addEventListener("DOMContentLoaded", getJson);
async function getJson(){
    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/kontakt/30");
    contact = await jsonObject.json();
    showContact();

}
function showContact(){
    console.log(contact);
    template_clone.querySelector("[data-opening-hours]").innerHTML = contact.acf.åbningstider;
    template_clone.querySelector("[data-number]").innerHTML = contact.acf.telefon;
    template_clone.querySelector("[data-cvr]").innerHTML = contact.acf.cvr;
    template_clone.querySelector("[data-address]").innerHTML = contact.acf.adresse;
    template_clone.querySelector("[data-email]").innerHTML = contact.acf.email;
    receiver.appendChild(template_clone);
}
