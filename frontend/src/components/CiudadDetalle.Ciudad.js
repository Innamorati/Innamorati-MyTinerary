import React, { useEffect, useState } from "react";

import {
    VerMas,
    Titulo,
    Parrafo,
    Contenedor,
    ImagenDetalle,
    ParrafoIcon,
    DatosCiudades,
    ContenedorDatos,
    ImagenContenedor,
    ContenedorTitulo,
    ContenedorInformacion,
    ContenedorDescripcion,
    ContenedorTextoDescripcion,
    ContenedorMediaQueries,
    ContenedorTransicion,
    ContenedorBoton,
} from '../style/Detalles.elementos'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PublicIcon from '@mui/icons-material/Public';
import AccionesCiudades from "../redux/acciones/AccionesCiudades";
import AccionesActividades from "../redux/acciones/AccionesActividades";
import { connect } from "react-redux";

function CiudadDetalleCiudad(props) {
    const [detalles, setDetalles] = useState(false)
    let id = props.params.id

    useEffect(() => {
        props.ObtenerUnaCiudad(id)
        props.obtenerActividades(id)
    }, [])


    return (
        <Contenedor >
            <ContenedorTitulo>
                <Titulo>{props.ciudadDetalle.Ciudad}</Titulo>
            </ContenedorTitulo>
            <ContenedorInformacion detalles={detalles}>
                <ImagenContenedor >
                    <ImagenDetalle src={process.env.PUBLIC_URL + `/imagenes/ciudades/${props.ciudadDetalle.Imagen}`} />
                </ImagenContenedor>
                <ContenedorDescripcion>
                    <DatosCiudades>
                        <ContenedorTextoDescripcion>
                            <Parrafo>{props.ciudadDetalle.Descripcion}</Parrafo>
                        </ContenedorTextoDescripcion>
                        <ContenedorDatos style={{}}>
                            <ParrafoIcon>
                                <MonetizationOnIcon color="success" />
                                <Parrafo>:  {props.ciudadDetalle.Moneda}</Parrafo>
                            </ParrafoIcon>
                            <ParrafoIcon>
                                <PublicIcon color="primary" />
                                <Parrafo>: {props.ciudadDetalle.Continente}</Parrafo>
                            </ParrafoIcon>
                        </ContenedorDatos>
                        <ContenedorDatos>
                        </ContenedorDatos>
                    </DatosCiudades>
                </ContenedorDescripcion>
                <ContenedorMediaQueries detalles={detalles}>
                    <ContenedorTransicion detalles={detalles}>
                        <DatosCiudades>
                            <ContenedorTextoDescripcion>
                                <Parrafo>{props.ciudadDetalle.Descripcion}</Parrafo>
                            </ContenedorTextoDescripcion>
                            <ContenedorDatos style={{}}>
                                <ParrafoIcon>
                                    <MonetizationOnIcon color="success" />
                                    <Parrafo>:  {props.ciudadDetalle.Moneda}</Parrafo>
                                </ParrafoIcon>
                                <ParrafoIcon>
                                    <PublicIcon color="primary" />
                                    <Parrafo>: {props.ciudadDetalle.Continente}</Parrafo>
                                </ParrafoIcon>
                            </ContenedorDatos>
                            <ContenedorDatos>
                            </ContenedorDatos>
                        </DatosCiudades>
                    </ContenedorTransicion>
                </ContenedorMediaQueries>
                <ContenedorBoton>
                    <VerMas onClick={() => setDetalles(!detalles)}>Description</VerMas>
                </ContenedorBoton>
            </ContenedorInformacion>
        </Contenedor >
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