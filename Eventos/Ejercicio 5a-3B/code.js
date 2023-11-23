"use strict";

let divResultado = document.querySelector("#divResultado");

divResultado.addEventListener("click", caraTriste);
divResultado.addEventListener("contextmenu", caraFeliz);
divResultado.addEventListener("dblclick", caraMolesta);

function caraTriste(ev) {
    divResultado.innerHTML = "🙁";
}

function caraFeliz(ev) {
    ev.preventDefault();
    divResultado.innerHTML = "😀";

}

function caraMolesta(ev) {
    divResultado.innerHTML = "😒";
}