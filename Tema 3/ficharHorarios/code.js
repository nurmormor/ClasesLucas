"use strict";

/////////////////////
// FUNCTIONS
/////////////////////

function fichar() {
	let entrada = document.getElementById("entrada").value;
}

function mostrarFichajes() {
	alert("Mostrar fichajes");
}

function resetearFichajes() {
	alert("Resetear");
}

/////////////////////
// MAIN
/////////////////////

//1.- Add event Listeners
document.querySelector("#btnFichar").addEventListener("click", fichar);
document.querySelector("#btnMostrar").addEventListener("click", mostrarFichajes);
document.querySelector("#btnResetear").addEventListener("click", resetearFichajes);
