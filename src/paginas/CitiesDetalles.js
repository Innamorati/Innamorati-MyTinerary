import React from "react";
import CiudadDetalleCiudad from "../components/CiudadDetalle.Ciudad";
import { connect } from "react-redux";
import AccionesCiudades from "../redux/acciones/AccionesCiudades";
import CiudadDetallesIntinerario from "../components/CiudadDetallesIntinerario";
import AccionesItinerarios from "../redux/acciones/AccionesItinerarios";
import {DetalleItinerarioswhithRouter} from '../App'
import CartaB from '../components/CartaB'
import { CiudadDetalleWhitRouter } from "../App";
class CitiesDetalles extends React.Component{
    
    // state = {ciudad:{}}
    id = this.props.params
    
    componentDidMount(){
        this.props.ObtenerUnaCiudad(this.id)
    }
    



    render(){
        // console.log(this.props)
    return(
        <div>
        <CiudadDetalleWhitRouter/>
        {/* <CartaB>
            
        </CartaB> */}
        <DetalleItinerarioswhithRouter/>
        </div>
    )
    }
}
const mapDispatchToProps = {
    ObtenerUnaCiudad: AccionesCiudades.ObtenerUnaCiudad,
}

const mapStateToProps =(state)=>{
    return{
        ciudades: state.ReducerCiudades.ciudades,
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CitiesDetalles)