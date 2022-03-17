import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'

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
    // props.setOpen(props.snackbar.view)
    return (

        <div>
            {props.snackbar.view === true && (
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Button variant="outlined" onClick={handleClick}>
                        Open success snackbar
                    </Button>
                    <Snackbar open={props.snackbar.view} autoHideDuration={4000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            {props.snackbar.mensaje}
                        </Alert>
                    </Snackbar>
                    {/* <Alert severity="error">This is an error message!</Alert>
                <Alert severity="warning">This is a warning message!</Alert>
                <Alert severity="info">This is an information message!</Alert>
                <Alert severity="success">This is a success message!</Alert> */}
                </Stack>
            )}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        snackbar: state.ReducerUsuarios.snackbar,
    }
}

export default connect(mapStateToProps, null)(CustomizedSnackbars);
