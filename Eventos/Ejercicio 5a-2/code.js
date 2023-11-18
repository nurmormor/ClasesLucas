"use strict"

let menu = document.querySelector("#divTexto .menu");
let pTexto = document.querySelector("#divTexto p");

document.querySelector("#divTexto").addEventListener("contextmenu", e=>{
	//impedimos que se abra el menú contextual
	e.preventDefault();
	menu.classList.toggle("oculto");
});

document.querySelector("#btnCursiva").addEventListener("click",()=>{
	pTexto.innerHTML= `<em>${pTexto.textContent}</em>`;
});

document.querySelector("#btnNegrita").addEventListener("click",()=>{
	pTexto.innerHTML= `<strong>${pTexto.textContent}</strong>`;
});

document.addEventListener("click", e=>{
	//hacemos que el menú se oculto al hacer click en cualquier parte del documento
	menu.classList.add("oculto");
});