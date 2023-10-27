"use strict"

//////////
//FUNCTIONS
//////////

function calcularArea(radio) {

    let area = Math.PI*radio*radio;

    return area;

}

function calcularVolumen(radio, area){

    let volumen = (4/3) * area * radio;

    
    return volumen;
}

function calcularAreaYVolumen(){

    let area = calcularArea(radio);
    let volumen = calcularVolumen(radio,area);

    return volumen;

}



//////////
//MAIN
//////////
let radio = prompt("Dame un radio");
//let area=calcularArea(radio);
//let volumen=calcularVolumen(radio, area);
//console.log(area);
//console.log(volumen);
let areaYVolumen = calcularAreaYVolumen();
console.log(areaYVolumen);