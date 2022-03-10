import react, {useState} from 'react'
import { Style } from '@mui/icons-material'
import styled from "styled-components";
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
    ContenedortIntinerarios,
    VerMas,
    IntinerariosInformacion,
    ContenedorSinExpandir,
    ContenedorExpandir,
} from "../style/Detalles.elementos";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaidIcon from '@mui/icons-material/Paid';

export default function ContenidoTarjeta({itinerarios}){

    const [estado, setEstado] = useState(true)
    const [valorExpandir, setvalorExpandir] = useState("")
    const [ValorBoton, setValorBoton] = useState(false)

    const cambiarEstado=()=> {

        setEstado(!estado)
      }
      const cantidad = []
      for (let index = 0; index < itinerarios.Precio; index++) {
          cantidad.push(index) 
      }
      
    return(
            <IntinerariosInformacion  key={itinerarios._id} expandir={estado}>
                <ContenedorSinExpandir>
                    <ContenedorImgfPerfil>
                        <NombreActividad>{itinerarios.Actividad}</NombreActividad>
                        <ImagenPerfil src={process.env.PUBLIC_URL+`/imagenes/ImgenesPerfiles/${itinerarios.FotoUsuario}`}/>
                        <NombreUsuario>{itinerarios.NombreUsuario}</NombreUsuario>
                    </ContenedorImgfPerfil>
                <ContenedorPrecio>
                    {cantidad.map((index,precio) =><PaidIcon key={index}/>)}
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
                    <VerMas onClick={cambiarEstado}>View more</VerMas>
                </ContenedorSinExpandir>
                <ContenedorExpandir expandir={estado}>
                    <h3>Under construction</h3>
                </ContenedorExpandir>
            </IntinerariosInformacion>
    )
}