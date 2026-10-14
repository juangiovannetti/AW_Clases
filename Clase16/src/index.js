//estrecutra de control -> de bucle 

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//Arreglo indice arranca de 0
const numeros = [1,2,3,4,5,[1,[1]]]
const numeros2 = [1,2,3,4,5,6]

 console.log(numeros[5][1][0])
 numeros[2] = 5

 for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i])
}

//objetos
//propiedad : valor
const persona = {
    edad: 20,
    estudia: true,
    nombre: "Juan",
    redes: [
        "instagram",
        "tiktok",
        "youtube"
    ],
    otros:{
        pasatiempos: "pintar",
        mascotas: 2
    },
    caminar: function name(params){
        //
    }
}
persona.nacionalidad = "Argentina"

console.log(persona.edad)

console.log(persona.redes[1])

console.log(persona.otros.pasatiempos)

