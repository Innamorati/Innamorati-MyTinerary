const Router = require('express').Router()
const Validador = require('../configuracion/Validador')
const passport = require('../configuracion/Pasaporte')

const controladorCiudades = require('../controladores/controladorCiudades')
const controladorItinerarios = require('../controladores/ControladoresItinerarios')
const controladorUsuarios = require('../controladores/ControladorUsuarios')
const controladoresActividades = require('../controladores/ControladoresActividades')
const ControladoresComentarios = require('../controladores/ControladoresComentarios')
const { obtenerCiudades, cargarCiudad, BorrarCiudad, modificarCiudad, obtenerUnaCiudad } = controladorCiudades
const { ObtenerItinerarios, ObtenerItinerariosPorCiudad, LikeyDislike } = controladorItinerarios
const { inicioDeSecion, cerrarSecion, cargarUsuarios, verificarCorreo, verificarToken } = controladorUsuarios
const { obtenerActividades, obtenerTodasLasActividades } = controladoresActividades
const { agregarComentario, borrarComentario, modificarComentario } = ControladoresComentarios

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

Router.route('/Actividades/:id')
    .get(obtenerActividades)

Router.route('/allActividades')
    .get(obtenerTodasLasActividades)

Router.route('/Itinerario/LikeyDislike/:id')
    .put(passport.authenticate('jwt', { session: false }), LikeyDislike)

Router.route('/Itinerario/Comentarios/')
    .post(passport.authenticate('jwt', { session: false }), agregarComentario)

Router.route('/Itinerario/Comentarios/:id')
    .post(passport.authenticate('jwt', { session: false }), borrarComentario)

Router.route('/Itinerario/BorrarComentario')
    .put(modificarComentario)

module.exports = Router

