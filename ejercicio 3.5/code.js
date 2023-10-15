"use strict"

function cosenoRadianes () {

let radianes = Number(prompt("dime los radianes para el coseno"));

let coseno = (radianes) = 1 - (radianes * radianes) /2 + (radianes*radianes*radianes*radianes)/24 - (radianes*radianes*radianes*radianes*radianes*radianes)/720 + (radianes*radianes**radianes*radianes*radianes*radianes*radianes*radianes)/40320;
alert("el coseno es " + coseno);

}

function senoRadianes ()  {

    let radianes = Number(prompt("dime los radianes para el seno"));
    let seno = (radianes) - (radianes^3)/6+ (radianes^5)/120 - (radianes^7)/5040 + (radianes^9)/362880;
    alert("el seno es: " + seno);

}
cosenoRadianes();
senoRadianes();
