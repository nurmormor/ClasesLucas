"use strict"

function notaMedia () {
    let nota1 = Number(prompt("dime la primera nota"));
    let nota2 = Number(prompt("dime la segunda nota"));
    let nota3 = Number(prompt("dime la tercera nota"));

    let notaMedia = (nota1+nota2+nota3)/3;

    alert("la nota media es: " + notaMedia);
    console.log("la nota media es: " + notaMedia);
    divResultado.innerHTML += `<p>  ${notaMedia } </p>`;
}

notaMedia();
 divResultado = document.getElementById("divResultado");