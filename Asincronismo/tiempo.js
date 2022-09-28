console.log('hola');
setTimeout(() => {
    console.log('interrupcion por timeout');    
}, 2000);
setTimeout(function(){
    console.log('settimeout con funcion basica')
},1000)
function externa(){
    console.log('soy extrena al settimeout')
}
setTimeout(externa,500);

console.log('mundo');

function saludos(){
    console.log('mundo');
}
setTimeout(saludos);
console.log('debo ejecutarme antes del time out')
function saludos(nombre,rol){
    console.log(`hola,mi nombre es ${nombre}`);
    console.log(`yo soy ${rol}`);
}

saludos('miguel','estudiante');
setTimeout(saludos, 3000, "nathan", "programador");
    



