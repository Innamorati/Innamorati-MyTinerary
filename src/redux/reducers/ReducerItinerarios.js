const estadoInicial={
    itinerarios: [],
    auxiliar: [],
    itinerariosCiudades: [],
    expandir: true
}

const ReducerItinerarios = (state = estadoInicial, action)=>{
   
    switch(action.type){
        case 'todos':
            return{
                ...state,
                itinerarios: action.payload,
                auxiliar: action.payload,
            }
        case 'Ciudad':
            return{
                 ...state,
                itinerariosCiudades: action.payload,
            }
        case 'CambiarEstado':
            return{
                ...state,
                expandir: action.payload
            }
    default:
        return state
} 
}
export default ReducerItinerarios;
