setTimeout(function mostrarDivPrincipal() {
    const boton = document.getElementById("botonIniciar");
    const divPrincipal = document.getElementById("contenedorPrincipal");
    
    boton.addEventListener("click", function() {
        setTimeout()
      boton.style.display = "none"; // oculta el botón
      divPrincipal.style.display = "block"; // muestra el div principal
    });
}, 0001)