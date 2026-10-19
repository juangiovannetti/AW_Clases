//funciones


//Declaracion

function suma(a, b){
    console.log(a + b)
}

//ivocar / ejecutar / llamar
const resultado = suma(10,2)

console.log(resultado)

//funcion flecha -> anónima
//fastarrow
//const resta = (a, b)=>{
//    return a - b
//}

//const resta = (a, b)=> a + b
//
//const resta =  a => a + 5


// Callback

const a = (cb)=>{
    console.log('Se ejecutó a')
    cb('hola')
}

// Nuestro callback
const b = ()=>{('Se ejecutó el callback b' + saludo)
    
}
//console.log(b)
//a(b())

//a(()=>){
    
//}