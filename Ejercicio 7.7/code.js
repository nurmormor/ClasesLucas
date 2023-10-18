"use strict"

///////////////
//FUNCTIONS
//////////////

function btnCalcular(){

let num8=document.getElementById("bola").style.display="none";
let numAleatorio = Math.floor(Math.random()*4) + 1;

let respuesta;

if (numAleatorio ===1) {
    respuesta = "Lo que tú digas";
} else if (numAleatorio===2) {
    respuesta = "si ome";
} else if (numAleatorio===3) {
    respuesta= "don't see";
} else {
    respuesta="amore..........."
}



}


/////////////
//MAIN
/////////////
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", btnCalcular);
btnCalcular();