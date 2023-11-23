"use strict"

const ene = document.querySelector("#ene");
let eneX = 0;

const mueveEne =()=>{
	eneX++;
	ene.style.right = eneX + "px";
	requestAnimationFrame(mueveEne);
};
mueveEne();