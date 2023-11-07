"use strict"

///////////
//FUNCTIONS
///////////

function añadir() {

    let nombre = document.getElementById("txtNombre").value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre antes de hacer clic en 'Añadir'.");
    } else {
        arrNombres.push(nombre);
        document.getElementById("txtNombre").value = ''; // Limpia el input después de agregar
    }


}

function eliminar() {

    let nombre = document.getElementById("txtNombre").value;

    let i = arrNombres.indexOf(nombre);
    if (i !== -1) {
        arrNombres.splice(i, 1);
    }


}


function mostrar() {

    let resultado = document.getElementById("divResultado");
    resultado.innerHTML = "";

    if (arrNombres.length < 1) {
        resultado.innerHTML = "No hay nada que mostrar";
    } else {
        arrNombres.sort();

        let listaOrdenada = '<ol>';

        for (let i = 0; i < arrNombres.length; i++) {
            listaOrdenada += '<li>' + arrNombres[i] + `</li>`;

        }

        listaOrdenada += '</ol>';

        resultado.innerHTML += listaOrdenada;

    }

}



////////////
//MAIN
///////////

let arrNombres = [];
let btnAñadir = document.getElementById("btnAñadir");
btnAñadir.addEventListener("click", añadir);
let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", mostrar);
let btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", eliminar);