const input =require("prompt-sync")({sigint: true})

let Cancelar = false
let numInput
let num
let suma = 0

while (!Cancelar) {
    numInput = input ('Dime un número para sumar->')

    if (Number(numInput)) {
        num = Number(numInput)
        suma += num
    }  else if (numInput !== 'cancelar'){
        console.log ('Introduce un número')
    }else {
        Cancelar = true
    }
}

console.log ('La suma es igual a ' + suma)