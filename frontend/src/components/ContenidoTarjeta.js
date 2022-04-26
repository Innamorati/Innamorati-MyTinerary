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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PaidIcon from '@mui/icons-material/Paid';
import ContenidoActividades from './ContenidoActividades'
import { useDispatch } from 'react-redux';


export default function ContenidoTarjeta({ like, itinerarios, actividades, Recargar, Usuario, Add, Del }) {

    const dispatch = useDispatch()
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
        if (Usuario === null) {
            dispatch({ type: 'mensaje', payload: { mensaje: 'Please login, and then leave your like', view: true } })
        }
        else {
            await like(id)
            dispatch({ type: 'Actualizar', payload: !Recargar })
        }
    }

    const likeUser = itinerarios.Like?.filter(filter => Usuario?.id === filter)
    const etiquetas = itinerarios.Etiquetas.map(etiquetas => "#" + etiquetas + " ")
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
                <ContenedorLike onClick={Like}>
                    {likeUser.length === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                    <NumeroLike>{itinerarios.Like.length}</NumeroLike>
                </ContenedorLike>
                <ContenedorEtiquetas>
                    <Etiquetas>{etiquetas}</Etiquetas>
                </ContenedorEtiquetas>
                {estado ? <VerMas onClick={cambiarEstado}>View more</VerMas> : <VerMas onClick={cambiarEstado}>View less</VerMas>}
            </ContenedorSinExpandir>
            <ContenedorExpandir expandir={estado} >
                <ContenidoActividades actividades={actividades.filter(actividades => actividades.Itinerario === itinerarios._id)} Usuario={Usuario} Add={Add} Itinerario={itinerarios} Del={Del} Recargar={Recargar} />
            </ContenedorExpandir >
        </IntinerariosInformacion >

    )
}
