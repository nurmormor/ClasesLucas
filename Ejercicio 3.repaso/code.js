"use strict"

let numero = document.getElementById("txtNumero");
let divResultado = document.getElementById("divResultado"); //PONER SIEMPRE LET
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular = btnCalcular.addEventListener("click", function () {


    numero = Number(numero.value);
    unoydos(numero);

});

function unoydos(numero) {
    divResultado.innerHTML = "";

    for (let index = 1; index < numero; index++) {
        if (index % 2 !== 0) {
            divResultado.innerHTML += "<p> 1 </p>";
        } else {
            divResultado.innerHTML += "<p> 2 </p>";
        }

    }

}
