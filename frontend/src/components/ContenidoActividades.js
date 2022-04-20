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

} from '../style/ActividadesElementos'
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

export default function ContenidoActividades({ actividades, Usuario, Add, Itinerario, Del }) {
    const [inputText, setInputText] = useState("")
    let id = actividades.map(itinerarios => itinerarios.Itinerario)

    useEffect(() => {

    }, [])

    const nuevoComentario = () => {

        const datos = {
            Comentario: "Amazing bro",
            UsuarioId: Usuario.id,
            FotoUsuario: Usuario.imagen,
            Itinerario: id[0]
        }
        Add(datos)
    }
    const borrarComentario = (event) => {
        console.log(event.target.id)
        Del(event.target.id)
    }
    // console.log(Itinerario.Comentarios)
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
                {
                    Itinerario.Comentarios.map(comentarios =>
                        <ComentarioBurbuja>
                            <ImagenComentario style={{ backgroundImage: `url(${comentarios.FotoUsuario})` }} />
                            <p>{comentarios.Comentario}</p>
                            {Usuario ? Usuario.id === comentarios.UsuarioId ? <><DeleteOutlineIcon id={comentarios._id} onClick={borrarComentario} /> <EditIcon /></> : ""
                                : ""}
                        </ComentarioBurbuja>
                    )
                }
            </ContenedorComentarios >
            <ContenedorInput>
                <Comentario id="comentario" onInput={(event) => setInputText(event.currentTarget.textContent)} contentEditable>
                </Comentario>
                <SendIcon onClick={nuevoComentario} />
            </ContenedorInput >
        </ContenedorPrincipal >
    )
}