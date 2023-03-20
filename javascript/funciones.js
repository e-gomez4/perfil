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

  const boton = document.getElementById("mostrar-menu");
  const menu = document.getElementById("dropdown-menu");

  boton.addEventListener("click", function() {
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

  const botonIniciar = document.getElementById("botonIniciar");
  const divPrincipal = document.getElementById("contenedorPrincipal");
  const divBoton = document.getElementById("divBoton");
  
  botonIniciar.addEventListener("click", function() {
    divBoton.style.display = "none";
    botonIniciar.style.display = "none"; // oculta el botón
    divPrincipal.style.display = "block"; // muestra el div principal
  });
});

