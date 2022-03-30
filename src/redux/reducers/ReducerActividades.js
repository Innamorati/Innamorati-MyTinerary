const estadoInicial = {
    Actividades: [],

}

const ReducerActividades = (state = estadoInicial, action) => {

    switch (action.type) {
        case 'actividades':
            return {
                ...state,
                Actividades: action.payload,

            }
        case 'todasLasActividades':
            return {
                ...state,
                Actividades: action.payload,

            }
        default:
            return state
    }
}
export default ReducerActividades;