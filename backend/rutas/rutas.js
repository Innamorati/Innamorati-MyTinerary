const Router = require('express').Router()


const controladorCiudades = require('../controladores/controladorCiudades')

const {obtenerCiudades, cargarCiudad, BorrarCiudad, modificarCiudad, obtenerUnaCiudad} = controladorCiudades


Router.route('/todaslasciudades')
.get(obtenerCiudades)
.post(cargarCiudad)


Router.route('/Cities/:id')
.delete(BorrarCiudad)
.put(modificarCiudad)

Router.route('/Cities/Detalles/:id')
.get(obtenerUnaCiudad)

module.exports = Router

