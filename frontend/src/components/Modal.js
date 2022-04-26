import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { Input } from '../style/ModalStyle'
import SendIcon from '@mui/icons-material/Send';
import { connect } from 'react-redux';
import AccionesComentarios from '../redux/acciones/AccionesComentarios';
import { useDispatch } from 'react-redux';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: 'auto',
    color: 'white',
    bgcolor: 'black',
    border: '2px solid #000',
    borderRadius: '.5rem',
    p: 4,

};

function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const comentario = props.comentarios.map(comentario => comentario)
    const editable = comentario.filter(comentario => comentario._id === props.id)

    async function modificar(commentId) {

        const actualizar = props.Actualizar
        const datos = {
            comentario: input,
            comentarioId: commentId
        }
        if (input.length !== 0) {
            await props.modificarComentario(datos)
            handleClose()
            dispatch({ type: 'Actualizar', payload: !actualizar })
        }
        else {
            dispatch({ type: 'mensaje', payload: { mensaje: "The message cannot be empty", view: true, success: false } })
        }
    }

    return (
        <div>
            <button style={{ background: 'none', border: 'none' }} onClick={handleOpen}><EditIcon /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {editable.map(comentario =>
                        <div>
                            <Input type="text" placeholder={comentario.Comentario} onChange={(event) => setInput(event.target.value)}></Input>
                            <button onClick={() => modificar(comentario._id)}><SendIcon /></button>
                        </div>
                    )}
                </Box>
            </Modal>
        </div >
    );
}

const mapDispatchToProps = {
    modificarComentario: AccionesComentarios.modificarComentario
}
const mapStateToProps = (state) => {
    return {
        Actualizar: state.ReducerItinerarios.Actualizar
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BasicModal)
