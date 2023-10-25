"use strict"

function resolver(){ 
  document.querySelector("#pTexto").innerText = "Solución de 6 × 4";
  document.querySelector("#divPregunta > div").innerHTML ="<p>6 × 4 es 24</p> \
	<p><strong>Explicación:</strong> 6 * 4 = 6 + 6 + 6 + 6</p>";  
}

let btnResolver = document.querySelector("#btnResolver");
btnResolver.addEventListener('click', resolver);