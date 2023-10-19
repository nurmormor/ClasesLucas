"use strict"

///////////////
//FUNCTIONS
//////////////

function calcular(){

document.getElementById("ocho").style.display="none";

let respuesta = document.getElementById("respuesta");

let numAleatorio = Math.floor(Math.random()*4) + 1;


if (numAleatorio ===1) {
    respuesta.innerHTML = "Lo que tú digas";
} else if (numAleatorio===2) {
    respuesta.innerHTML = "si ome";
} else if (numAleatorio===3) {
    respuesta.innerHTML= "don't see";
} else {
    respuesta.innerHTML="hija..........."
}


}


/////////////
//MAIN
/////////////

let boton = document.getElementById("btnCalcular");
boton.addEventListener("click", calcular);
