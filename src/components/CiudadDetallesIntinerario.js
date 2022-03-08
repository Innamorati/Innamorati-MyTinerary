import React from "react";
import { connect } from "react-redux";
import {
    VerMas,
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
    ContenedortIntinerarios,
    IntinerariosInformacion,
} from "../style/Detalles.elementos";
import PaidIcon from '@mui/icons-material/Paid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';

class CiudadDetallesIntinerarios extends React.Component{
    

    render(){
        
     return(
        <ContenedortIntinerarios>
           <TituloIntinerarios>Itineraries</TituloIntinerarios>
            <IntinerariosInformacion>
                <ContenedorImgfPerfil>
                    <NombreActividad>Tour guiado</NombreActividad>
                    <ImagenPerfil src={process.env.PUBLIC_URL+`/imagenes/ImgenesPerfiles/Juca.jpg`}/>
                    <NombreUsuario>Juan Carlos</NombreUsuario>
                </ContenedorImgfPerfil>
            <ContenedorPrecio>
                <PaidIcon/>
                <PaidIcon/>
                <PaidIcon/>
                <PaidIcon/>
                <PaidIcon/>
            </ContenedorPrecio>
            <ContenedorDuracion>
                <AccessTimeIcon/>
                <Duracion>: 4Horas</Duracion>
            </ContenedorDuracion>
            <ContenedorLike>
               <FavoriteIcon/>
               <NumeroLike>9</NumeroLike>
            </ContenedorLike>
            <ContenedorEtiquetas>
                <Etiquetas> #Trip </Etiquetas>
                <Etiquetas> #Travel </Etiquetas>
                <Etiquetas> #Happy </Etiquetas>
                <Etiquetas> #INeedSleep </Etiquetas>
            </ContenedorEtiquetas>
            <VerMas>View more</VerMas>
            </IntinerariosInformacion>
        </ContenedortIntinerarios>
     )   
    }
}
export default connect()(CiudadDetallesIntinerarios)