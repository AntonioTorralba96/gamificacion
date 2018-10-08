'use strict';

module.exports = function (Juego) {
    /**
     * Da nombre
     * @param {Function(Error, string)} callback
     */

    Juego.getName = function (callback) {
        var nombre;
        // TODO
        callback(null, nombre);
    };

    /**
     * da nombre
     * @param {Function(Error, string)} callback
     */

    Juego.prototype.getNameInstancia = function (callback) {
        //var nombre;
        // TODO
        callback(null, this.nombre);
    };


};
