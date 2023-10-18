"use strict"

/////////////
//FUNCTIONS
///////////

function btnCalcular(){

let nombre = document.getElementById("txtNombre").value;
let edad = document.getElementById("txtEdad").value;
let turno = document.getElementById("txtTurno").value;

if (nombre === "" || edad ==="" || turno==="") {
    divErrores.innerHTML += "<p>Hay campos vacíos</p>";
}

if (nombre.length>20) {
    divErrores.innerHTML += "<p>Nombre demasiado largo</p>";
}

edad=Number(edad);
if (edad < 18 || edad > 67) {
    divErrores.innerHTML += "<p>Edad fuera del rango</p>";
}

if (turno !=="Mañana" && turno !=="Tarde") {
    divErrores.innerHTML += "<p>Sleccione un turno</p>";
}
 let password = document.getElementById("txtCOntraseña");
 let password1 = document.getElementById("txtCOntraseña1");

if (password !==password1) {
    divErrores.innerHTML+="<p>Las contraseñas no coinciden</p>";
}

if (password.length < 6 || password1.length < 6) {
    divErrores.innerHTML+="<p>Las contraseñas no son válidas</p>";
}

}






////////////////
//MAIN
///////////////

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", btnCalcular);
