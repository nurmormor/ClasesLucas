
"use strict" //preguntar 

////////
//FUNCTIONS
/////////

function ventanaEmergente(){

  let newWin = window.open("about:blank", "hello", "width=200,height=200");
  newWin.document.write("Hello, world!");

}

///////////
//MAIN
///////////

let ventana = document.getElementById("abrirVentana");
ventana.addEventListener("click", ventanaEmergente);


