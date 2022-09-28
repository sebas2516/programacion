class persona{
    constructor(nombre, documento){
        this._nombre=nombre;
        this._documento=documento;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    set documento(documento){
    this._documento=documento;
    }

    get nombre(){
    return this._nombre;
    }

    get documento(){
    return this._documento;
    }
}
const ob=new persona();
console.log(typeof(ob));

class Aprendiz extends Persona{
    constructor(nombre,documento,ficha,programa){
        super(nombre,documento);
        this._ficha=ficha;
        this._programa=programa;
    }

    set ficha(ficha){
        this._ficha=ficha;
    }

    set programa(programa){
        this._programa=programa;
    }

    get ficha(){
        return this._ficha;
    }
    get programa(){
        return this._programa;
    }

    datoscompletos(){
        return  `$(this._ficha`
    }
}
const ap1=new Aprendiz("JuaN Florez ",54321,2453232,"ADSI");
console.log(ap1.nombre);
console.log(ap2.programa)