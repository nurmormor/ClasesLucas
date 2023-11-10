"use strict"

/////////
//FUNCTIONS
//////////////

function agregarFicheros() {

    let esCancion = document.getElementById("txtRadioCancion").checked;

    let nombreFichero = document.getElementById("txtNombreFichero").value;
    let tamaño = document.getElementById("txtTamañoFichero").value;

    if (esCancion) {
        let nombreCancion = document.getElementById("txtNombreCancion").value;
        let duracion = document.getElementById("txtDuracionCancion").value;


        let cancion1 = new Cancion(nombreFichero, tamaño, nombreCancion, duracion);
        arrayFicheros.push(cancion1);
    } else {
        let fichero1 = new Fichero(nombreFichero, tamaño);
        arrayFicheros.push(fichero1);
    }

    console.table(arrayFicheros);
}


function mostrarFicheros() {
    let resultado = document.getElementById("resultado"); //ESTO NO SE PUEDE OLVIDAR
    resultado.innerHTML = "";
    let lista="";//VARIABLE AUXILIAR 
    for (let index = 0; index < arrayFicheros.length; index++) {
        let elemento = arrayFicheros[index];

        lista += `<ul>`; 
        lista += `<li> ${elemento.getDatos()}</li>`;

    }
    lista += `</ul>`; //CERRAMOS LA LISTA O TABLA FUERA DEL FOR
    resultado.innerHTML = lista; //IGUALAMOS EL RESULTADO A LA VARIABLE AUXILIAR

}

//////////
//MAIN
/////////
let arrayFicheros = [];
let arrancar = document.getElementById("btnAgregar");
arrancar.addEventListener("click", agregarFicheros);

let mostrar = document.getElementById("btnMostrar");
mostrar.addEventListener("click", mostrarFicheros);