"use strict"
let resultado = document.getElementById("resultado");
let radiobuttons = document.querySelectorAll("[name=txtOption]");

for( let radio of radiobuttons){  
	radio.addEventListener("change", e=>{

		let opcion = radio.value;
		
		if(opcion=="colores"){
			resultado.innerHTML="Rojo, verde, azul";
		}
		else{
			resultado.innerHTML="Zorro, perro, gato";				
		}
	});
};