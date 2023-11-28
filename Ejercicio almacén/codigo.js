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
  let tipo = document.querySelectorAll("[name=txtTipo]:checked").value;

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