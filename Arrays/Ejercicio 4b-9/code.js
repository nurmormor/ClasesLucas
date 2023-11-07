"use strict"

///////////
//FUNCTIONS
///////////

function ingresarNombres(){

    let palabra = document.getElementById("txtPalabras").value;

    arrayPalabras.push(palabra);

   resultado.innerHTML =  `<p> ${arrayPalabras[0]}</p>`;

    resultado.innerHTML += `<p> ${arrayPalabras[arrayPalabras.length-1]}</p>`; //si yo pusiera arrayPalabras.lenght-1 me saldría un número (la ultima posicion-1)

    resultado.innerHTML += `<p> ${arrayPalabras.length}</p>`;

    resultado.innerHTML += `<p> ${arrayPalabras.toSorted()}</p>`; //como toSorted no cambia el array original, si quiero imprimirlo tengo que imprimirlo aquí mismo 

}

///////////
//MAIN
///////////

let btnIngresar = document.getElementById("btnIngresar");
btnIngresar.addEventListener("click", ingresarNombres);
let arrayPalabras =  [];
let resultado = document.getElementById("resultado");
