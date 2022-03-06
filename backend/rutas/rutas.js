const Router = require('express').Router()

const controladorCiudades = require('../controladores/controladorCiudades')

const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad} = controladorCiudades


Router.route('/todaslasciudades')
.get(obtenerCiudades)
.post(cargarCiudad)


Router.route('/ciudadad/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
module.exports = Router