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
} from "../style/Detalles.elementos";
import PaidIcon from '@mui/icons-material/Paid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccionesCiudades from "../redux/acciones/AccionesCiudades";
import AccionesItinerarios from "../redux/acciones/AccionesItinerarios";
import styled from "styled-components";

 const VerMas = styled.button`
    height: 2.3rem;
    width: 8rem;
    border:none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    margin-top: .5rem;
`;
const ContenedortIntinerarios = styled.div`
    background-color: black;
    min-height: 20rem;
    padding-top: 2rem;
    
`;
const IntinerariosInformacion = styled.div`
    width: ${({open}) => (open ? "30rem" : "18rem")}; 
    height: 30rem;
    background-color: #080808;
    margin: 0 10px;
    display: flex;
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

class CiudadDetallesIntinerarios extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          estado : true,
        }
    
      }
    id = this.props.params.id
    componentDidMount(){
        this.props.ObtenerItinerariosPorCiudad(this.id)
    }
    cambiarLight=()=> {
        this.setState({
          estado : !this.state.estado, 
        })
        this.props.CambiarEstado(this.state.estado)
      }
    
    cambiandoEstado=()=>{
        
    }
    render(){
        console.log(this.props)
        console.log(this.state.estado)
     return(
         <ContenedortIntinerarios>
            <TituloIntinerarios>Itineraries</TituloIntinerarios>
            <ItinerariosContenedor>
            {this.props.itinerariosCiudades?.map((itinerarios)=>
            <IntinerariosInformacion key={itinerarios._id} open={this.state.estado}>
                <ContenedorImgfPerfil>
                    <NombreActividad>{itinerarios.Actividad}</NombreActividad>
                    <ImagenPerfil src={process.env.PUBLIC_URL+`/imagenes/ImgenesPerfiles/${itinerarios.FotoUsuario}`}/>
                    <NombreUsuario>{itinerarios.NombreUsuario}</NombreUsuario>
                </ContenedorImgfPerfil>
            <ContenedorPrecio>
                {itinerarios.Precio}
            </ContenedorPrecio>
            <ContenedorDuracion>
                <AccessTimeIcon/>
                <Duracion>: {itinerarios.Duracion} Horas</Duracion>
            </ContenedorDuracion>
            <ContenedorLike>
               <FavoriteIcon/>
               <NumeroLike>{itinerarios.Like}</NumeroLike>
            </ContenedorLike>
            <ContenedorEtiquetas>
                <Etiquetas>#{itinerarios.Etiquetas}</Etiquetas>
            </ContenedorEtiquetas>
            <VerMas onClick={this.cambiarLight}>View more</VerMas>
            </IntinerariosInformacion>
            )}
            </ItinerariosContenedor>
        </ContenedortIntinerarios>
     )   
    }
}
const mapDispatchToProps = {
    ObtenerItinerariosPorCiudad: AccionesItinerarios.ObtenerItinerariosPorCiudad,
    CambiarEstado: AccionesItinerarios.CambiarEstado
}

const mapStateToProps =(state)=>{
    return{
        itinerariosCiudades: state.ReducerItinerarios.itinerariosCiudades,
        expandir: state.ReducerItinerarios.expandir,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CiudadDetallesIntinerarios)