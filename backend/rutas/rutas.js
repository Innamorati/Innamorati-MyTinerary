const Router = require('express').Router()

const controladorCiudades = require('../controladores/controladorCiudades')

const {obtenerCiudades} = controladorCiudades

Router.route('/ciudades')
.get(obtenerCiudades)

module.exports = Router