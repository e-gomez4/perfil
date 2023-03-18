function mostrarDivPrincipal() {
    const boton = document.getElementById("botonIniciar");
    const divPrincipal = document.getElementById("contenedorPrincipal");
    
    boton.addEventListener("click", function() {
        setTimeout(boton.style.display = "none",
        divPrincipal.style.display = "block", 3000)
      
    });
}