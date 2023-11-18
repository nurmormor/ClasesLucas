"use strict"
document.querySelector("#btnAnadir").addEventListener('click', ()=>{
    const texto = document.querySelector("#txtNuevoElemento").value;  
    document.querySelector("#lista").innerHTML += `<li>${texto}</li>`;
  });
  
  document.querySelector("#lista").addEventListener('click', (e)=>{
    e.target.style="display:none;";
  });