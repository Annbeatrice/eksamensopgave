////////////////////nyhedsbrev
document.querySelector(".single_btn").addEventListener("click", showNyhedsbrev);
document.querySelector(".popup").style.pointerEvents = "none";


function showNyhedsbrev() {
	console.log("vis");
	document.querySelector("[data-tilmeldingModtaget]").style.pointerEvents = "none";
	document.querySelector(".popup").style.pointerEvents = "auto";
	document.querySelector(".popup").style.opacity = "1";
	document.querySelector("#submit_nyhed").style.top = "355px";


	document.querySelector(".single_btn").addEventListener("click", hideNyhedsbrev);
}
document.querySelector(".single_btn_popup").addEventListener("click", hideNyhedsbrev);

function hideNyhedsbrev() {
	console.log("luk");
	document.querySelector(".popup").style.pointerEvents = "none";
	document.querySelector(".popup").style.opacity = "0";

	document.querySelector(".single_btn_popup").addEventListener("click", resetAll);
}

document.querySelector("[data-submitNyhed]").addEventListener("click", showTilmeldtNyhedsbrev);

function showTilmeldtNyhedsbrev() {
	console.log("submit");
	document.querySelector(".popup_content").style.opacity = "0";

	document.querySelector("[data-tilmeldingModtaget]").style.opacity = "1";
	document.querySelector("[data-tilmeldingModtaget]").style.pointerEvents = "auto";


	setTimeout(slut, 8000);
}

function slut() {
	console.log("slut");
	document.querySelector("[data-tilmeldingModtaget]").style.opacity = "0";
	document.querySelector("[data-tilmeldingModtaget]").style.pointerEvents = "none";
	document.querySelector(".popup").style.opacity = "0";

	resetAll();
}

///////////////////////////nyhedsbrev slut

function resetAll() {
	location.reload();
} //denne funktion fungere ligesom din reload knap i browseren
/*nulstil SLUT*/
