const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

enlace.addEventListener("click", function(){

enlaces.forEach(item=>item.classList.remove("activo"));

this.classList.add("activo");

});

});