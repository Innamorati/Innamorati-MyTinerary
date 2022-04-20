import React from "react";
import { connect } from "react-redux";
import {
    TituloIntinerarios,
    ItinerariosContenedor,
    ContenedortIntinerarios,
} from "../style/Detalles.elementos";
import AccionesItinerarios from "../redux/acciones/AccionesItinerarios";
import ContenidoTarjeta from "./ContenidoTarjeta";
import { AvisoItinerarios } from "../style/Cities.elements";
import AccionesActividades from "../redux/acciones/AccionesActividades";
import AccionesComentarios from "../redux/acciones/AccionesComentarios"
import { useEffect } from "react";





function CiudadDetallesIntinerarios(props) {

    let id = props.params.id
    let longitud = props.itinerariosCiudades.length

    useEffect(() => {
        props.ObtenerItinerariosPorCiudad(id)
        props.obtenerActividades(id)
    }, [props.Actualizar])



    return (
        <div>
            <ContenedortIntinerarios>
                <TituloIntinerarios>Itineraries</TituloIntinerarios>
                <ItinerariosContenedor>
                    {props.itinerariosCiudades.length > 0 ? (props.itinerariosCiudades?.map((itinerarios) =>
                        <ContenidoTarjeta key={itinerarios._id} itinerarios={itinerarios} actividades={props.Actividades} like={props.LikeyDislike} Recargar={props.Recargar} Usuario={props.user} Add={props.agregarComentario} Del={props.borrarComentario} />
                    )) : <h2 style={{ color: 'white' }}>Under construction</h2>}
                    <AvisoItinerarios>

                    </AvisoItinerarios>
                </ItinerariosContenedor>
            </ContenedortIntinerarios>

        </div>
    )
}

const mapDispatchToProps = {
    ObtenerItinerariosPorCiudad: AccionesItinerarios.ObtenerItinerariosPorCiudad,
    CambiarEstado: AccionesItinerarios.CambiarEstado,
    VisibilidadAvisoItinerarios: AccionesItinerarios.VisibilidadAvisoItinerarios,
    obtenerActividades: AccionesActividades.obtenerActividades,
    LikeyDislike: AccionesItinerarios.LikeyDislike,
    Recargar: AccionesItinerarios.Recargar,
    agregarComentario: AccionesComentarios.agregarComentario,
    borrarComentario: AccionesComentarios.borrarComentario
}

const mapStateToProps = (state) => {
    return {
        itinerariosCiudades: state.ReducerItinerarios.itinerariosCiudades,
        visivilidadItinerarios: state.ReducerItinerarios.visivilidadItinerarios,
        Actividades: state.ReducerActividades.Actividades,
        Actualizar: state.ReducerItinerarios.Actualizar,
        user: state.ReducerUsuarios.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CiudadDetallesIntinerarios)