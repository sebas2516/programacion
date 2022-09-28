class especificaciones{
    constructor(codigo,inf_basica,c_tecnicas,detalles,c_fisicas){
    this._codigo=codigo;
    this._inf_basica=inf_basica;
    this._c_tecnicas=c_tecnicas;
    this._detalles=detalles;
    this.c_fisicas=c_fisicas;
    }
    set codigo(codigo){
        this._codigo=codigo;
    }
    set inf_basica(inf_basica){
        this._inf_basica=inf_basica;
    }
    set c_tecnicas(c_tecnicas){
        this._c_tecnicas=c_tecnicas;
        }
     set detalles(detalles){
        this._detalles=detalles;
        }
    set c_fisicas(c_fisicas){
       this.c_fisicas=c_fisicas;
        }
        get codigo(){
            return this._codigo;
        }
        get inf_basica(){
            return this._inf_basica;
        }
        get c_tecnicas(){
            return this._c_tecnicas;
        }
        get detalles(){
            return this._detalles;
        }
        get c_fisicas(){
            return this.c_fisicas;
        }
    }

    module.exports=especificaciones
    
    
    
     
    
    ;