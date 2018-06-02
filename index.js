document.querySelectorAll(".infographic").forEach(inf => {
	inf.addEventListener("mouseover", hoverVideo);

});
function hoverVideo() {
	console.log("hej");
	this.querySelector('video').play();

}
document.querySelectorAll(".infographic").forEach(infEnd => {
	infEnd.addEventListener("mouseout", hideVideo);
})
function hideVideo() {
	console.log("slut");
	this.querySelector('video').pause();
	this.querySelector('video').currentTime = 0;

}
