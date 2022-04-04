import React from "react";
import { connect } from "react-redux";
import AccionesCiudades from "../redux/acciones/AccionesCiudades";
import { DetalleItinerarioswhithRouter } from '../App'
import CiudadDetalleCiudad from "../components/CiudadDetalle.Ciudad";
import { CiudadDetalleWhitRouter } from "../App";
class CitiesDetalles extends React.Component {

    // state = {ciudad:{}}
    id = this.props.params

    componentDidMount() {
        this.props.ObtenerUnaCiudad(this.id)
    }




    render() {
        // console.log(this.props)
        return (
            <div>
                <CiudadDetalleWhitRouter />
                <DetalleItinerarioswhithRouter />
            </div>
        )
    }
}
const mapDispatchToProps = {
    ObtenerUnaCiudad: AccionesCiudades.ObtenerUnaCiudad,
}

const mapStateToProps = (state) => {
    return {
        ciudades: state.ReducerCiudades.ciudades,


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CitiesDetalles)