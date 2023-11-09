"use strict"

//////////////
//MAIN
///////////////

let resultado = document.getElementById("resultado");

let añadir = document.getElementById("btnAñadirCrema");
añadir.addEventListener("click", añadirCrema);

let añadirIng = document.getElementById("btnAñadirIngrediente");
añadirIng.addEventListener("click", añadirIngrediente);

let mostrar = document.getElementById("btnMostrar");
mostrar.addEventListener("click", mostrarProducto);

let eliminar = document.getElementById("btnEliminar");
eliminar.addEventListener("click", eliminarIngrediente);

let cremas = [];
let ingredientes = [];

///////////////
//FUNCTIONS
///////////////

function añadirCrema() {

    let nombre = document.getElementById("txtNombre").value;
    let precio = document.getElementById("txtPrecio").value;
    let marca = document.getElementById("txtMarca").value;


    let crema1 = new Crema(nombre, precio, marca);

    cremas.push(crema1);

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtPrecio").value = "";
    document.getElementById("txtMarca").value = "";


}



function mostrarProducto() {

    for (let index = 0; index < cremas.length; index++) {
        resultado.innerHTML += `<h3> Crema ${index+1}: ${cremas[index].nombre}</h3>`; //el +1 es pa que empiece en el 1 y no en el 0q ue queda feo
        resultado.innerHTML += cremas[index].toHTMLTable();

    }

}


function añadirIngrediente() {


    let nombreIngrediente = document.getElementById("txtNombreIngrediente").value;

    let cantidad = document.getElementById("txtCantidad").value;

    ingredientes.push(nombreIngrediente, cantidad);

    document.getElementById("txtNombreIngrediente").value = "";

    document.getElementById("txtCantidad").value = "";

    mostrarProducto();

}

function eliminarIngrediente() {

let indice = document.getElementById("txtIndice");

ingredientes.splice(indice,1);

}
