"use strict"

let a=["joRge","ana","PEDRO", "jUAn"];

let nombres = a.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());


console.log(nombres);

