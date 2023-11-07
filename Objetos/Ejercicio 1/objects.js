class Perro {
    constructor (nombre, edad, raza){
        this.nombre=nombre;
        this.edad=edad;
        this.raza=raza;
    }

     mostrarDatos(){

        return `${this.nombre} ${this.edad} ${this.raza}`; //cadena literal

    }
}