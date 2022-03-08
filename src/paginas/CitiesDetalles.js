import React from "react";
import CiudadDetalleCiudad from "../components/CiudadDetalle.Ciudad";
import { connect } from "react-redux";
import AccionesCiudades from "../redux/acciones/AccionesCiudades";
import CiudadDetallesIntinerario from "../components/CiudadDetallesIntinerario";


class CitiesDetalles extends React.Component{
    
    // state = {ciudad:{}}
    id = this.props.params
    
    componentDidMount(){
        this.props.ObtenerUnaCiudad(this.id)
    }
    



    render(){
        console.log(this.props.params)
        console.log(this.props.ciudadDetalle)
    return(
        <div>
        <CiudadDetalleCiudad/>
        <CiudadDetallesIntinerario/>
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
        ciudadDetalle: state.ReducerCiudades.ciudadDetalle,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CitiesDetalles)