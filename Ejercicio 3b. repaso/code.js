"use strict"

let numero = document.getElementById("txtNumero");
let divResultado = document.getElementById("divResultado"); //PONER SIEMPRE LET
let btnCalcular = document.getElementById("btnCalcular");
btnCalcular = btnCalcular.addEventListener("click", function () {


    numero = Number(numero.value);
    unoydos(numero);

});

function unoydos(numero) {
    divResultado.innerHTML = "<ul>"

    for (let index = 1; index < numero; index++) {
        if (index % 2 !== 0) {
            divResultado.innerHTML += "<li> 1 </li>";
        } else {
            divResultado.innerHTML += "<li> 2 </li>";
        }

    }
    divResultado.innerHTML += "</ul>"

}