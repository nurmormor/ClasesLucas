class Crema {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.ingrediente = []; //un array de objetos de tipo ingrediente
    }
 
    addIngrediente(nombre, cantidad) {
        let ingrediente1 = new Ingrediente(nombre, cantidad);

        this.ingrediente.push(ingrediente1); //this porque es en la clase objetos.js
    }

    removeIngrediente(i) {

        this.ingrediente.splice(i, 0);
    }

    toHTMLTable() {

        let sol;
        sol = `<table>`;

        sol += `<tr><th>nombre</th><th>precio</th><th>marca</th><th>ingredientes</th></tr>`;
        sol += `<tr><td>${this.nombre}</td><td>${this.precio}</td><td>${this.marca}</td>`;

        for (let index = 0; index < this.ingrediente.length; index++) {
            sol += `<td>${this.ingrediente[index].toHTMLRow()}</td></tr>`;

        }


        sol += `</table>`;
    }

}

class Ingrediente {
    constructor(nombreIngrediente, cantidad) {
        this.nombreIngrediente = nombreIngrediente;
        this.cantidad = cantidad;
    }

    toHTMLRow() {

        let sol;
        sol += `<td>${this.nombreIngrediente}</td><td>${this.cantidad}</td>`;

    }
}