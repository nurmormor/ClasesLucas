"use strict"

function impares() {

    let cont = 0;
    for (let index = 1; index < 2000; index++) {
        if (cont <= 20) {
            if (index % 2 == 0) {

            } else {
                divResultado.innerHTML += "Los 20 primeros números impares son: " + index + "<br>";
                cont++;
            }
        }



    }

}
impares();
divResultado = document.getElementById("divResultado");
