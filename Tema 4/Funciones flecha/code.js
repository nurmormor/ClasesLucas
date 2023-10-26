"use strict"


////////////
//FUNCIONES
/////////////

function cuadrado (num) {
    
    return num*num;
}

let cuadrado2 = (num) => { return num*num; } 

let cuadrado3 = num => { return num*num; } 

let cuadrado4 = num => num*num;

//////////
//MAIN
//////////
 
let num = prompt("digame un numero");
let division = document.getElementById("resultado");
division.innerHTML = cuadrado(num);
let division2 = document.getElementById("resultado2");
division2.innerHTML = cuadrado2(num);
let division3 = document.getElementById("resultado3");
division3.innerHTML = cuadrado3(num);
let division4 = document.getElementById("resultado4")
division4.innerHTML = cuadrado3(num);

