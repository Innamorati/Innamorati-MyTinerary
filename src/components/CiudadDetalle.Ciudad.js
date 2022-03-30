import React from "react";

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

class CiudadDetalleCiudad extends React.Component {
    id = this.props.params.id
    componentDidMount() {
        this.props.ObtenerUnaCiudad(this.id)
        this.props.obtenerActividades(this.id)
    }
    render() {

        return (
            <Contenedor>
                <ContenedorTitulo>
                    <Titulo>{this.props.ciudadDetalle.Ciudad}</Titulo>
                </ContenedorTitulo>
                <ContenedorInformacion>
                    <ImagenContenedor>
                        <ImagenDetalle src={process.env.PUBLIC_URL + `/imagenes/ciudades/${this.props.ciudadDetalle.Imagen}`} />
                    </ImagenContenedor>
                    <ContenedorDescripcion>
                        <DatosCiudades>
                            <Parrafo>{this.props.ciudadDetalle.Descripcion}</Parrafo>
                            <ContenedorDatos>
                                <ParrafoIcon>
                                    <MonetizationOnIcon color="success" />
                                    <Parrafo>:  {this.props.ciudadDetalle.Moneda}</Parrafo>
                                </ParrafoIcon>
                                <ParrafoIcon>
                                    <PublicIcon color="primary" />
                                    <Parrafo>: {this.props.ciudadDetalle.Continente}</Parrafo>
                                </ParrafoIcon>
                            </ContenedorDatos>
                        </DatosCiudades>
                    </ContenedorDescripcion>
                </ContenedorInformacion>
            </Contenedor>
        )
    }
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CiudadDetalleCiudad)