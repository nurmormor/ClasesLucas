"use strict"

function numeros () {

let numero = Number(prompt("dime un numero"));

divResultado.innerHTML += "<p> el doble del número es: " + numero*2 + "</p>" + "<br>";

divResultado.innerHTML += "<p> el triple del número es: " + numero*3 + "</p>" + "<br>";

divResultado.innerHTML += "<p> el cuadrado del número es: " + numero+numero + "</p>" + "<br>";

divResultado.innerHTML += "<p> la mitad del número es: " + numero/2 + "</p>" + "<br>";

}

numeros ();

divResultado=document.getElementById("divResultado");