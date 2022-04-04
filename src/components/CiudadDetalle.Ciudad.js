import React, { useEffect, useState } from "react";

import {
    Contenedor,
    Titulo,
    BotonVolver,
    ImagenDetalle,
    ImagenContenedor,
    ContenedorTitulo,
    ContenedorInformacion,
    ContenedorDescripcion,
    Parrafo,
    DatosCiudades,
    ContenedorDatos,
    ParrafoIcon,
} from '../style/Detalles.elementos'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PublicIcon from '@mui/icons-material/Public';
import AccionesCiudades from "../redux/acciones/AccionesCiudades";
import AccionesActividades from "../redux/acciones/AccionesActividades";
import { connect } from "react-redux";

function CiudadDetalleCiudad(props) {

    let id = props.params.id

    useEffect(() => {
        props.ObtenerUnaCiudad(id)
        props.obtenerActividades(id)
    }, [])


    return (
        <Contenedor>
            <ContenedorTitulo>
                <Titulo>{props.ciudadDetalle.Ciudad}</Titulo>
            </ContenedorTitulo>
            <ContenedorInformacion>
                <ImagenContenedor>
                    <ImagenDetalle src={process.env.PUBLIC_URL + `/imagenes/ciudades/${props.ciudadDetalle.Imagen}`} />
                </ImagenContenedor>
                <ContenedorDescripcion>
                    <DatosCiudades>
                        <Parrafo>{props.ciudadDetalle.Descripcion}</Parrafo>
                        <ContenedorDatos>
                            <ParrafoIcon>
                                <MonetizationOnIcon color="success" />
                                <Parrafo>:  {props.ciudadDetalle.Moneda}</Parrafo>
                            </ParrafoIcon>
                            <ParrafoIcon>
                                <PublicIcon color="primary" />
                                <Parrafo>: {props.ciudadDetalle.Continente}</Parrafo>
                            </ParrafoIcon>
                        </ContenedorDatos>
                    </DatosCiudades>
                </ContenedorDescripcion>
            </ContenedorInformacion>
        </Contenedor>
    )
}

const mapDispatchToProps = {
    ObtenerUnaCiudad: AccionesCiudades.ObtenerUnaCiudad,
    obtenerActividades: AccionesActividades.obtenerActividades,
}

const mapStateToProps = (state) => {
    return {
        ciudades: state.ReducerCiudades.ciudades,
        ciudadDetalle: state.ReducerCiudades.ciudadDetalle,
        Actividades: state.ReducerActividades.Actividades,
        Actualizar: state.ReducerItinerarios.Actualizar,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CiudadDetalleCiudad)