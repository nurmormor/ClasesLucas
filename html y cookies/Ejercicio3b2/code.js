"use strict";

/////////////////////
// FUNCTIONS
/////////////////////

function fichar() {
    let fecha = new Date();
	let entradaSalida = document.querySelectorAll("[name=entradasalida]"); //cogemos ambos campos pa asegurarnos cuál está seleccionado por el usuario

    for (let radio of entradaSalida) {
        let opcion = radio.value;
        if (opcion=="entrada"){
            arrayEntradas.push(fecha);
            localStorage.fichajes.setItem("entradas", arrayEntradas);
        } else {
            arraySalidas.push(fecha);
        }
        
    }



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
let arrayEntradas = [];
let arraySalidas = [];

