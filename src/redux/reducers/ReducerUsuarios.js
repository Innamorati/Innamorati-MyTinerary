const initialState = {
    usuarios: [],
    todosUsuarios: [],
    user: null,
    mensaje: null,
    snackbar: {
        view: false,
        mensaje: '',
        success: false
    },

}

const userReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'iniciarSecion':
            return {
                ...state,
                user: action.payload,
            }
        case 'registro':
            return {
                ...state,
                usuarios: action.payload,
            }
        case 'obtenerUsuarios':
            return {
                ...state,
                todosUsuarios: action.payload,
            }
        case 'mensaje':
            return {
                ...state,
                snackbar: action.payload,
            }

        default:
            return state
    }
}
export default userReducer