import React, { useEffect } from "react";
import {
    Comentario,
    ContenedorPrincipal,
    ContenedorImagen,
    CotenedorDivImagen,
    ContenedorActividades,
    ContenedorComentarios,
    ContenedorInput,
} from '../style/ActividadesElementos'
import SendIcon from '@mui/icons-material/Send';

export default function ContenidoActividades({ actividades }) {
    console.log(actividades)
    return (
        <ContenedorPrincipal>
            <ContenedorActividades>
                {actividades.map((actividades) =>
                    <CotenedorDivImagen>
                        <ContenedorImagen style={{ backgroundImage: `url(${actividades.Imagen})` }}>
                        </ContenedorImagen >
                        <p> {actividades.Titulo}</p>
                    </CotenedorDivImagen>)}
            </ContenedorActividades>
            <ContenedorComentarios>

            </ContenedorComentarios>
            <ContenedorInput>
                <Comentario>
                </Comentario>
                <SendIcon />
            </ContenedorInput>
        </ContenedorPrincipal >
    )
}