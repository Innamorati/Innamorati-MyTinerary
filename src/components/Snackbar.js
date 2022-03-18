import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Li, Ul } from '../style/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomizedSnackbars(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        dispatch({
            type: 'mensaje',
            payload: {
                view: false,
                message: '',
                success: false
            }
        });
    };
    return (

        <div>
            {props.snackbar.view === true && (
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={props.snackbar.view} autoHideDuration={4000} onClose={handleClose}>
                        {props.snackbar.success === true ?
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                {typeof props.snackbar.mensaje === "string" ? <p>{props.snackbar.mensaje}</p> : <Ul >{props.snackbar.mensaje.map(mensaje => <Li>{mensaje.mensaje}</Li>)}</Ul>}
                            </Alert> :
                            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                {typeof props.snackbar.mensaje === "string" ? <p>{props.snackbar.mensaje}</p> : <Ul>{props.snackbar.mensaje.map(mensaje => <li>{mensaje.message}</li>)}</Ul>}
                            </Alert>}

                    </Snackbar>
                </Stack>
            )
            }
        </div >
    );
}
const mapStateToProps = (state) => {
    return {
        snackbar: state.ReducerUsuarios.snackbar,
    }
}

export default connect(mapStateToProps, null)(CustomizedSnackbars);
