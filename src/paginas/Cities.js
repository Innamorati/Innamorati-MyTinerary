import React from "react";
import {
    Titulo,
    Buscador,
    BuscadorContenedor,
    Contenedor,
    CartasPrincipal,
    CartasContenedor,
    CartasImagen,
    TituloCiudad,
    ContendeorImagen,
    BotonDetalle,
    Selector,
    Avisobusqueda,
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {Link as LinkRouter} from "react-router-dom"
import { connect } from 'react-redux'
import AccionesCiudades from "../redux/acciones/AccionesCiudades.js";
import Filtro from "../components/filtro";
import { Store } from "@mui/icons-material";




class Cities extends React.Component {
    state ={
        arrayCiudades:[]
    }

    componentDidMount() {
        this.props.ObtenerCiudades()
        console.log("estoy montando el componente")
        
    }
    
    render(){
        return(
         <Contenedor>
                <Titulo>Find your perfect city</Titulo>
                <Filtro></Filtro>
                <Avisobusqueda >
                    Sorry no match... Please try again.
                    <ErrorOutlineIcon></ErrorOutlineIcon>
                </Avisobusqueda>
                <CartasPrincipal>
                {this.props.datosfiltrados?.map ((ciudades)=> 
                    <BotonDetalle key={ciudades._id}>
                        <LinkRouter to={`/Cities/Detalle/${ciudades._id}`}>
                        <CartasContenedor >
                            <ContendeorImagen>
                                <CartasImagen src={process.env.PUBLIC_URL+`/imagenes/ciudades/${ciudades.Imagen}`}></CartasImagen>
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
const mapStateToProps = (state)=>{
    return{
        ciudades: state.ReducerCiudades.ciudades,
        filtroselect: state.ReducerCiudades.filtroselect,
        datosfiltrados: state.ReducerCiudades.datosfiltrados,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities);