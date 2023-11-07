"use strict"


///////////////
//MAIN
////////////////

let arrayViajes = [
    ['Juan',   ['Granada',' Londres',' Roma']],
    ['Ana',    ['Bilbao', 'Sevilla', 'Roma']],
    ['Manuel', ['Granada', 'Paris', 'Londres', 'Roma']],
    ['Antonio',['Granada', 'Sevilla','Bilbao']],
    ['Elena',  ['Granada', 'Sevilla' ]],
    ['Jorge',  ['Sevilla']]
  ];

  let selectPersona = document.querySelector("#selectPersona")
  let resultado =document.getElementById("resultado");

  for (let index = 0; index < arrayViajes.length; index++) {

    let lineaViajes = arrayViajes[i];

    selectPersona.innerHTML += `<option value="${i}">${lineaViajes[0]}</option>`; //la i es cada posicion de array de viajes, y lineaViajes es el nombre de la persona


  }

  selectPersona.addEventListener( "change", ()=>{
    let indiceSeleccionado = selectPersona.value;
    const personaSeleccionada = arrayViajes[indiceSeleccionado][0];
    resultado.innerHTML="<p>Viajes de " + personaSeleccionada +"</p>";
  
    const viajesPersona = arrayViajes[indiceSeleccionado][1];
    let sol ="<ul>";
    for (let viaje of viajesPersona) {
      sol += `<li>${viaje}</li>`;
    }
    sol+="</ul>";
    resultado.innerHTML += sol;
  });