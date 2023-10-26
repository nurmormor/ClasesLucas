"use strict"

//////////
//FUNCTIONS
//////////

function mayorEdad (num) {
    let flag = true;
    if (num>=18){
        flag;
        let resultado = document.getElementById("resultado");
        resultado.innerHTML="<p>es usted mayor de edad?</p>" + flag;
    }else{
        flag=false;
        resultado.innerHTML="<p>es usted mayor de edad?</p>" + flag;
    }
}

//////////
//MAIN
////////////
let num = prompt("digame su edad");
mayorEdad(num);
