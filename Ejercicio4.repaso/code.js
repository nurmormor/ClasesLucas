"use strict"

let divResultado = document.getElementById("divResultado");

calcular();

function calcular() {

    let acc=0;
    let suma=0;
    let cont =0;
    let mayor =0;
    let menor = 100000000000;
    let bool = false;
    let numero;
    
    do {
        numero = prompt("dime un numero");

        Number(numero);

        if (numero < 0) {

        } else if (numero>0){
            acc+=numero;

            if (mayor<numero) {
                mayor = numero;
            }
            if (menor>numero) {
                menor=numero;
            }
        } else if (numero===0) {
            bool = true;
        }
        contador ++;

    } while (bool===false);

     let media = acc/cont;

     divResultado.innerHTML += "<p>" + cont + "</p>";
     divResultado.innerHTML += "<p>" + acc + "</p>";
     divResultado.innerHTML += "<p>" + media + "</p>";
     divResultado.innerHTML += "<p>" + mayor + "</p>";
     divResultado.innerHTML += "<p>" + menor + "</p>";
}