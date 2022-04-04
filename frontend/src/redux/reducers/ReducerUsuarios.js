const initialState = {
    paises: [],
    usuarios: [],
    todosUsuarios: [],
    user: null,
    mensaje: null,
    token: null,
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
        case 'token':
            return {
                ...state,
                token: action.payload,
            }
        case 'paises':
            let pais = []
            let limpiar = action.payload
            limpiar.data.map(paises => {
                pais.push(
                    {
                        nombre: paises.name.common
                    }
                )
            })
            return {
                ...state,
                paises: pais,
            }


        default:
            return state
    }
}
export default userReducer