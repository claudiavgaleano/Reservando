class Reserva {
    constructor(horario, personas, precio, codigo) {
        this.horario = horario;
        this.cantidadDePersonas = personas;
        this.precioPorPersona = precio;
        this.codigoDeDescuento = codigo;
    }
    precioBase(){
        return this.cantidadDePersonas * this.precioPorPersona;
    };
    adicionalPorHorario(horario){
        var adicionales = 0;
        
        while(this.horario.getMinutes()>=60){
            horario.setHours(this.horario.getHours()+1);
            horario.setMinutes(this.horario.getMinutes()-60);
        }
        if (13 <= horario.getHours() && horario.getHours() <= 14 || (20 <= horario.getHours() && horario <= 21)) {
            adicionales += (5 * this.precioBase())/100;
        }
        if ((horario.getDay()== 0) || (horario.getDay()== 5) || (horario.getDay()== 6)){
            adicionales += (10 * this.precioBase())/100;
        }
        
        return adicionales;
        
    };

    descuentoPorGrupo(cantidadDePersonas){
        var descuento = 0;
        if(cantidadDePersonas >= 4 && cantidadDePersonas <= 6) {
            descuento += (5 * this.precioBase())/100;
        }
        if(cantidadDePersonas >= 7 && cantidadDePersonas <= 8) {
            descuento += (10 * this.precioBase())/100;
        }
        if(cantidadDePersonas >8) {
            descuento += (15 * this.precioBase())/100;
        }        
        return descuento;
    };
    descuentoPorCodigo(codigoDeDescuento){
        var descuento;       
        switch (codigoDeDescuento) {
            case 'DES15':
                descuento = (15 * this.precioBase)/100;
            break;
            case 'DES200':
                descuento = 200;
            break;
            case 'DES1':
                descuento = this.precioPorPersona;
            break;
            default:
                descuento = 0;
           
        }        
        return descuento;
    };
    precioTotal(){       
        return this.precioBase() + this.adicionalPorHorario(this.horario) -this.descuentoPorCodigo(this.codigoDeDescuento)-this.descuentoPorGrupo(this.cantidadDePersonas);
    };


}


