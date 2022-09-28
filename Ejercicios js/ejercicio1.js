class Publicacion{
    constructor(titulo,precio){
    this._titulo=titulo;
    this._precio=precio;
    }

    set titulo(titulo){
        this._titulo=titulo;
    }

    set precio(precio){
        this._precio;
    }

    get titulo(){
        return this._titulo;
    }

    get precio(){
        return this._precio;
    }
    PublicacionLibro(){
        return `Titulo: ${this._titulo}, Precio: ${this._precio}, Numpag: ${this._numpag}`;
    }
    
    PublicacionDiscocompacto(){
        return `Titulo: ${this._titulo}, Precio: ${this._precio}, Duracion: ${this._duracion}`;
    }
}

const ob=new Publicacion();
console.log(typeof(ob));

class Libro extends Publicacion{
    constructor (titulo,precio,numpag){
    super(titulo,precio);
    this._numpag=numpag;
    }
    set numpag(numpag){
        this._numpag=numpag;}

    get numpag(){
        return this._numpag;
    }
}

class Discocompacto extends Publicacion{
    constructor (titulo,precio,duracion){
    super(titulo,precio);
    this._duracion=duracion;
    }
    set duracion(duracion){
        this._duracion=duracion;}

    get duracion(){
        this._duracion;
    }
}


const PL1=new Libro('La muerte de artemio cruz',35000,344,);
const PL2=new Libro('Cien años de soledad',85000,471,);

const PDC1=new Discocompacto('Abbey Road',140000,'47:03 min');
const PDC2=new Discocompacto('Appetite for destruction',155000,'53:55 min');

console.log(PL1.PublicacionLibro());
console.log(PL2.PublicacionLibro());


console.log(PDC1.PublicacionDiscocompacto());
console.log(PDC2.PublicacionDiscocompacto());



//console.log(ob.#nombre)