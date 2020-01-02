var expect = chai.expect;


describe('Dada la función reservarHorario() de un Restaurante.', function() {
    var restauranteTaoUptown = listado.restaurantes[0];  
    
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', function() {
        var horariosDisponibles = restauranteTaoUptown.horarios;
        restauranteTaoUptown.reservarHorario(restauranteTaoUptown.horarios [0]);
        expect(restauranteTaoUptown.horarios.length).to.be.at.most(horariosDisponibles.length);
    });
    
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function() {
        var horariosDisponibles = restauranteTaoUptown.horarios;
        restauranteTaoUptown.reservarHorario('17:00');
        expect(restauranteTaoUptown.horarios.length).to.equal(horariosDisponibles.length);
    });

    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual, con los mismos elementos en la misma posición.', function() {
        var horariosDisponibles = restauranteTaoUptown.horarios;
        restauranteTaoUptown.reservarHorario('17:00');
        expect(restauranteTaoUptown.horarios).to.eql(horariosDisponibles);
    });

    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', function() {
        var horariosDisponibles = restauranteTaoUptown.horarios;
        restauranteTaoUptown.reservarHorario();
        expect(restauranteTaoUptown.horarios.length).to.equal(horariosDisponibles.length);
    }); 
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual, con los mismos elementos en la misma posición.', function() {
        var horariosDisponibles = restauranteTaoUptown.horarios;
        restauranteTaoUptown.reservarHorario();
        expect(restauranteTaoUptown.horarios).to.eql(horariosDisponibles);
    });
});

 describe('Dada la función obtenerPuntuacion() de un Restaurante', function() {
    var restauranteTaoUptown = listado.restaurantes[0];
    var cantidadCalificaciones = restauranteTaoUptown.calificaciones.length;
    var sumatoriaCalificaciones = restauranteTaoUptown.calificaciones.reduce((a,b) => a + b);   

    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function() {
        var promedio = Math.round(sumatoriaCalificaciones/cantidadCalificaciones*10)/10;
        expect(restauranteTaoUptown.obtenerPuntuacion()).to.equal(promedio);        
    });

    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function() {
        restauranteTaoUptown.calificaciones = [];
        expect(restauranteTaoUptown.obtenerPuntuacion()).to.equal(0);
    });    
}); 

describe('Dada la función calificar() de un Restaurante', function() {
    var restauranteVapiano = listado.restaurantes[16];          
    
    it('Si la calificación es menor a 0 el array de calificaciones no se modifica.', function() {
        var arrayCalificaciones = restauranteVapiano.calificaciones.length;
        restauranteVapiano.calificar(-2) 
        expect(arrayCalificaciones).to.equal(restauranteVapiano.calificaciones.length);        
    });
    it('Si la calificación es igual a 0, el array de calificaciones no se modifica.', function() {
        var arrayCalificaciones = restauranteVapiano.calificaciones.length;
        restauranteVapiano.calificar(0)
        expect(arrayCalificaciones).to.equal(restauranteVapiano.calificaciones.length);
    }); 
    it('Si la calificación es mayor a 0 y menor a 10, se agrega la calificación dada al listado de calificaciones.', function() {
        var arrayCalificaciones = restauranteVapiano.calificaciones.length;
        restauranteVapiano.calificar(5); 
        expect(arrayCalificaciones).to.be.at.most(restauranteVapiano.calificaciones.length);        
    });  
    it('Si la calificación es igual a 10 se agrega la calificación dada al listado de calificaciones.', function() {
        var arrayCalificaciones = restauranteVapiano.calificaciones.length;
        restauranteVapiano.calificar(10);  
        expect(arrayCalificaciones).to.be.at.most(restauranteVapiano.calificaciones.length);
    });  
    it('Si la calificación es mayor a 10, el array de calificaciones no se modifica.', function() {
        var arrayCalificaciones = restauranteVapiano.calificaciones.length;
        restauranteVapiano.calificar(20)
        expect(arrayCalificaciones).to.equal(restauranteVapiano.calificaciones.length);
    }); 
    it('Si la calificación está vacía, el array de calificaciones no se modifica.', function() {
        var arrayCalificaciones = restauranteVapiano.calificaciones.length;
        restauranteVapiano.calificar()
        expect(arrayCalificaciones).to.equal(restauranteVapiano.calificaciones.length);
    }); 
}); 

describe('Dada la funcionalidad de Buscar a un Restaurante por Id', function() {
    var restauranteJolly = listado.restaurantes[4];

    it('Si el Id es menor a 0 retorna "No se ha encontrado ningún restaurant" .', function() {
        expect(listado.buscarRestaurante(-2)).to.equal("No se ha encontrado ningún restaurant");
    });
    it('Si el Id es igual a 0, retorna "No se ha encontrado ningún restaurant".', function() {
        expect(listado.buscarRestaurante(0)).to.equal("No se ha encontrado ningún restaurant");
    }); 
    it('Si el Id es mayor a 0 y menor al largo del array de restaurantes, devuelve el restaurante cuyo ID coincida.', function() {
        expect(listado.buscarRestaurante(5)).to.equal(restauranteJolly);
    });  
    it('Si el Id es mayor al largo del array de restaurantes, retorna "No se ha encontrado ningún restaurant".', function() {
        expect(listado.buscarRestaurante(35)).to.equal("No se ha encontrado ningún restaurant");
    }); 
    it('Si el Id está vacío, retorna "No se ha encontrado ningún restaurante".', function() {
        expect(listado.buscarRestaurante()).to.equal("No se ha encontrado ningún restaurant");
    }); 
}); 

describe('Dada la funcionalidad de Obtener un Restaurante', function() {    
    it('Si se pasan parametros null, no se realiza el filtro.', function() {
        var restaurantesFiltrados = listado.restaurantes;
        listado.obtenerRestaurantes(null, null, null);
        expect(listado.restaurantes.length).to.equal(restaurantesFiltrados.length);
    });
    it('Si se pasan parámetros inexistentes, el array de restaurantes filtrados queda vacío', function() {
        
        expect(listado.obtenerRestaurantes('Asado', 'Rio Cuarto', '02:00')).to.eql([]);
    }); 
    it('Si se pasan parametros que coincidan con un solo restaurante, el filtro devuelve ese único restaurante.', function() {
        expect(listado.obtenerRestaurantes("Hamburguesa","Berlín","11:30")).to.eql([listado.restaurantes[2]]);
    }); 
    
}); 
//Que un restaurante calcule correctamente su precio base.
//Que un restaurante calcule correctamente su precio final, contemplando bien los descuentos y los adicionales.
 describe ('Dada la nueva funcionalidad Reserva', function() {    

    it('Valida que un restaurante calcule correctamente su precio base.', function(){
        var reservaPrueba1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reservaPrueba1.precioBase()).to.be.equal (8*350);
    });
    it('Valida que un restaurante calcule correctamente su precio final, contemplando bien los descuentos y los adicionales.', function(){
        var reservaPrueba2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, 'DES200');
        expect(reservaPrueba2.precioTotal()).to.be.equal ((2*150) + 0 - 200);
    });
 });