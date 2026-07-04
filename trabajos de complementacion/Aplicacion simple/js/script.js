function agregarTarea(){

let texto=document.getElementById("tarea").value.trim();

if(texto===""){

alert("Ingrese una tarea.");

return;

}

let lista=document.getElementById("lista");

let li=document.createElement("li");

let span=document.createElement("span");

span.textContent=texto;

let botones=document.createElement("div");

botones.className="botones";

let completar=document.createElement("button");

completar.innerHTML="✔";

completar.className="completar";

completar.onclick=function(){

li.classList.toggle("realizada");

}

let eliminar=document.createElement("button");

eliminar.innerHTML="🗑";

eliminar.className="eliminar";

eliminar.onclick=function(){

li.remove();

}

botones.appendChild(completar);

botones.appendChild(eliminar);

li.appendChild(span);

li.appendChild(botones);

lista.appendChild(li);

document.getElementById("tarea").value="";

}