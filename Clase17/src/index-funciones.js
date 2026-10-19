const numeros = [2,8,12,50]

// //foreach -> loop
// // el callback se ejecuta una ves por elemento 
// numeros.forEach((numero, idex, arreglo)=>{
//     console.log(numero, indice, arreglo)
// })

//map -> loop -> devuelve un nuevo arreglo

const numerosIncrementados = numeros.map((numero)=>{
    return numero + 1
})
console.log(numerosIncrementados)

// filter (nuevo arreglo) y find un (valor)