"use strict";

///////////
//FUNCTIONS
//////////

function vocales(a){

let array = [];

for (let i = 0; i < a.length; i++) {
    
    if (a.charAt(i) ==='a' || a.charAt(i)==='e' || a.charAt(i)==='i' || a.charAt(i)==='o' || a.charAt(i)==='u'){

      array.push(a.charAt(i));

    }
    
}

return array;

}


////////////
//MAIN
////////////
let a = "margarita";

console.log(vocales(a));