"use strict" 

let numero = Math.floor(Math.random() * 100000);



let numeroSeparado = numero.toString(); //pasamos el numero a string
let arrayCifras = numeroSeparado.split("");//hacemos un array que cada posicion sera cada numero

tablaNumeros(arrayCifras);

//////////
//FUNCTIONS
//////////

function tablaNumeros(arrayCifras) {

    let tabla = document.getElementById("resultado");
    let sol ; //ESTO SIEMPRE PA LAS TABLAS

    sol = `<table>`;
    sol += `<tr><th>Número</th><th>Nombre</th></tr>`;

    for (let index = 0; index < arrayCifras.length; index++) {
        let cifra = Number(arrayCifras[index]);
        let nombre = obtenerNombre(cifra);

        sol += `<tr>`;
        sol += `<td>${cifra}</td>`;
        sol += `<td>${nombre}</td>`;
        sol += `</tr>`;

    }

    sol += `</table>`;


    tabla.innerHTML=sol;

}

function obtenerNombre(cifra) {
    let numerosYnombres = [
        { numero: 1, nombre: 'uno' },
        { numero: 2, nombre: 'dos' },
        { numero: 3, nombre: 'tres' },
        { numero: 4, nombre: 'cuatro' },
        { numero: 5, nombre: 'cinco' },
        { numero: 6, nombre: 'seis' },
        { numero: 7, nombre: 'siete' },
        { numero: 8, nombre: 'ocho' },
        { numero: 9, nombre: 'nueve' },
    ];

    for (let i = 0; i < numerosYnombres.length; i++) {
        if (numerosYnombres[i].numero === cifra) {
            return numerosYnombres[i].nombre;
            console.log(numerosYnombres[i].nombre);
        }
    }
}

//////////
//MAIN
/////////

//arrayCifras.join(',');  //separamos el array por comas, es opcional


console.log(arrayCifras);

