module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

    app.models.Juego.create([{
      nombre: 'Ajedrez',
      descripcion: 'Jugadores min 3',
	imagen: null,
	grupal: 'true'
    }, {
      nombre: 'Tenis',
      descripcion: 'Jugadores 2',
	imagen: null,
	grupal: 'true'
    }, {
      nombre: 'Baloncento',
      descripcion: 'Jugadores min 3',
	imagen: null,
	grupal: 'true'
    }], function(err, Juegos) {
      if (err) throw err;

      console.log('Models created: \n', Juegos);
    });
  });
};
