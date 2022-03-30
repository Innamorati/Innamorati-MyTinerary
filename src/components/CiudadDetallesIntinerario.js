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






class CiudadDetallesIntinerarios extends React.Component {

    id = this.props.params.id
    longitud = this.props.itinerariosCiudades.length
    componentDidMount() {
        this.props.ObtenerItinerariosPorCiudad(this.id)
        this.props.obtenerActividades(this.id)
    }


    render() {

        return (
            <div>
                <ContenedortIntinerarios>
                    <TituloIntinerarios>Itineraries</TituloIntinerarios>
                    <ItinerariosContenedor>
                        {this.props.itinerariosCiudades.length > 0 ? (this.props.itinerariosCiudades?.map((itinerarios) =>
                            <ContenidoTarjeta itinerarios={itinerarios} actividades={this.props.Actividades} />
                        )) : <h2 style={{ color: 'white' }}>Under construction</h2>}
                        <AvisoItinerarios>

                        </AvisoItinerarios>
                    </ItinerariosContenedor>
                </ContenedortIntinerarios>

            </div>
        )
    }
}
const mapDispatchToProps = {
    ObtenerItinerariosPorCiudad: AccionesItinerarios.ObtenerItinerariosPorCiudad,
    CambiarEstado: AccionesItinerarios.CambiarEstado,
    VisibilidadAvisoItinerarios: AccionesItinerarios.VisibilidadAvisoItinerarios,
    obtenerActividades: AccionesActividades.obtenerActividades,
}

const mapStateToProps = (state) => {
    return {
        itinerariosCiudades: state.ReducerItinerarios.itinerariosCiudades,
        visivilidadItinerarios: state.ReducerItinerarios.visivilidadItinerarios,
        Actividades: state.ReducerActividades.Actividades,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CiudadDetallesIntinerarios)