"use strict" //NO FUNCIONA

////////////
//FUNCTIONS
////////////

function validar(e){
    const texto = e.target.value;

    if (texto.length !== 5) {
        return; //El return se utiliza para salir prematuramente de la función validarCodigoPostal. En este contexto, significa que si la longitud de la cadena texto no es 5, la función se detendrá y no ejecutará el código restante dentro de la función. Esto se hace para asegurarse de que solo se realicen acciones adicionales si la longitud del código postal es exactamente 5 caracteres.
    }
  
    const numeroProv = Number(texto.slice(0, 2) - 1);
  
    if (isNaN(numeroProv)) {
        resultado.innerHTML = "Error: debe indicar sólo números en el C.P.";
        return; //igual que el return de arriba
    }

    resultado.innerHTML=`${arrProvincias[numeroProv]}`;
}


/////////////
//MAIN
///////////////

const codigoPostal = document.getElementById("txtCodigoPostal");
const resultado = document.getElementById("resultado");

codigoPostal.addEventListener("keyup", validar); //así se separa en addeventlistener de las funciones pa no tener que hacer flecha






