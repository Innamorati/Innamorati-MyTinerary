const Router = require('express').Router()

const controladorCiudades = require('../controladores/controladorCiudades')

const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad} = controladorCiudades
Router.route('/ciudades')
.get(obtenerCiudades)
.post(cargarCiudad)


Router.route('/ciudades/:_id')
.delete(borrarCiudad)
.put(modificarCiudad)
module.exports = Router