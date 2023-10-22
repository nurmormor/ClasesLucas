
"use strict"


document.getElementById("abrirVentana").addEventListener("click", function() {
    window.open("https://example.com", "_blank");
});

function abrirNuevaVentana() {
    let newWin = window.open("about:blank", "hello", "width=200,height=200");
    newWin.document.write("Hello, world!");
}
