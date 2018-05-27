/* definera mottagaren*/

let receiver = document.querySelector("[data-receiver]");


let om;

/* definera templaten */

let template = document.querySelector("[data-template-om]");

/* klona template */

let template_clone = template.cloneNode(true).content;

/* dokument lägg till denna lyssnare: när html laddats färdigt hämta jsonfunktionen getJson */

document.addEventListener("DOMContentLoaded", getJson);

async function getJson(){
    /* hämta den här json filen */

    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/om/17");

    /* gör om den länken till ett json objekt */

    om = await jsonObject.json();

    /* När du gjort det, kör då den här funktionen: */

    showOm();

}

/* den här funktionen ska hämta innehåll från json */

function showOm(){
    let img = template_clone.querySelector("[data-image-om]");
    console.log(om.acf)


    template_clone.querySelector("[data-text-om]").innerHTML = om.acf.about;
    img.src = om.acf.image;
    template_clone.querySelector("[data-about-clients]").innerHTML = om.acf.about;
    template_clone.querySelector("[data-engrolist-clients]").innerHTML = om.acf.engro_list;
    template_clone.querySelector("[data-restaurantlist-clients]").innerHTML = om.acf.engro_list;

    receiver.appendChild(template_clone);


}
