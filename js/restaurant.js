var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;    
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    return this.horarios.filter(horario => horario !== horarioReservado);
}  

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion <= 10) {
        this.calificaciones.push(nuevaCalificacion);
        return this.calificaciones;
    } else {
        return this.calificaciones;
    }
}

Restaurant.prototype.sumatoria = function(calificaciones) {
     if(calificaciones.length == 0) { 
        return 0;
    } else {
        return  calificaciones.reduce ((a,b) => a + b);        
    }  
}

Restaurant.prototype.promedio = function(dividendo, divisor) {
    if (divisor == 0) {
        return 0
    } else {
        var promedio = dividendo/divisor;
        return Math.round(promedio * 10) / 10;
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {                
    return this.promedio(this.sumatoria(this.calificaciones),this.calificaciones.length);
}



