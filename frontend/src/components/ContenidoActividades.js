import React, { useEffect, useState } from "react";
import {
    Comentario,
    ContenedorPrincipal,
    ContenedorImagen,
    CotenedorDivImagen,
    ContenedorActividades,
    ContenedorComentarios,
    ContenedorInput,
    ComentarioBurbuja,
    ImagenComentario,
    ContenedorMensajes,
    Form,
    BotonComentar
} from '../style/ActividadesElementos'
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, getState } from 'react-redux'

export default function ContenidoActividades({ actividades, Usuario, Add, Itinerario, Del, Recargar }) {
    const [inputText, setInputText] = useState("")
    let id = actividades.map(itinerarios => itinerarios.Itinerario)
    const dispatch = useDispatch()



    async function nuevoComentario(e) {
        e.preventDefault()
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
    async function borrarComentario(id) {
        await Del(id)
        dispatch({ type: 'Actualizar', payload: !Recargar })
    }
    return (
        <ContenedorPrincipal>
            <ContenedorActividades>
                {actividades.map((actividades) =>
                    <CotenedorDivImagen key={actividades._id}>
                        <ContenedorImagen style={{ backgroundImage: `url(${actividades.Imagen})` }}>
                        </ContenedorImagen >
                        <p> {actividades.Titulo}</p>
                    </CotenedorDivImagen>)}
            </ContenedorActividades>
            <ContenedorComentarios>
                <ContenedorMensajes>

                    {
                        Itinerario.Comentarios.map(comentarios =>
                            <ComentarioBurbuja>
                                <ImagenComentario style={{ backgroundImage: `url(${comentarios.FotoUsuario})` }} />
                                <p>{comentarios.Comentario}</p>
                                {Usuario ? Usuario.id === comentarios.UsuarioId ? <><DeleteOutlineIcon id={comentarios._id} onClick={() => borrarComentario(comentarios._id)} /> <EditIcon /></> : ""
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