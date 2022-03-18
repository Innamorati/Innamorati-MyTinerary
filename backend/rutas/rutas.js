const Router = require('express').Router()
const Validador = require('../configuracion/Validador')
const passport = require('../configuracion/Pasaporte')

const controladorCiudades = require('../controladores/controladorCiudades')
const controladorItinerarios = require('../controladores/ControladoresItinerarios')
const controladorUsuarios = require('../controladores/ControladorUsuarios')

const { obtenerCiudades, cargarCiudad, BorrarCiudad, modificarCiudad, obtenerUnaCiudad } = controladorCiudades
const { ObtenerItinerarios, ObtenerItinerariosPorCiudad } = controladorItinerarios
const { inicioDeSecion, cerrarSecion, cargarUsuarios, verificarCorreo, verificarToken } = controladorUsuarios

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
    .post(Validador, cargarUsuarios)

Router.route('/ini')
    .post(inicioDeSecion)

Router.route('/Autenticaion/CerrarSecion')
    .post(cerrarSecion)

Router.route('/Verificacion/:uniqueString')
    .get(verificarCorreo)

Router.route('/auth/signInToken')
    .get(passport.authenticate('jwt', { session: false }), verificarToken)

module.exports = Router

