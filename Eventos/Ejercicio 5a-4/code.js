//////////
//FUNCTIONS
///////////
function mostrarAlert(e){
    if (event.key === 'a') {
        alert('Tu nombre');
      }
      
      else if (event.key === 'e') {
        alert('Tu edad');
      }
}


//////////
//MAIN
//////////
document.addEventListener("keyup", mostrarAlert);
mostrarAlert(e);//funciona poniendo esto y sin ponerlo
