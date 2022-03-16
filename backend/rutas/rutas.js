const Router = require('express').Router()


const controladorCiudades = require('../controladores/controladorCiudades')
const controladorItinerarios = require('../controladores/ControladoresItinerarios')
const controladorUsuarios = require('../controladores/ControladorUsuarios')

const { obtenerCiudades, cargarCiudad, BorrarCiudad, modificarCiudad, obtenerUnaCiudad } = controladorCiudades
const { ObtenerItinerarios, ObtenerItinerariosPorCiudad } = controladorItinerarios
const { inicioDeSecion, obtenerUsuarios, cargarUsuarios } = controladorUsuarios

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

Router.route('/Autenticacion/Registro')
    .post(cargarUsuarios)

Router.route('/ini')
    .post(inicioDeSecion)


module.exports = Router

