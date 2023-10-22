"use strict"

/////////////////
//functions
/////////////////

function numeros() {


    let numero = Number(prompt("introduce un numero"));
    let suma =0;
    while (numero !== 0) {
        suma+=numero;
        numero = Number(prompt("introduce un numero"));
        
    }

    let resultado=document.getElementById("resultado");
    resultado.innerHTML="<p> la suma de todos los numeros es: " + suma + "</p>";


}



/////////////
//main
/////////////

numeros();