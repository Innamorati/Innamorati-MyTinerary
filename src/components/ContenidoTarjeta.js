import { useEffect, useState } from 'react';
import {
    Duracion,
    Etiquetas,
    NumeroLike,
    ImagenPerfil,
    NombreUsuario,
    ContenedorLike,
    NombreActividad,
    ContenedorPrecio,
    ContenedorDuracion,
    ContenedorEtiquetas,
    ContenedorImgfPerfil,
    VerMas,
    IntinerariosInformacion,
    ContenedorSinExpandir,
    ContenedorExpandir,
} from "../style/Detalles.elementos";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaidIcon from '@mui/icons-material/Paid';
import ContenidoActividades from './ContenidoActividades'



export default function ContenidoTarjeta({ like, itinerarios, actividades, Recargar, Usuario, Add, Del }) {

    const [reload, setReload] = useState(false)
    const [estado, setEstado] = useState(true)



    const cambiarEstado = () => {
        setEstado(!estado)
    }

    const cantidad = []
    for (let index = 0; index < itinerarios.Precio; index++) {
        cantidad.push(index)
    }
    let id = itinerarios._id

    async function Like() {
        await like(id)
        setReload(!reload)
        Recargar(!reload)
    }

    return (

        <IntinerariosInformacion key={itinerarios._id} expandir={estado}>
            <ContenedorSinExpandir>
                <ContenedorImgfPerfil>
                    <NombreActividad>{itinerarios.Actividad}</NombreActividad>
                    <ImagenPerfil src={process.env.PUBLIC_URL + `/imagenes/ImgenesPerfiles/${itinerarios.FotoUsuario}`} />
                    <NombreUsuario>{itinerarios.NombreUsuario}</NombreUsuario>
                </ContenedorImgfPerfil>
                <ContenedorPrecio>
                    {cantidad.map((index, precio) => <PaidIcon key={index} />)}
                </ContenedorPrecio>
                <ContenedorDuracion>
                    <AccessTimeIcon />
                    <Duracion>: {itinerarios.Duracion} Horas</Duracion>
                </ContenedorDuracion>
                <ContenedorLike>
                    <FavoriteIcon onClick={Like} />
                    <NumeroLike>{itinerarios.Like.length}</NumeroLike>
                </ContenedorLike>
                <ContenedorEtiquetas>
                    <Etiquetas>#{itinerarios.Etiquetas}</Etiquetas>
                </ContenedorEtiquetas>
                <VerMas onClick={cambiarEstado}>View more</VerMas>
            </ContenedorSinExpandir>
            <ContenedorExpandir expandir={estado} >
                <ContenidoActividades actividades={actividades.filter(actividades => actividades.Itinerario === itinerarios._id)} Usuario={Usuario} Add={Add} Itinerario={itinerarios} Del={Del} />
            </ContenedorExpandir >
        </IntinerariosInformacion>

    )
}
