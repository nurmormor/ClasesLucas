"use strict"

/////////////
//FUNCTIONS
/////////////

//////////////
//MAIN
/////////////

let arrPreguntas = [
	["¿Cuánto es 6x4?", "6 x 4 = 24"], 
	["¿De qué color es el caballo blanco de Santiago?", "Blanco"],
	["¿Qué significa harrowing en inglés?", "Angustioso, horroroso."],
];

let main = document.querySelector("main");


document.getElementById('btnResultado').addEventListener('click', calcularNotaFinal);