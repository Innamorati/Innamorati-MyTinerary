const estadoInicial = {
    itinerarios: [],
    auxiliar: [],
    itinerariosCiudades: [],
    expandir: true,
    visivilidadItinerarios: null,
    Actualizar: false,
}

const ReducerItinerarios = (state = estadoInicial, action) => {

    switch (action.type) {
        case 'todos':
            return {
                ...state,
                itinerarios: action.payload,
                auxiliar: action.payload,
            }
        case 'Ciudad':
            return {
                ...state,
                itinerariosCiudades: action.payload,
            }
        case 'CambiarEstado':
            return {
                ...state,
                expandir: action.payload
            }
        case 'VisivilidadAlertaItinerarios':
            let mostrarItinerarios
            if (action.payload === 0) {
                mostrarItinerarios = false
            }
            else {
                mostrarItinerarios = true
            }
            return {
                ...state,
                visivilidadItinerarios: mostrarItinerarios
            }
        case 'Actualizar':
            return {
                ...state,
                Actualizar: action.payload
            }
        default:
            return state
    }
}
export default ReducerItinerarios;
