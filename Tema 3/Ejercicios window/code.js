"use strict";

function crearFactura(){
	producto = document.getElementById('txtProducto').value;
	cantidad = document.getElementById('txtCantidad').value;

	const facturaWindow = window.open("abrirFactura.html");

    facturaWindow.addEventListener('load', function() {
        facturaWindow.postMessage({ producto, cantidad }, '*');
    });
}


var producto;
var cantidad;

document.getElementById('btnFactura').addEventListener('click', crearFactura);