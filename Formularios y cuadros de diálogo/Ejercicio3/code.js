"use strict"

const getRandomInt = () =>{
    const max=200;
    return Math.floor(Math.random() * max) - 100;
  }

  btnAleatorio.addEventListener("click", e=>{
    frmEj3.querySelectorAll("input").forEach(i=>{
      i.value = getRandomInt();
    });
  });
  
  
  btnTodosPositivos.addEventListener("click", e=>{
    const todosPositivos = Array.from( frmEj3.querySelectorAll("input") ).every( i=>i.value>=0);
  
    if(todosPositivos)
      divEj3.innerHTML = "Todos los valores son positivos";
    else
      divEj3.innerHTML = "Hay valores que no son positivos";
  });
  
  
  
  btnContarPositivos.addEventListener("click", e=>{
    const numPositivos = Array.from( frmEj3.querySelectorAll("input") ).reduce( 
      (acc,input)=> {
        if(  Number(input.value>=0)  ) return acc+1
        return acc;
      }
    ,0);
  
    divEj3.innerHTML = `Hay ${numPositivos} valores positivos.`
  });
/* MIRAR BIEN ESTA OPCION!!!!!

  btnContarPositivos.addEventListener("click", e => {
    const inputs = frmEj3.querySelectorAll("input");
    let numPositivos = 0;

    for (let i = 0; i < inputs.length; i++) {
        const valor = Number(inputs[i].value);
        if (!isNaN(valor) && valor >= 0) {
            numPositivos++;
        }
    }

    divEj3.innerHTML = `Hay ${numPositivos} valores positivos.`;
});
*/