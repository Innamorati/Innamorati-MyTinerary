import React from "react";
import {
    Titulo,
    Contenedor,
    CartasPrincipal,
    CartasContenedor,
    CartasImagen,
    TituloCiudad,
    ContendeorImagen,
    BotonDetalle,
    Avisobusqueda,

} from "../style/Cities.elements"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link as LinkRouter } from "react-router-dom"
import { connect } from 'react-redux'
import AccionesCiudades from "../redux/acciones/AccionesCiudades.js";
import Filtro from "../components/filtro";





class Cities extends React.Component {


    componentDidMount() {
        this.props.ObtenerCiudades()
    }
    render() {
        return (
            <Contenedor>
                <Titulo>Find your perfect city</Titulo>
                <Filtro></Filtro>
                <Avisobusqueda visivilidad={this.props.datosFiltrados.length === 0}>
                    Sorry no match... Please try again.
                    <ErrorOutlineIcon></ErrorOutlineIcon>
                </Avisobusqueda>
                <CartasPrincipal>
                    {this.props.datosFiltrados?.map((ciudades) =>
                        <BotonDetalle key={ciudades._id}>
                            <LinkRouter to={`/Cities/Detalle/${ciudades._id}`}>
                                <CartasContenedor >
                                    <ContendeorImagen>
                                        <CartasImagen src={process.env.PUBLIC_URL + `/imagenes/ciudades/${ciudades.Imagen}`}></CartasImagen>
                                    </ContendeorImagen>
                                    <TituloCiudad>
                                        {ciudades.Ciudad}
                                    </TituloCiudad>
                                </CartasContenedor>
                            </LinkRouter>
                        </BotonDetalle>
                    )}
                </CartasPrincipal>
            </Contenedor>




        );
    }
}

const mapDispatchToProps = {
    ObtenerCiudades: AccionesCiudades.ObtenerCiudades,
}
const mapStateToProps = (state) => {
    return {
        ciudades: state.ReducerCiudades.ciudades,
        datosFiltrados: state.ReducerCiudades.datosFiltrados,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities);