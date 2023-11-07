"use strict"

///////////
//FUNCTION
///////////

function camelizar(string){

    let a = string.split('-');

     for (let i = 1; i < a.length; i++) {
        
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase();
    }
  
    let camelCased = a.join('');

     console.log(camelCased);
}


/////////////
//MAIN
/////////////

let string = "javier-mancera-que-miedo-me-das";
camelizar(string);