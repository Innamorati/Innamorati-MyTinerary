import React, { useEffect, useState } from "react";
import {
    Form,
    Comentario,
    BotonComentar,
    ContenedorInput,
    ContenedorImagen,
    ImagenComentario,
    ComentarioBurbuja,
    CotenedorDivImagen,
    ContenedorMensajes,
    ContenedorPrincipal,
    ContenedorActividades,
    ContenedorComentarios,
    ContenedorCarrusel,
    ContendedorActividadesSinCArrusel
} from '../style/ActividadesElementos'
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, getState } from 'react-redux'
import Modal from './Modal'
import CarruselActividades from "./CarruselActividades";




export default function ContenidoActividades({ actividades, Usuario, Add, Itinerario, Del, Recargar }) {
    const [inputText, setInputText] = useState("")
    let id = actividades.map(itinerarios => itinerarios.Itinerario)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)


    async function nuevoComentario(e) {
        e.preventDefault()
        if (Usuario === null) {
            dispatch({ type: 'mensaje', payload: { mensaje: 'Please login, and then leave us your like', view: true } })
        }
        else {
            const datos = {
                Comentario: e.target[0].value,
                UsuarioId: Usuario.id,
                FotoUsuario: Usuario.imagen,
                Itinerario: id[0]
            }
            await Add(datos)
            dispatch({ type: 'Actualizar', payload: !Recargar })
            e.target[0].value = ""
        }
    }
    async function borrarComentario(id) {
        await Del(id)
        dispatch({ type: 'Actualizar', payload: !Recargar })
    }

    return (
        <ContenedorPrincipal>
            <ContenedorActividades>
                <CarruselActividades actividades={actividades} />
                <ContendedorActividadesSinCArrusel>
                    {actividades.map((actividades) =>
                        <CotenedorDivImagen key={actividades._id}>
                            <ContenedorImagen style={{ backgroundImage: `url(${actividades.Imagen})` }}>
                            </ContenedorImagen >
                            <p> {actividades.Titulo}</p>
                        </CotenedorDivImagen>)}
                </ContendedorActividadesSinCArrusel>

            </ContenedorActividades>
            <ContenedorComentarios>
                <ContenedorMensajes>
                    {
                        Itinerario.Comentarios.map((comentarios, index) =>
                            <ComentarioBurbuja key={index}>
                                <ImagenComentario style={{ backgroundImage: `url(${comentarios.FotoUsuario})` }} />
                                <p>{comentarios.Comentario}</p>
                                {Usuario ? Usuario.id === comentarios.UsuarioId ? <><DeleteOutlineIcon id={comentarios._id} onClick={() => borrarComentario(comentarios._id)} /> <Modal comentarios={Itinerario.Comentarios} id={comentarios._id} /></> : ""
                                    : ""}
                            </ComentarioBurbuja>
                        )
                    }
                </ContenedorMensajes>
            </ContenedorComentarios >
            <ContenedorInput>
                <Form onSubmit={nuevoComentario}>
                    <Comentario type="text"></Comentario>
                    <BotonComentar type="submit"><SendIcon /></BotonComentar>
                </Form>
            </ContenedorInput >
        </ContenedorPrincipal >
    )
}