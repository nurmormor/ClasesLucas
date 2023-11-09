"use strict";

////////////////
// Ingrediente
////////////////
class Ingrediente{

    constructor(nombre, cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
 
  toHTMLRow = function(){
    return `<tr><td>${this.nombre}</td><td>${this.cantidad}</td></tr>`;
  }
}



////////////
// Crema
////////////

class Crema{
    constructor (nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.ingredientes = [];
        this.addIngrediente = function(nombre, cantidad){ 
          this.ingredientes.push(new Ingrediente(nombre, cantidad));
    }

  }

  removeIngrediente = function(i){ 
    this.ingredientes.splice(i, 1);
  }

  //removeIngrediente(i){ PREGUNTAR SI ESTO ES UNA FUNCION O NO
   // this.ingredientes.splice(i, 1);
  //}

  toHTMLTable = function () {
    let s = '<table>';
    s+= `<caption>${this.nombre} (${this.precio} €)</caption>`;
    s+= '<thead><tr><th>Nombre</th><th>Cantidad (gramos)</th></tr></thead>';
    s+= '<tbody>';

    for(let ing of this.ingredientes){
      s+=ing.toHTMLRow();
    }
    
    s+='</tbody>';
    s +=`<tfoot>
      <tr>
        <th colspan="2">${this.marca}</th>
      </tr>
    </tfoot></table>`;
    return s;
  }
}