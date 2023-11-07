"use strict" //PREGUNTAR LUCAS

//////////////
//FUNCTIONS
//////////////



function generarPrimitiva() {

    let primitiva = [];

    resultado.innerHTML="Su numero de primitiva es: "

   
    while (primitiva.length < 6) {
        let numPrim = Math.floor(Math.random() * 49) + 1;

        // Verifica si el número generado ya está en el array
        if (primitiva.includes(numPrim)) {
            
        } else{
            primitiva.push(numPrim);
        }
    }
   
primitiva.sort();

    for (let i = 0; i < 6; i++) {

        resultado.innerHTML+=primitiva[i]+" , ";
    }



}



//////////////
//MAIN
///////////////

let resultado = document.querySelector("#resultado");
generarPrimitiva();