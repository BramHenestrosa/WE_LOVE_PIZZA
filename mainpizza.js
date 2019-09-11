
//inputs
let nombre = document.getElementById("nombre")
let telefono = document.getElementById("telefono")
let direccion = document.getElementById("direccion")
let ingrediente = document.getElementById("ingrediente")

//containers
let pepe = document.getElementById("pepe")

//button
let accion = document.getElementById("accion")

const datos = () => {

    nombreText.innerHTML=nombre.value;
    telefonoText.innerHTML=telefono.value;
    direccionText.innerHTML=direccion.value;

    let resultPizza = ingrediente.value;
    let pizzaFinal = resultPizza.toUpperCase();

    // console.log(pizzaFinal);

    if (pizzaFinal === "PEPERONI") {
        pepe.classList.remove("d-none")

    } else if (pizzaFinal === "PIÑA") {
        hawa.classList.remove("d-none")


    }else if (pizzaFinal === "ACEITUNAS"){
        aceituna.classList.remove("d-none")

    } else {

        console.log("nojala")

    }

}

accion.addEventListener("click", datos)
