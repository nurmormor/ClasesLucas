"use strict"

////////////
//FUNCIONES
/////////////

function asterisco() {
    let resultado = document.getElementById("resultado");
    let numero = Number(prompt("introduce un numero"));

    for (let i = 1; i <= numero; i++) {
        // Inicializa una cadena vacía para almacenar la fila actual
        let fila = '';

        // Bucle interno para las columnas
        for (let j = 1; j <= i; j++) {
            fila += '*';
        }


        resultado.innerHTML = "<p>" + file + "</p>"; //con el console si funciona, con esto, no

    }

}



///////////
//MAIN
//////////

asterisco();