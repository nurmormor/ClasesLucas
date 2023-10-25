"use strict";

function crearFactura(){
	producto = document.getElementById('txtProducto').value;
	cantidad = document.getElementById('txtCantidad').value;

	window.open("abrirFactura.html");
}


var producto;
var cantidad;

document.getElementById('btnFactura').addEventListener('click', crearFactura);