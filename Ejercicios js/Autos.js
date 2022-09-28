class Autos{
    constructor(numseriemotor, marca, año, precio){
        this._numseriemotor=numseriemotor;
        this._marca=marca;
        this._año=año;
        this._precio=precio;
    }

    set numseriemotor(numseriemotor){
        this._numseriemotor=numseriemotor;
    }
    set marca(marca){
        this._marca;
    }
    set año(año){
        this._año;
    }
    set precio(precio){
        this._precio=precio;
    }

    get numseriemotor(){
        return this._numseriemotor;
    }
    get marca(){
        this._marca;
    }
    get año(){
        this._año
    }
    get precio(){
        this._precio;
    }
    Nuevoautocompacto(){
        return `numero serie motor: ${this._numseriemotor}, marca: ${this._marca}, año: ${this._año}, precio: ${this._precio}, cantidadpasajeros: ${this._cantidadpasajero}`;
    }

}
const Inventario=new Autos();
console.log(typeof(Inventario));

class AutoCompacto extends Autos{
    constructor(numseriemotor, marca, año, precio, cantidadpasajero){
        super(numseriemotor, marca, año,precio);
        this._cantidadpasajero=cantidadpasajero;
    }

    set cantidadpasajero(cantidadpasajero){
        this._cantidadpasajero=cantidadpasajero;
    }

    get cantidadpasajero(){
        this._cantidadpasajero;
    }
}
class AutodeLujo extends Autos{
    constructor(numseriemotor, marca, año, precio, cantidadpasajero){
        super(numseriemotor, marca, año,precio);
        this._cantidadpasajero=cantidadpasajero;
    }

    set cantidadpasajero(cantidadpasajero){
        this._cantidadpasajero=cantidadpasajero;
    }

    get cantidadpasajero(){
        this._cantidadpasajero;
    }
}
class Camionetas extends Autos{
    constructor(numseriemotor, marca, año, precio, kgs, ejerodadas){
        super(numseriemotor, marca, año,precio);
        this._cantidadpasajero=cantidadpasajero;
        this._ejerodadas;
    }

    set kgs(kgs){
        this._kgs=kgs;
    }
    set ejerodadas(ejerodadas){
        this._ejerodadas=ejerodadas;
    }

    get kgs(){
        this._kgs;
    }
    get ejerodadas(){
        this._ejerodadas;
    }
}
class Vagonetas extends Autos{
    constructor(numseriemotor, marca, año, precio, kgs){
        super(numseriemotor, marca, año,precio);
        this._cantidadpasajero=cantidadpasajero;
        this._kgs=kgs;
    }

    set kgs(kgs){
        this._kgs=kgs;
    }

    get kgs(){
        this._kgs;
    }
}

const AC1=new AutoCompacto(123456,'nissan versa',2006,75990000,4);


console.log(AC1.Nuevoautocompacto());