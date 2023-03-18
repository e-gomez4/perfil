document.addEventListener("DOMContentLoaded", function() {
  
  const userSeleccion = document.getElementById("seleccion-usuario");
  const seleccionGuardada = localStorage.getItem('seleccionUsuario');
  if (seleccionGuardada) {
    userSeleccion.value = seleccionGuardada;
  }
  userSeleccion.addEventListener("change", function() {
  const seleccion = userSeleccion.value;
  if (seleccion == "eng") {
      window.location.href = "/eng/index.html";
  }
  });
});

function mostrarDivPrincipal() {
  const boton = document.getElementById("botonIniciar");
  const divPrincipal = document.getElementById("contenedorPrincipal");
  
  boton.addEventListener("click", function() {
    boton.style.display = "none"; // oculta el botón
    divPrincipal.style.display = "block"; // muestra el div principal
  });
}