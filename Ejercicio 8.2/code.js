"use strict"


/////////
//FUNCTIONS

function divisores() {

    let resultado=document.getElementById("resultado");

    let numero = Number(prompt("escribe un numero"));

    while (numero !== 0) {

        for (let i = 1; i <= numero; i++) {

            if (numero % i === 0) {
                resultado.innerHTML+="<p> los divisores de " + numero + " son: " + i;
            }
        }

        numero = Number(prompt("Escribe otro número (o 0 para salir)"));

    }
}










////////////
//MAIN
///////////

divisores();