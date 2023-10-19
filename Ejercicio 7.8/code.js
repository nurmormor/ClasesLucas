"use strict"


///////////
//FUNCTIONS
////////////


function accederr() {

    //Comprobar si todos los campos están rellenados
    let nombre = document.getElementById("txtNombre").value;
    let apellidos = document.getElementById("txtApellidos").value;
    let tratamiento = document.getElementById("txtTratamiento").value;
    let ip = document.getElementById("txtIP").value;
    let pais = document.getElementById("txtPais").value;

    if (nombre && apellidos && tratamiento && ip && pais) {
        alert("Acceso concedido. ¡Bienvenido!");
    } else {
        alert("Por favor, rellena todos los campos antes de acceder.");
    }

}

function accederBoton() {

    let nombre = document.getElementById("txtNombre").value;
    let apellidos = document.getElementById("txtApellidos").value;
    let tratamiento = document.getElementById("txtTratamiento").value;
    let ip = document.getElementById("txtIP").value;
    let pais = document.getElementById("txtPais").value;

    let campos = [nombre, apellidos, tratamiento, ip, pais];
    let camposVacios= [];

    for (let i = 0; i < campos.length; i++) {
       // let campo = campos[i];
        if (campos[i].value == "") { //preguntar
            camposVacios.push(campo);

        }

    }

    if (camposVacios.length > 0) {
        
        acceder2.disabled = true;
    } else {
        
        acceder2.disabled=false;
    }


}

function rellenarr() {

    // Obtener el nombre del usuario
    let nombre = document.getElementById("txtNombre").value;

    // Rellenar automáticamente el tratamiento según el nombre
    let tratamiento = "don";
    if (nombre) {
        if (nombre.toLowerCase() === "maría") {
            tratamiento = "doña";
        }
    }

    document.getElementById("txtTratamiento").value = tratamiento;

    // Simular la obtención de IP y país
    document.getElementById("txtIP").value = "192.168.0.1";
    document.getElementById("txtPais").value = "ES";
    
}
//hola
///////////
//main
////////////

let accederBtn = document.getElementById("acceder");
accederBtn.addEventListener("click", accederr);

let accederBtn2= document.getElementById("acceder");
accederBtn2.addEventListener("click", accederBoton)

let rellenar = document.getElementById("rellenar");
rellenar.addEventListener("click", rellenarr);

//console.log(tratamiento);

