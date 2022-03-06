const initialState = {
    ciudades: [],
    auxiliar: [],
    andres : 'mvp+'

}

const ReducerCiudades = (state = initialState, action)=>{
    switch(action.type){
        case 'fetch':
            return{
                ...state,
                productos: action.cargar,
                auxiliar: action.cargar,
            }
        default:
            return state
        
    }
}
export default ReducerCiudades;