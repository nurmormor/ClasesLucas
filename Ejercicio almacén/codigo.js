"use strict"

//////////
//FUNCTIONS
/////////////

/**
 * Oculta todas las div.formulario asignándole la clase .oculto
 */
const ocultarTodosLosFormularios = () => {
  //1.- Añadimos la clase oculto a las div.formulario
  document.querySelectorAll(".formulario").forEach( //el punto es porque es una class
    formulario => formulario.classList.add("oculto")
  );
}

const altaDeProducto = () => {

  let idProducto = Number(document.querySelectorAll("[name=txtIdProducto]").value);
  let nombre = document.querySelectorAll("[name=txtNombre]").value;
  let precio = Number(document.querySelectorAll("[name=txtPrecio]").value);

  //comprobamos si es movil o carcasa
  let tipo = document.querySelector("[name=txtTipo]:checked").value;

  let oProducto; //creamos el producto que vamos a usar a continuacion

  if (tipo == "movil") {

    let modelo = document.querySelectorAll("[name=txtModelo]").value;
    let android = document.querySelectorAll("[name=txtAndroid]").value;

    //creamos el objeto movil
    oProducto = new Movil(idProducto, nombre, precio, modelo, android);
  } else {
    let material = document.querySelector("#txtMaterial").value;
    //creamos el objeto carcasa
    oProducto = new Carcasa(idProducto, nombre, precio, modelo, material);
  }

  //añadimos el producto si no se ha repetido el id en el alta

  if (almacen.altaProducto(oProducto)) {
    divListado.innerHTML = `El producto (${tipo}) ${nombre} con id ${idProducto} se ha añadido correctamente`;

  } else {
    divListado.innerHTML = `No se pudo añadir el producto (${tipo}) ${nombre} con id ${idProducto}. Ese id de producto ya existe en el almacén.`;
  }

}


//entrada o salida de stock

const entradaSalidaStock = () =>{

let idProducto = Number(document.querySelector("[name=txtIdProductoStock]").value);
let numUnidades = Number(document.querySelector("[name=txtNumUnidades]").value);

if (numUnidades>0){
  divListado.innerHTML=almacen.entradaStock(idProducto,numUnidades);
} else {
  divListado.innerHTML=almacen.salidaStock(idProducto, numUnidades);
}

}

const listadoCatalogo = () =>{
  divListado.innerHTML = almacen.listadoCatalogo();
}

const listadoStock = () =>{
  divListado.innerHTML = almacen.listadoStock();
}

////////////////
//MAIN
///////////////

ocultarTodosLosFormularios();

//2.- Añadimos los addEventListeners a los botones principales
document.querySelector("#btnFormAltaProducto").addEventListener("click", e => {
  ocultarTodosLosFormularios(); // cada vez que se clickee en un boton, se ocultaran el resto de formularios para que solo se abra el correspondiente
  document.querySelector("#frmAltaProducto").classList.remove("oculto");
});



document.querySelector("#btnFormEntradaSalidaStock").addEventListener("click", e => {
  ocultarTodosLosFormularios();
  document.querySelector("#frmEntradaSalidaStock").classList.remove("oculto");
});


//3.- Creamos el almacén (por defecto el array de Stock y de producto está vacío)
let almacen = new Almacen();

//4.- Añadimos el addEventListener al botón de alta de producto y modificación de Stock
document.querySelector("#btnAltaProducto").addEventListener("click", altaDeProducto);

document.querySelector("#btnEntradaSalidaStock").addEventListener("click", entradaSalidaStock);

//5. recuperamos la divisón de los listados
let divListado = document.querySelector("#listado");

//6.- Añadimos el addEventListener al botón de Listado de Catálogo y Stock
document.querySelector("#btnListadoCatalogo").addEventListener("click", listadoCatalogo);
document.querySelector("#btnListadoStock").addEventListener("click", listadoStock);


//////////////
// Borrar: creación de productos de prueba
//////////////


almacen.altaProducto( new Movil(1, "Móvil 1", 100, "Modelo 1", true) );
almacen.altaProducto( new Movil(2, "Móvil 2", 1000, "Modelo 2", false) );
almacen.altaProducto( new Carcasa(3, "Carcasa 1", 10, "madera") );
almacen.altaProducto( new Carcasa(4, "Carcasa 2", 100, "cuero") );

almacen.entradaStock(1, 10); // 10 * 100  = 1000
almacen.entradaStock(2, 1);  //  1 * 1000 = 1000
almacen.entradaStock(3, 10); // 10 * 10   =  100
almacen.entradaStock(3, -5); // -5 * 10   =  -50
almacen.entradaStock(4, 10); // 10 * 100  = 1000
                             //------------------
                             //             3050

console.log("Número de carcasas: " + almacen.numCarcasaStock() );
console.log("Número de importeTotalStock: " + almacen.importeTotalStock() );