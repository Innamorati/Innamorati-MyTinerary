import React from "react";
import { connect } from "react-redux";
import {
    Duracion, 
    Etiquetas,
    NumeroLike,
    ImagenPerfil,
    NombreUsuario,
    ContenedorLike,
    NombreActividad,
    ContenedorPrecio,
    TituloIntinerarios, 
    ContenedorDuracion,
    ContenedorEtiquetas,
    ContenedorImgfPerfil,
    ItinerariosContenedor,
    ContenedorMapero,
    ContenedortIntinerarios,
    VerMas,
    IntinerariosInformacion,
} from "../style/Detalles.elementos";
import AccionesItinerarios from "../redux/acciones/AccionesItinerarios";
import ContenidoTarjeta from "./ContenidoTarjeta";
import { AvisoItinerarios } from "../style/Cities.elements";





class CiudadDetallesIntinerarios extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
      }
    id = this.props.params.id
    longitud = this.props.itinerariosCiudades.length
    componentDidMount(){
        this.props.ObtenerItinerariosPorCiudad(this.id)
    }
    // VisibilidadAvisoItinerarios(longitud)

    mostrarAviso=(longitud)=> {
        this.props.VisibilidadAvisoItinerarios(longitud)
        console.log("hola")
    }
    
    render(){
        console.log(this.props)
     return(
         <div>
         <ContenedortIntinerarios>
            <TituloIntinerarios>Itineraries</TituloIntinerarios>
            <ItinerariosContenedor>
            {this.props.itinerariosCiudades.length > 0 ? (this.props.itinerariosCiudades?.map((itinerarios)=>
            <ContenidoTarjeta itinerarios={itinerarios} />
            
            )):<h2 style={{color: 'white'}}>Under construction</h2>}
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
    VisibilidadAvisoItinerarios: AccionesItinerarios.VisibilidadAvisoItinerarios
}

const mapStateToProps =(state)=>{
    return{
        itinerariosCiudades: state.ReducerItinerarios.itinerariosCiudades,
        expandir: state.ReducerItinerarios.expandir,
        expandir: state.ReducerItinerarios.expandir,
        visivilidadItinerarios: state.ReducerItinerarios.visivilidadItinerarios,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CiudadDetallesIntinerarios)