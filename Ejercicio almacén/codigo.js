"use strict"

//////////
//FUNCTIONS
/////////////

/**
 * Oculta todas las div.formulario asignándole la clase .oculto
 */
const ocultarTodosLosFormularios = () =>{
    //1.- Añadimos la clase oculto a las div.formulario
    document.querySelectorAll(".formulario").forEach( 
      formulario => formulario.classList.add("oculto")
    );
  }


////////////////
//MAIN
///////////////

ocultarTodosLosFormularios();

//2.- Añadimos los addEventListeners a los botones principales
document.querySelector("#btnFormAltaProducto").addEventListener("click", e=>{
  ocultarTodosLosFormularios(); // cada vez que se clickee en un boton, se ocultaran el resto de formularios para que solo se abra el correspondiente
  document.querySelector("#frmAltaProducto").classList.remove("oculto");
});



document.querySelector("#btnFormEntradaSalidaStock").addEventListener("click", e=>{
  ocultarTodosLosFormularios();
  document.querySelector("#frmEntradaSalidaStock").classList.remove("oculto");
});