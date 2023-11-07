"use strict"

//////////
//FUNCTIONS
////////////

function añadirCosas (){


errores.innerHTML="";

resultado.innerHTML="";

let nombre = document.getElementById("txtNombre").value;
let apellidos = document.getElementById("txtApellidos").value;

if (nombre.length ===0 || apellidos.length ===0){
    errores.innerHTML='<p> rellene al menos uno de los campos requeridos </p>';
}else{
    arrNombres.push(nombre);
    arrApellidos.push(apellidos);

    document.getElementById("txtNombre").value="";
    document.getElementById("txtApellidos").value="";
}

}

function generarCosas () {

    let numNom;
    let numApe;

if (arrNombres.length==0 || arrApellidos.length==0){
    errores.innerHTML='<p> error. no hay valores </p>';

} else {
     numNom= Math.floor(Math.random()*arrNombres.length);
     numApe = Math.floor(Math.random()*arrApellidos.length);
}
resultado.innerHTML += `<p> Nombre: ${arrNombres[numNom]} </p> <p> Apellidos: ${arrApellidos[numApe]}</p>`; //cuando es imprime esto lo que esta imprimiendo es un nombre aleatorio y un apellido aleatorio. 

}



//////////
//MAIN
//////////

let arrNombres=[];
let arrApellidos=[];

let errores = document.getElementById("errores");
let resultado = document.getElementById("resultado");

let añadir = document.getElementById("btnAñadir"); //NO PONER NUNCA MISMO NOMBRE A LA VARIABLE QUE A LA FUNCION
añadir.addEventListener("click", añadirCosas);
let generar = document.getElementById("btnGenerar");
generar.addEventListener("click", generarCosas);
