" use strict"

//////////
//FUNCTIONS
///////////

function autos(coches) {

    coches.splice(2, 0, "Seat");

    console.log(coches);

    coches[3]="Mitsubishi";

    console.log(coches);

    let cars = [];

    for (let i = 0; i < coches.length; i++) {

        if (coches[i].length > 4) {
            cars.push(coches[i]);
        }

    }

    console.log(cars);

}

///////////
//MAIN
/////////////

let coches = ["Dacia", "Audi", "BMW", "Mercedes", "SKODA"];
autos(coches);