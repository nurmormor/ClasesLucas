"use strict"

////////////
//FUNCTIONS
////////////

function asterisco() {
    let asterisco="";
    let numero = Number(prompt("introduce un número"));
    let resultado = document.getElementById("resultado");
    for (let i = 1; i <= numero; i++){
        asterisco+="*";
        

    }
resultado.innerHTML="<p>" + asterisco + "</p>";
}


//////////
//MAIN
/////////////
asterisco();