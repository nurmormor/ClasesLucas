"use strict"

/////////
//FUNCTIONS
//////////
 function comparar(){

    let a =[1,3,67,32,90,,2,45,6];
    let b = [1,3,67,92,90,,2,45,6];

if (JSON.stringify(a)===JSON.stringify(b)) {
    console.log("Los arreglos son iguales.");
} else {
    console.log("Los arreglos son diferentes.");
}

 }

 function comparar2(){

    let a =[1,3,67,32,90,,2,45,6];
    let b = [1,3,67,92,90,,2,45,6];

    if (a.every((element, index) => element === b[index])){
        console.log("Los arreglos son iguales.");
    } else {
        console.log("Los arreglos son diferentes.");
    }


 }

 ///////////
 //MAIN
 ///////////


 comparar();
 comparar2();