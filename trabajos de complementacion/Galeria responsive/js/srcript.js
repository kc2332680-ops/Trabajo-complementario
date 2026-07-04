function filtrar(categoria){

let tarjetas=document.querySelectorAll(".card");

tarjetas.forEach(function(card){

if(categoria==="todos"){

card.classList.remove("ocultar");

}else{

if(card.classList.contains(categoria)){

card.classList.remove("ocultar");

}else{

card.classList.add("ocultar");

}

}

});

}