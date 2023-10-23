"use strict"

///////////
//FUNCTIONS
//////////

function muestraMensaje() {
   
    console.log("Este mensaje se muestra cada segundo");
  }

////////////
//MAIN
///////////
let idTemp = setInterval(muestraMensaje, 1000);
