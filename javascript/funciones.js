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

  const bodyPrincipal = document.getElementById("principal");
  const botondarkmode = document.getElementById("darkmode");
  const divDespuesHeader = document.getElementById("despuesHeader");
  const divSegundoHeader = document.getElementById("segundoHeader");
  const divtercerHeader = document.getElementById("tercerHeader");
  var modoOscuro = false;

  botondarkmode.addEventListener("click", function() {
    if (modoOscuro) {
      // Código para revertir el modo oscuro
      var letralista = document.getElementsByClassName("letra-divs");
      for (var i = 0; i < letralista.length; i++) {
        letralista[i].style.color = "black";
      }
      bodyPrincipal.style.backgroundImage = "none";
      bodyPrincipal.style.backgroundColor = "#e7e7e7";
      divDespuesHeader.style.backgroundColor = "#c2c2c2";
      divSegundoHeader.style.backgroundColor = "#c2c2c2"; 
      divtercerHeader.style.backgroundColor = "#c2c2c2";
      var titulosdivs = document.getElementsByClassName("titulos-divs");
      for (var i = 0; i < titulosdivs.length; i++) {
        titulosdivs[i].style.color = "black";
      }
      modoOscuro = false;
    } else {
      // Código para aplicar el modo oscuro
      var letralista2 = document.getElementsByClassName("letra-divs");
      for (var i = 0; i < letralista2.length; i++) {
        letralista2[i].style.color = "white";
      }
      bodyPrincipal.style.backgroundImage = "url(../imagenes/body-background3.jpg)"
      divDespuesHeader.style.backgroundColor = "#1a1a1a";
      divSegundoHeader.style.backgroundColor = "#1a1a1a"; 
      divtercerHeader.style.backgroundColor = "#1a1a1a";
      var titulosdivs = document.getElementsByClassName("titulos-divs");
      for (var i = 0; i < titulosdivs.length; i++) {
        titulosdivs[i].style.color = "white";
      }
      modoOscuro = true;
    }
  });  
});

