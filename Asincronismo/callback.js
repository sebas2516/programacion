function pruebacallback(callback1,callback2,name){
    setTimeout(() => {
       console.log('dentro de pruebacallback')
    }, 2000);
    callback(name); 
}
function saludo(nombre){
    console.log(`hola ${nombre}`)
}

function cuentraletras (nombre){
    console.log(nombre.length);
}
pruebacallback(cuentraletras,saludo,'ana');
