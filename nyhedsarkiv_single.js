let url = new URL(window.location.href);
let parameter = new URLSearchParams(url.search);
let id = parameter.get("id");
let receiver = document.querySelector("[data-receiver]");
let single;
let template = document.querySelector("[data-template-nyhed]");
let template_clone = template.cloneNode(true).content;
document.addEventListener("DOMContentLoaded", getJson);
async function getJson() {
    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/nyhedsgalleri/" + id);
    single = await jsonObject.json();
    showSingle();
}
function showSingle(){
    template_clone.querySelector("[data-item-title]").innerHTML = single.title.rendered;
    template_clone.querySelector("[data-item-image]").src = single.acf.newsletter_mockup.url;
    console.log(single);
    receiver.appendChild(template_clone);
}
