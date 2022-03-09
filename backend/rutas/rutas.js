const Router = require('express').Router()


const controladorCiudades = require('../controladores/controladorCiudades')
const controladorItinerarios = require('../controladores/ControladoresItinerarios')

const {obtenerCiudades, cargarCiudad, BorrarCiudad, modificarCiudad, obtenerUnaCiudad} = controladorCiudades
const {ObtenerItinerarios, ObtenerItinerariosPorCiudad} = controladorItinerarios

Router.route('/todaslasciudades')
.get(obtenerCiudades)
.post(cargarCiudad)


Router.route('/Cities/:id')
.delete(BorrarCiudad)
.put(modificarCiudad)

Router.route('/Cities/Detalles/:id')
.get(obtenerUnaCiudad)

Router.route('/Itinerarios')
.get(ObtenerItinerarios)

Router.route('/Itinerarios/:ciudad')
.get(ObtenerItinerariosPorCiudad)

module.exports = Router

