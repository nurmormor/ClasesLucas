
"use strict" //preguntar 

////////
//FUNCTIONS
/////////

function ventanaEmergente(){

    newWin.document.write(
        "<script>window.opener.document.body.innerHTML = 'Test'<\/script>"
      );

}

///////////
//MAIN
///////////

let ventana = document.getElementById("abrirVentana");
ventana.addEventListener("click", ventanaEmergente);


