let videoReceiver = document.querySelector("[data-video-receiver]");
let videoTemplate = document.querySelector("[data-template-video]");
let videos = [];
let videosnye;
let receiver = document.querySelector("[data-receiver]");
let om;
let template = document.querySelector("[data-template-om]");
let template_clone = template.cloneNode(true).content;
document.addEventListener("DOMContentLoaded", init);

function init() {
    getJson();
    videoJson();

}
async function getJson() {
    let jsonObject = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/om/17");
    om = await jsonObject.json();
    showOm();

}
function showOm() {
    let img = template_clone.querySelector("[data-image-om]");
    console.log(om.acf)
    template_clone.querySelector("[data-text-om]").innerHTML = om.acf.about;
    img.src = om.acf.image;
    template_clone.querySelector("[data-about-clients]").innerHTML = om.acf.about;
    template_clone.querySelector("[data-engrolist-clients]").innerHTML = om.acf.engro_list;
    template_clone.querySelector("[data-restaurantlist-clients]").innerHTML = om.acf.restaurent_list;
    receiver.appendChild(template_clone);
}
async function videoJson() {
    let jsonElement = await fetch("http://josefinerasch.dk/kea/08-eksamensprojekt/wordpress/wp-json/wp/v2/youtube_video");

    videos = await jsonElement.json();
    showVideos();

}
function showVideos() {
    videos.forEach((v) => {
        if (v.acf.kategori == "omvideoer") {
            let video_clone = videoTemplate.cloneNode(true).content;
            video_clone.querySelector("[data-om-video]").src = v.acf.link;
            video_clone.querySelector("[data-om-title]").innerHTML = v.title.rendered;

            videoReceiver.appendChild(video_clone);
        }
    });
}
