"use strict"

function calcular() {

    let fecha = document.getElementById("date").value;
    let resultado = document.getElementById("resultado");

    let fechaArray = [anio, mes, dia] = fecha.split("/"); //preguntar

    let estacion = "";

    if ((mes == 3 && dia >= 20) || (mes == 4) || (mes == 5) || (mes == 6 && dia <= 20)) {
        estacion = "Primavera";
    } else if ((mes == 6 && dia >= 21) || (mes == 7) || (mes == 8) || (mes == 9 && dia <= 22)) {
        estacion = "Verano";
    } else if ((mes == 9 && dia >= 23) || (mes == 10) || (mes == 11) || (mes == 12 && dia <= 20)) {
        estacion = "Otoño";
    } else {
        estacion = "Invierno";
    }

    resultado.innerHTML="<p> la fecha indicada pertenece a la estacion: " + estacion;

}



//////////
//MAIN
///////////

let btnCalcular=document.getElementById("boton");
btnCalcular.addEventListener("click", calcular);
