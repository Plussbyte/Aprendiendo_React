
const datos = {
    nombre: 'Daniel',
    apellidos: 'Correa',
    edad: 19,
    direccion:{
        carrera: 80,
        numero1: 116,
        numero2: 46,
        ciudad: 'medellin'
    }
}

// const datos2 = datos -->  nunca hacer esto.

console.log(datos)
console.log(`La ciudad de ${datos.nombre} es ${datos.direccion.ciudad}`)