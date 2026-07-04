//=============================
// FORMULARIO DE CONTACTO
//=============================

const formulario = document.getElementById("formulario");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const comentario = document.getElementById("comentario").value.trim();

        const mensaje = document.getElementById("mensaje");

        if(nombre === "" || correo === "" || comentario === ""){

            mensaje.style.color = "tomato";
            mensaje.textContent = "⚠️ Debes completar todos los campos.";

            return;

        }

        mensaje.style.color = "#7CFC00";
        mensaje.textContent = "✅ Mensaje enviado correctamente.";

        formulario.reset();

    });

}