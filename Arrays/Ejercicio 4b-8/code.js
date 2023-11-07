"use strict"

///////////
//FUNCTIONS
///////////

function añadirCuenta() {


    let cuenta = document.getElementById("txtCuenta").value;
    let nombre = document.getElementById("txtNombre").value;
    let saldo = Number(document.getElementById("txtSaldo").value);

    let arrayCuentas = [cuenta, nombre, saldo];

    banco.push(arrayCuentas);

    document.getElementById("txtCuenta").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtSaldo").value = "";

}

function comprobarCosas() {

    let cont = 0;

    for (let i = 0; i < banco.length; i++) {
        let arrayCues = banco[i];
            if (arrayCues[2] > 0) {
                cont += arrayCues[2];

            }

        
    }

    console.log("el saldo positivo de todos los clientes suma: " + cont);

}

/////////////
//MAIN
////////////
let banco = [];

let btnAñadir = document.getElementById("btnAñadir");
btnAñadir.addEventListener("click", añadirCuenta);

let btnComprobar = document.getElementById("btnComprobar");
btnComprobar.addEventListener("click", comprobarCosas);