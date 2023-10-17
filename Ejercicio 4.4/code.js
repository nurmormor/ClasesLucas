"use strict"

function bancoA (x) {

    let interes = (x*2.25)/100;

return interes;
}

function bancoB (x) {
    let interes =(x*1.75)/100;

    return interes;
}


let cantidad = document.getElementById("cantidad"); //esto sirve para que escriba en el div que le corresponde en el html
let bancoA = document.getElementById("bancoA");
let bancoB = document.getElementById("bancoB");
let inputCantidad = document.getElementById("inputCantidad");

btnCalcular.addEventListener ("click", function(){

    let cantidadValue = parseFloat(inputCantidad.value);

    let resultadoA= bancoA(cantidadValue);
    let resultadoB = bancoB(cantidadValue);

    bancoA.innerHTML += "la cantidad con el banco a sería: " + bancoA(resultadoA);
    bancoB.innerHTML+= "la cantidad con el banco a sería: " + bancoB(resultadoB);
});





