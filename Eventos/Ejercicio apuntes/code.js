"use strict"

function descartar(id){
	alert("ID a descartar: "+ id);
}

let arr=[
	{id:1, nombre: "Javier"},
	{id:14, nombre: "Juan"},
	{id:123, nombre: "Paco"},
	{id:124, nombre: "Pedro"},
];

let divResultado3 = document.querySelector("#divResultado3");

let s="";
for (let o of arr){
	s+=`<p><button onclick="descartar(${o.id})">Info sobre ${o.nombre}</button></p>`;
}
divResultado3.innerHTML = s;