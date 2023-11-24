const input =require("prompt-sync")({sigint: true})

let cadenas = []
let cadena

while (true){
    cadena = input ("Introduce una palabra: ")
    if (cadena === "cancelar") {
        break
    }
cadenas.push(cadena)
}
const cadenaConc = cadenas.join(" - ")
console.log ("Las palabras son:" + cadenaConc)