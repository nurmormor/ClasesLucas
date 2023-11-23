" use strict"

///////////////
//FUNTIONS
/////////////

function cambiarElementos(e) {

    let lista2 = document.getElementById("lista2");
    
   // Obtenemos el texto del elemento clicado
   let textoElemento = e.target.textContent;

   // Añadimos el texto del elemento clicado a lista2
   lista2.innerHTML += `<li>${textoElemento}</li>`; //con este codigo se me sustituyen las lineas en lugar de escribirse una debajo de la otra


   /* otra forma de hacerlo:
     // Creamos un nuevo elemento li
    let nuevoElemento = document.createElement("li");

    // Añadimos el texto del elemento clicado al nuevo elemento li
    nuevoElemento.textContent = textoElemento;

    // Añadimos el nuevo elemento li a lista2
    lista2.appendChild(nuevoElemento);
   */

}

/////////////
//MAIN 
/////////////

let listaUno = document.getElementById("lista1").querySelectorAll("li"); //esto no sé por qué es necesario pero bueno
// Asignamos el evento click a cada elemento de lista1 utilizando un bucle for normal
for (let i = 0; i < listaUno.length; i++) {
    listaUno[i].addEventListener("click", cambiarElementos);
}