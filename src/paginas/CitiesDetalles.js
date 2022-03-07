import React from "react";

import {Link as LinkRouter} from "react-router-dom"
import {
    Contenedor,
    CartasPrincipal,
    CartasContenedor,
    ContendeorImagen,
    CartasImagen,
    TituloCiudad,
} from '../style/Cities.elements'
import {
    Titulo,
    BotonVolver,
}from '../style/Detalles.elementos'
import { connect } from "react-redux";
import AccionesCiudades from "../redux/acciones/AccionesCiudades";




class CitiesDetalles extends React.Component{
    
    // state = {ciudad:{}}
    id = this.props.params
    
    componentDidMount(){
        this.props.ObtenerUnaCiudad(this.id)
    }
    



    render(){
        console.log(this.props.params)
        console.log(this.props)
    return(
        <Contenedor>
            <CartasPrincipal>
                    <CartasContenedor>
                        <ContendeorImagen>
                            <CartasImagen src={process.env.PUBLIC_URL+`/imagenes/ciudades/${this.props.ciudadDetalle.Imagen}`}/> 
                        </ContendeorImagen>
                        <TituloCiudad>
                            {this.props.ciudadDetalle.Ciudad}
                        </TituloCiudad>    
                    </CartasContenedor>
            </CartasPrincipal> 
            <Titulo>
                Under Construction
            </Titulo>
            <LinkRouter to={`/Cities`}>
                <BotonVolver>To return</BotonVolver>      
            </LinkRouter>
       </Contenedor>
    )
    }
}
const mapDispatchToProps = {
    ObtenerUnaCiudad: AccionesCiudades.ObtenerUnaCiudad,
}

const mapStateToProps =(state)=>{
    return{
        ciudades: state.ReducerCiudades.ciudades,
        ciudadDetalle: state.ReducerCiudades.ciudadDetalle,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CitiesDetalles)