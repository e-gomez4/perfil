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
  const headerTop = document.getElementById("top");
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
      //headerTop.style.borderBottomColor = "#a4a5a594";
      divDespuesHeader.style.backgroundColor = "#c2c2c2";
      divDespuesHeader.style.borderColor = "#a4a5a594";
      divSegundoHeader.style.backgroundColor = "#c2c2c2"; 
      divSegundoHeader.style.borderColor = "#a4a5a594";
      divtercerHeader.style.backgroundColor = "#c2c2c2";
      divtercerHeader.style.borderColor = "#a4a5a594";
      botondarkmode.style.backgroundColor = "khaki"
      var titulosDesplegables = document.getElementsByClassName("titulo-desplegable");
      for (var i = 0; i < titulosDesplegables.length; i++) {
        titulosDesplegables[i].style.color = "black";
      }
      var imgDesplegables = document.getElementsByClassName("flecha-abajo");
      for (var i = 0; i < imgDesplegables.length; i++) {
        imgDesplegables[i].style.filter = "invert(0%)";
      }
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
      /*bodyPrincipal.style.backgroundImage = "linear-gradient(rgba(20, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../imagenes/body-background3.jpg)";*/
      bodyPrincipal.style.backgroundImage = "url(../imagenes/body-background3.jpg)";
      divDespuesHeader.style.transition = "1s ease"
      divDespuesHeader.style.backgroundColor = "#1a1a1a";
      divDespuesHeader.style.borderColor = "#429ba7";
      divSegundoHeader.style.transition = "1s ease"
      divSegundoHeader.style.backgroundColor = "#1a1a1a";
      divSegundoHeader.style.borderColor = "#429ba7";
      divtercerHeader.style.transition = "1s ease"
      divtercerHeader.style.backgroundColor = "#1a1a1a";
      divtercerHeader.style.borderColor = "#429ba7";
      botondarkmode.style.backgroundColor = "gray";
      var titulosDesplegables = document.getElementsByClassName("titulo-desplegable");
      for (var i = 0; i < titulosDesplegables.length; i++) {
        titulosDesplegables[i].style.color = "white";
      }
      var imgDesplegables = document.getElementsByClassName("flecha-abajo");
      for (var i = 0; i < imgDesplegables.length; i++) {
        imgDesplegables[i].style.filter = "invert(100%)";
      }
      var titulosdivs = document.getElementsByClassName("titulos-divs");
      for (var i = 0; i < titulosdivs.length; i++) {
        titulosdivs[i].style.color = "white";
      }
      modoOscuro = true;
    }
  }); 
  const divDesplegable1 = document.getElementById("desplegable1");
  const divDesplegableOculto1 = document.getElementById("desplegable-oculto1");
  const ImgDesplegable1 = document.getElementById("imagen-desplegable1");
  const divDesplegable2 = document.getElementById("desplegable2");
  const divDesplegableOculto2 = document.getElementById("desplegable-oculto2");
  const ImgDesplegable2 = document.getElementById("imagen-desplegable2");

  divDesplegable1.addEventListener("click", function() {
    if (divDesplegableOculto1.style.display === "none") {
      divDesplegableOculto1.style.display = "flex";
      ImgDesplegable1.style.transform = "rotate(180deg)";
    } else {
      divDesplegableOculto1.style.display = "none";
      ImgDesplegable1.style.transform = "rotate(0deg)";
    }
  });

  divDesplegable2.addEventListener("click", function() {
    if (divDesplegableOculto2.style.display === "none") {
      divDesplegableOculto2.style.display = "flex";
      ImgDesplegable2.style.transform = "rotate(180deg)";
    } else {
      divDesplegableOculto2.style.display = "none";
      ImgDesplegable2.style.transform = "rotate(0deg)";
    }
  });
});

