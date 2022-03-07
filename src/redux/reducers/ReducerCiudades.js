const estadoInicial = {
    ciudades: [],
    filtroselect: [],
    datosfiltrados: [],
    ciudadDetalle: [],
}

const ReducerCiudades = (state = estadoInicial, action)=>{
    switch(action.type){
        case 'fetch':
            return{
                ...state,
                ciudades: action.payload,
                auxiliar: action.payload,
                filtroselect: action.payload,
                datosfiltrados: action.payload,
            }

        case 'borrar':
            return{
                ...state,
                ciudades: action.payload,
            }
        case 'AgregarCiudad':
            return{
                ...state

            }
        case 'ObtenerUnaCiudad':
            return{
                ...state,
                ciudadDetalle: action.payload
            }
        default:
            return state
        
    }
}
export default ReducerCiudades;