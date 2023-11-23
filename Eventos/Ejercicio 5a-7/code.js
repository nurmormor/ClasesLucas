"use strict"



function amarillito(e){
    const elemento = e.target; //el elemento más interno
    if(elemento.tagName == "TR") return;
    if (elemento.tagName == "TABLE") return;
    if(elemento.tagName == "TD"){
      elemento.parentElement.classList.add("amarillo");
    } 
}


  let tablita = document.getElementById("tabla");
  tablita.addEventListener("click", amarillito);