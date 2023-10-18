"use strict"

function notaMedia () {

let suma = 4+8+9+7+2+6;
suma =suma/6;
console.log(suma);

divResultado.innerHTML=`<p>${suma}</p>`;


}
function volumenEsfera(){
    let vol1 = 4/3*Math.PI*1*1*1;
    let vol2 = 4/3*Math.PI*2*2*2;
    divResultado2.innerHTML+=`<p>${vol1} ${vol2}</p>` // si hay mas de un resultado poner +=

}


function repaso() {
    let edad = prompt("cuantos años tienes?", "38");
    if (edad!=null) {
        alert("vaya, " + edad + "muchos años");
        alert("y el año que viene " + (Number(edad) + Number(1)));
    }
}

volumenEsfera();
notaMedia();
repaso();


divResultado = document.getElementById("divResultado");
divResultado2= document.getElementById("divResultado3");

