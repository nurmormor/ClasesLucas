class Persona {
    // Constructor de la clase
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} (${this.edad} años).`);
    }
  }
  class Alumno extends Persona {
    // Constructor de la clase que llama al padre
    constructor(nombre, edad, curso) {
      super(nombre,edad);
      this.curso = curso;  //Importante: super se llama antes siempre
    }
  
    saludar() {
      super.saludar();  //llama al método del padre que hemos sobreescrito
      console.log(`¡Hola, soy ${this.nombre}! )`); //ERROR PREGUNTAR
    }
  }