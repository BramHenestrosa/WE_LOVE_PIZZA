//inputs
// let peque = document.getElementById("peque")
// // let mediana = document.getElementById("inputGroupSelect01")
// // let grande = document.getElementById("inputGroupSelect01")


// const precio = () => {

// preciotext.innerHTML=peque.value


// }

// precio();



let select = document.getElementById('precioTamano');

console.log(select)

let preciosPizza = document.getElementById('preciosPizza')

//let option = document.getElementsByTagName('option')
  const valores = () => {
        preciosPizza.innerHTML = 'PRECIO FINAL : ' + select.value

  };

  select.addEventListener('change',valores)