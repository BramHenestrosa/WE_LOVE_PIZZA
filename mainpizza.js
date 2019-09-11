let nombre = document.getElementById("nombre")
let telefono = document.getElementById("telefono")
let direccion = document.getElementById("direccion")
let ingrediente = document.getElementById("ingrediente")


let accion = document.getElementById("accion")

const datos = () => {

nombreText.innerHTML=nombre.value;
telefonoText.innerHTML=telefono.value;
direccionText.innerHTML=direccion.value;

// let resultPizza = pizza.value;
// let pizzaFinal = resultPizza.toUpperCase();








}


accion.addEventListener ("click", datos)
