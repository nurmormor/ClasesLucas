class Almacen {
    constructor(catalogo = [], stock = []) {
        this.catalogo = catalogo; //array de producto
        this.stock = stock; //array de stockProducto

    }

    altaProducto(oProducto) { //return boolean

        let yaExisteID = this.yaExisteID(oProducto); // se pone this.catalogo || se ponen los parentesis con el objeto que se le ha pasado

        if (yaExisteID) {
            alert("error, no se puede hacer el alta");
            return false;

        } else {
            this.catalogo.push(oProducto);
            alert("se ha subido el producto correctamente");
            return true;
        }


    }

    yaExisteID(oProducto) {

        for (let index = 0; index < this.catalogo.length; index++) {
            if (this.catalogo[index].id === oProducto.id) {
                return true;
            }

        }
    }

    entradaStock(idProducto, unidades) { //return string

        let yaExisteID = this.yaExisteID(oProducto);

        if (yaExisteID) {
            let oStock = new StockProducto(idProducto, unidades); // por que en el original pone numUnidades?
            almacen.stock.push(oStock); //se podría poner this.stock.push??

            let total = 0;
            for (let index = 0; index < this.stock.length; index++) {
                if (this.stock[index].idProducto === oStock.idProducto) {
                    total += this.stock[index].unidades;
                }
                return `el stock del producto ${idProducto} se ha modificado correctamente, quedan ${total} unidades`;
            }


        }
        return `No se pudo realizar el cambio de stock del producto ${idProducto} porque no se encontró en el almacén.`;

    }

    salidaStock(idProducto, unidades) {//return string
        return this.entradaStock(idProducto, unidades); //este metodo no lo entiendo
    }

    listadoCatalogo() { //return htmlTable

        let s;
        s = "<table><caption>Listado catálogo</caption>";
        s += "<thead><tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Android/Material</th></tr></thead>";
        s += "<tbody>";

        for (let producto of this.catalogo) {
            s += producto.toHTMLRow();
        }

        s += "</tbody></table>";
        return s;

    }

    listadoStock() {

        let s;
        s = "<table><caption>Stock Móviles</caption>";
        s += "<thead><tr><th>ID</th><th>Nombre</th><th>Nº unidades</th></tr></thead>";
        s += "<tbody>";

        const arrMoviles = [];

        for (let elemento of this.catalogo) {
            if (elemento instanceof Movil) {
                arrMoviles.push(elemento);
            }
        }
        for (let i = 0; i < arrMoviles.length; i++) {
            let movil = arrMoviles[i];
            let numUnidadesStock = 0;

            for (let j = 0; j < this.stock.length; j++) {
                if (this.stock[j].idProducto === movil.id) {
                    numUnidadesStock += this.stock[j].unidades;
                }
            }

            s += `<tr><td>${movil.id}</td><td>${movil.nombre}</td><td>${numUnidadesStock}</td></tr>`;
        }
        s += "</tbody></table>";


        //ahora con las carcasas
        s += "<table><caption>Stock Carcasas</caption>";
        s += "<thead><tr><th>ID</th><th>Nombre</th><th>Nº unidades</th></tr></thead>";
        s += "<tbody>";

        let arrCarcasas = [];

        for (let elemento of this.catalogo) {
            if (elemento instanceof Carcasa) {
                arrCarcasas.push(elemento);
            }
        }

        for (let i = 0; i < arrCarcasas.length; i++) {
            let carcasa = arrCarcasas[i];
            let numUnidadesStock = 0;

            for (let j = 0; j < this.stock.length; j++) {
                if (this.stock[j].idProducto === carcasa.id) {
                    numUnidadesStock += this.stock[j].unidades;
                }
            }

            s += `<tr><td>${carcasa.id}</td><td>${carcasa.nombre}</td><td>${numUnidadesStock}</td></tr>`;
        }

        s += "</tbody></table>";
        return s;

    }

    numCarcasaStock() { //return number

        let resultado = 0;

        for (let i = 0; i < this.stock.length; i++) {
            const prodStock = this.stock[i];

            for (let j = 0; j < this.catalogo.length; j++) {
                const producto = this.catalogo[j];

                if (producto.id === prodStock.idProducto && producto instanceof Carcasa) {
                    resultado += prodStock.unidades;
                    break; // Salir del bucle interno una vez que se encuentra la correspondencia
                }
            }
        }

        return resultado;

    }

    importeTotalStock() { //return number

        let resultado = 0;

        for (let i = 0; i < this.stock.length; i++) {
            const prodStock = this.stock[i];

            for (let j = 0; j < this.catalogo.length; j++) {
                const producto = this.catalogo[j];

                if (producto.id === prodStock.idProducto) {
                    resultado += prodStock.unidades * producto.precio;
                    break; // Salir del bucle interno una vez que se encuentra la correspondencia
                }
            }
        }

        return resultado;

    }
}

class StockProducto {
    constructor(idProducto, unidades) {
        this.idProducto = idProducto;
        this.unidades = unidades;
    }

    toHTMLRow() { //return htmlRow

    }
}

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString() { //return string

    }

}

class Movil extends Producto {
    constructor(id, nombre, precio, modelo, android) {
        super(id, nombre, precio);
        this.modelo = modelo;
        this.android = android;
    }

    toHTMLRow() { //return htmlRow
        let and = "No android";
        if (this.android) and = "Android";

        return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${and}</td></tr>`;
    }
}

class Carcasa {
    constructor(id, nombre, precio, material) {
        super(id, nombre, precio);
        this.material = material;
    }

    toHTMLRow() {//return htmlrow
        return `<tr><td>${this.id}</td><td>${this.nombre}</td><td>${this.precio}</td><td>${this.material}</td></tr>`;
    }
}