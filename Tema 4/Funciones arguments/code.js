"use strict"

/////////
//FUNCTIONS
//////////

function multiplica(multiplicador, ...resto) {
    return resto.map((x) => multiplicador * x);
  }

  function multiply(a=3, b = 1) {
    return a * b;
  }

///////////
//MAIN
///////////

let resultado = document.getElementById("resultado");
resultado.innerHTML = multiplica(2,3,4,5);
let resultado2=document.getElementById("resultado2"); //preguntar
resultado2.innerHTML = multiply(a=3, b = 1);