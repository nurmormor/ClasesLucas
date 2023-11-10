class Fichero{
    constructor(nombreFichero, tamaño){
        this.nombreFichero=nombreFichero;
        this.tamaño=tamaño;
    }

    extension (){
        return this.nombreFichero.split(".").pop();
    }

    getDatos  (){
        return `<p> Este fichero se llama: ${this.nombreFichero} (${this.tamaño} KB)  y su extensión es: ${this.extension()}`;

    }
}

class Cancion extends Fichero{
    constructor(nombreFichero, tamaño, nombreCancion, duracion){
        super(nombreFichero,tamaño);
        this.nombreCancion=nombreCancion;
        this.duracion=duracion;
    }
    getDatos (){
        return `<p> El nombre de la cancion es ${this.nombreCancion} su duracion: (${this.duracion} segundos) y el tamaño del fichero: (${this.tamaño} KB)`;

    }

}
