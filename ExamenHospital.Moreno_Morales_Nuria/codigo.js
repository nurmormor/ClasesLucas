"use strict";

///////////////////
// FUNCTIONS
///////////////////

const ocultarTodosLosFormularios = () => {
    //1.- Añadimos la clase oculto a las div.formularios
    document.querySelectorAll(".formulario").forEach(
        formulario => formulario.classList.add("oculto")
    );
}

const altaDeMedico = () => {
    //recuperamos los campos

    let idMedico = Number(document.querySelector("[name=txtIdMedico]").value);
    let nombre = document.querySelector("[name=txtNombre]").value;
    let tlf = Number(document.querySelector("[name=txtTelefono]").value);
    let email = document.querySelector("[name=txtEmail]").value;
    let colegiado = document.querySelector("[name=txtColegiado]").value;

    let oMedico;

    oMedico = new Medico(idMedico, nombre, tlf, email, colegiado);

    if (hospital.altaMedico(oMedico)) {
        divListado.innerHTML = `El/la médico/a ${nombre} con identificador ${idMedico} se ha añadido correctamente`;
    } else {
        divListado.innerHTML = `El/la médico/a ${nombre} con identificador ${idMedico} no se ha añadido podido añadir porque ya existe`;
    }

    //opcional: ponemos los campos vacíos

    document.querySelector("[name=txtIdMedico]").value="";
    document.querySelector("[name=txtNombre]").value="";
    document.querySelector("[name=txtTelefono]").value="";
    document.querySelector("[name=txtEmail]").value="";
    document.querySelector("[name=txtColegiado]").value="";

}

const altaDeCita = () => {

    //recuperamos los campos

    let idMedico = Number(document.querySelector("[name=txtIdMedico]").value);
    let paciente = document.querySelector("[name=txtPaciente]").value;
    let fecha = document.querySelector("[name=txtFecha]").value;
    let hora = document.querySelector("[name=txtHora").value;

    let oCita;
    oCita = new Cita(idMedico, paciente, fecha, hora);

    if (hospital.altaCita(oCita)) {
        divListado.innerHTML = `La cita con identificador ${idMedico} se ha añadido correctamente`;
    } else {
        divListado.innerHTML = `La cita con identificador ${idMedico} no se ha añadido correctamente`;
    }

    //opcional: ponemos los campos vacíos
    document.querySelector("[name=txtIdMedico]").value="";
    document.querySelector("[name=txtPaciente]").value="";
    document.querySelector("[name=txtFecha]").value="";
    document.querySelector("[name=txtHora").value="";
    
}

const listadoDeMedicos = () => {
    divListado.innerHTML = hospital.listadoMedicos();
}

const listadoDeCitas = () => {
    divListado.innerHTML = hospital.listadoCitas();
}

///////////////////
// MAIN
///////////////////

//1. Ocultamos todos los formularios
ocultarTodosLosFormularios();

//2. Añadimos los addEventListeners a los botones principales
document.querySelector("#btnFormAltaMedico").addEventListener("click", e => {
    ocultarTodosLosFormularios(); //esto hace que solo se muestre el formulario asociado al boton que hemos clickeado
    document.querySelector("#divFrmAltaMedico").classList.remove("oculto");
});


document.querySelector("#btnFormAltaCita").addEventListener("click", e => {
    ocultarTodosLosFormularios();
    document.querySelector("#divFrmAltaCita").classList.remove("oculto");
});

const divListado = document.querySelector("#listado");

let hospital = new Hospital();

document.querySelector("#btnAltaMedico").addEventListener("click", altaDeMedico);
document.querySelector("#btnAltaCita").addEventListener("click", altaDeCita);

document.querySelector("#btnListadoMedicos").addEventListener("click", listadoDeMedicos);
document.querySelector("#btnListadoCitas").addEventListener("click", listadoDeCitas);



