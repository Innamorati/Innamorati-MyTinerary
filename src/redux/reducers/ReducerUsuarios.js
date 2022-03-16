const initialState = {
    usuarios: [],
    todosUsuarios: [],
    user: null,
    snackbar: {
        view: false,
        message: '',
        success: false
    },

}

const userReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'user':
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

        default:
            return state
    }
}
export default userReducer