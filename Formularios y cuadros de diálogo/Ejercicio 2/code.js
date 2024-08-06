"use strict"

btnEj2.addEventListener("click", e=>{ //por lo visto no hace falta recuperar el boton para asignarle un evento
    
    //opcion 1 que a mi no me gusta
    //let numMarcados = frmEj2.ch1Ej2.checked + frmEj2.ch2Ej2.checked + frmEj2.ch3Ej2.checked;
    
    let numMarcados = document.querySelectorAll("[name=frmEj2] input:checked").length;
  
    if(numMarcados<1 || numMarcados>2){
      divEj2.innerHTML="Debe marcar 1 o 2 opciones. No se pueden marcar 3."; 
      return; /*La palabra clave return se utiliza para salir temprano de la función en la que se encuentra. 
      En este caso, si la condición if(numMarcados<1 || numMarcados>2) se cumple 
      (es decir, si no hay opciones marcadas o hay más de dos opciones marcadas), 
      entonces el código dentro del bloque de esa condición se ejecuta 
      (divEj2.innerHTML="Debe marcar 1 o 2 opciones. No se pueden marcar 3."), 
      y luego la función se detiene prematuramente con return*/

      /*en este caso, podrías omitir el return si no hay código adicional después del bloque if. 
      El return se utiliza para salir prematuramente de la función, 
      y en este caso, no hay ninguna lógica adicional después del bloque if. 
     */ 
    }
  
    divEj2.innerHTML="";
    document.querySelectorAll("[name=frmEj2] input:checked").forEach(
      e=>{
        divEj2.innerHTML+=e.value+" ";
      }
    );
  
    //Alternativa rebuscada
    // divEj2.innerHTML = Array.from(document.querySelectorAll("[name=frmEj2] input:checked")).map( e=>e.value).join(", ");
  
  });