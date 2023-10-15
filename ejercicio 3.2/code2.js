"use strict"

function radioCirculo () {
    let radio = prompt("dime el radio");
    let area = Math.PI * radio * radio;
    console.log (" el area de un circulo de radio: " + radio + "es" + area);
    divResultado.innerHTML += "<p>" +area+ "</p> <br>" ;
}

function areaTriangulo () {
    let base = prompt("dime la base");
    let altura = prompt("dime la altura");
    let area = (base * altura)/2;
    divResultado.innerHTML+="<p>" + area + "</p><br>";
}

areaTriangulo();
radioCirculo();
divResultado = document.getElementById("divResultado");
