class Cuenta{
    constructor(codigo,nombre,balance){
    this._codigo=codigo;
    this._nombre=nombre;
    this._balance=balance;
    }

    set codigo(codigo){
        this._codigo=codigo;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    set documento(balance){
        this._balance=balance;
    }

    get codigo(){
        return this._codigo;
    }

    get nombre(){
        return this._nombre;
    }

    get balance(){
        return this._balance;
    }
    Datoscuenta(){
        return `Codigo: ${this._codigo}, Nombre: ${this._nombre}, Balance: ${this._balance}, Tipocuenta: ${this._tipocuenta}, Tipopersona: ${this._tipopersona}`;
    }
}

const ob=new Cuenta();
console.log(typeof(ob));

class Datos extends Cuenta{
    constructor(codigo,nombre,balance,tipocuenta,tipopersona){
        super(codigo,nombre,balance);
        this._tipocuenta=tipocuenta;
        this._tipopersona=tipopersona;
    }
    set tipocuenta(tipocuenta){
        this._tipocuenta=tipocuenta;
    }
    set tipopersona(tipopersona){
        this._tipopersona=tipopersona;
    }

    get tipocuenta(){
        return this._tipocuenta;
    }

    get tipopersona(){
        return this._tipopersona
    }
}

const D1=new Datos(12345,'Sebastian Roa',750000,'ahorros','natural');
const D2=new Datos(54321,'REPAIR PC',8500000,'cheques','juridica');

console.log(D1.Datoscuenta());


console.log(D2.Datoscuenta());