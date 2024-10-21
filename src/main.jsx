import { getHeroesByID } from "./bases/08-importacion-y-exportacion.basico";

const promesa = new Promise((resolve,reject)=>{

    setTimeout(() => {
        const heroe = getHeroesByID(2)
        console.log(heroe)
    }, 3000);

})

promesa.then(()=>{
    console.log('then Promesa ejecutada correctamente despues de 3 segundos')
})