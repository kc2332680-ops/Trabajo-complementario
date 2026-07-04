const mensaje = document.getElementById("mensaje");

document.getElementById("agregar").addEventListener("click", function(){

mensaje.textContent = "Ha seleccionado la opción Agregar.";

});

document.getElementById("consultar").addEventListener("click", function(){

mensaje.textContent = "Ha seleccionado la opción Consultar.";

});

document.getElementById("listar").addEventListener("click", function(){

mensaje.textContent = "Ha seleccionado la opción Listar.";

});

document.getElementById("actualizar").addEventListener("click", function(){

mensaje.textContent = "Ha seleccionado la opción Actualizar.";

});