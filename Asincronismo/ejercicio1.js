var x=1;
for (var i=0; i < x;i++ ){
setTimeout (() => {
    console.log('miguel');    
}, 1000);
}  
var x=1;  
for (var i=0; i < x;i++ ){
    setTimeout (() => {
        console.log('juan');    
    }, 2000);
    }    
    var x=1;  
    for (var i=0; i < x;i++ ){
        setTimeout (() => {
            console.log('felipe');    
        }, 3000);
        } 
//llenar un arreglo con n numeros ,
console.log((Math.random()*200)+50)-50;
/*hacer una funcion para llenar numeroos aleatoreos ,esa funcion sela bva a pasar a un settimeout que dure
 3 segundos mientrs trascurre el tiempo llenar un bector de 1 atraves de una funcion*/
 var vector= [];
 function aleatoreo(){
    
     var a =Math.random((Math.random))*25;
    setTimeout (()=> {
    console.log (`${a}`);
    },3000); 
}  
console.log(aleatoreo());
//jhsdia
x=Math.random(Math.random()* (25-5) +5)

function NumeriosAleatorios(limite) {
    var numeros = [];
    for (let i =0; i < limite; i++) {
        numeros[i]=Math.random(Math.random() * (100-20) + 20);
    }
    console.log(numeros)
}

function numerosUno(limite){
    var numeros1=[]
    for (let i =0;i < limite;i++){
        numeros1[i]=1
    }
    console.log(numeros1)
}

setTimeout(NumeriosAleatorios ,300,x)
numerosUno(x)
// EJERCICIO DE RECETA
console.log ('vamos a preparar pasta');
console.log ('vamos a los pasos');
function pasta(agua,pasta,sal,aceite){
    setTimeout(() => {
        console.log('interrupcion por timeout');    
    }, 2000);
setTimeout(() => {
   console.log('primero ponemos a herbir el agua'); 
}, 1000);
setTimeout(() => {
   console.log('despues le echamos aceite') 
}, 2000);
setTimeout(() => {
   console.log ('despues de 1 minuto le agregamos la sal'); 
}, 3000);

pasta();
agua();
}