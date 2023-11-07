"use strict";
/////////
//FUNCTIONS
//////////

function añadirPerros() {

    let nombre = document.getElementById("txtNombre").value;
    let edad = document.getElementById("txtEdad").value;

    let raza = document.getElementById("txtRaza").value;

    let perro = new Perro(nombre, edad, raza);

    arrayPerros.push(perro);

    
document.getElementById("txtNombre").value="";
document.getElementById("txtEdad").value="";

document.getElementById("txtRaza").value="";
}

function ordenarInserccion() {

    let sol;
    sol = `<ul>`;
    let ordPorIn = arrayPerros; //poner una variable intermedia DEBERIA no hacer falta

    for (let index = 0; index < ordPorIn.length; index++) {

        sol += `<li>${ordPorIn[index].mostrarDatos()}</li>`;

    }
    sol += `</ul>`;

    resultado.innerHTML = sol;

}

function ordenarEdad() {
    let sol;
    sol = `<ul>`;
    let ordPorEdad = arrayPerros.toSorted((a, b) => a.edad - b.edad); //la variable intermedia aqui tiene sentido porque para recorrerlo con el for necesitamos una vairable qe no cambie. El toSorted solo se ejecuta en esa linea especifica, no se mantiene para hacer un for

    for (let index = 0; index < ordPorEdad.length; index++) {

        sol += `<li>${ordPorEdad[index].mostrarDatos()}</li>`;

    }
    sol += `</ul>`;

    resultado.innerHTML = sol;



}


function ordenarRaza() {
    let sol;
    sol = `<ul>`;

    let ordPorRaza = arrayPerros.toSorted((a, b) => a.raza.localeCompare(b.raza));

    for (let index = 0; index < ordPorRaza.length; index++) {
        sol += `<li>${ordPorRaza[index].mostrarDatos()}</li>`;

    }
    sol += `</ul>`;
    resultado.innerHTML = sol;

}

/////////////
//MAIN
//////////////
let arrayPerros = [];
let añadir = document.getElementById("btnAñadir");
añadir.addEventListener("click", añadirPerros);

let ordenarIn = document.getElementById("btnOrdenarInserccion");
ordenarIn.addEventListener("click", ordenarInserccion);

let ordenarEd = document.getElementById("btnOrdenarEdad");
ordenarEd.addEventListener("click", ordenarEdad);

let ordenarRa = document.getElementById("btnOrdenarRaza");
ordenarRa.addEventListener("click", ordenarRaza);


let resultado = document.getElementById("resultado");