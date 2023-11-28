class Almacen {
    constructor(catalogo=[], stock=[]){
        this.catalogo = catalogo; //array de producto
        this.stock=stock; //array de stockProducto

    }

    altaProducto(oProducto){ //return boolean

        let yaExisteID=this.yaExisteID(oProducto); // se pone this.catalogo || se ponen los parentesis con el objeto que se le ha pasado
        
        if (yaExisteID){
            alert("error, no se puede hacer el alta");
            return false;
            
        } else {
            this.catalogo.push(oProducto);
            alert("se ha subido el producto correctamente");
            return true;
        }

        
    }

   yaExisteID (oProducto) {

    for (let index = 0; index < catalogo.length; index++) {
        if (this.catalogo[i].id===oProducto.id){
            return true;
        }
        
    }
   }

    entradaStock(idProducto, unidades){ //return string
         
        
    }

    salidaStock(idProducto, unidades){//return string

    }

    listadoCatalogo(){ //return htmlTable

    }

    numCarcasaStock(){ //return number

    }

    importeTotalStock(){ //return number

    }
}

class StockProducto{
    constructor(idProducto, unidades){
        this.idProducto=idProducto;
        this.unidades=unidades;
    }

    toHTMLRow(){ //return htmlRow

    }
}

class Producto{
    constructor(id, nombre, precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }

    toString(){ //return string

    }

}

class Movil extends Producto{
    constructor(id, nombre, precio, modelo,android){
        super (id, nombre, precio);
        this.modelo=modelo;
        this.android=android;
    }

    toHTMLRow(){ //return htmlRow

    }
}

class Carcasa{
    constructor(id, nombre, precio, material){
        super (id, nombre, precio);
        this.material=material;
    }

    toHTMLRow(){//return htmlrow

    }
}