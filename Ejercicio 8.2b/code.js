"use strict";

/////////
//FUNCTIONS

function divisores() {

    let resultado = document.getElementById("resultado");

    let numero = prompt("Escribe un número");

    if (numero !== null && numero !== "") { // Verifica que el prompt no esté vacío
        numero = Number(numero); // Intenta convertir la entrada a un número

        if (!isNaN(numero)) { // Verifica si la entrada es un número
            while (numero !== 0) {
                for (let i = 1; i <= numero; i++) {
                    if (numero % i === 0) {
                        resultado.innerHTML += "<p>Los divisores de " + numero + " son: " + i + "</p>";
                    }
                }
        
                numero = Number(prompt("Escribe otro número (o 0 para salir)"));
            }
        } else {
            alert("No introdujo un número válido.");
        }
    } else {
        alert("No introdujo ningún dato.");
    }
}

////////////
//MAIN
///////////

divisores();
