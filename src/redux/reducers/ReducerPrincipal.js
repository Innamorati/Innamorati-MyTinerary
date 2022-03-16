import { combineReducers } from 'redux'


import ReducerCiudades from './ReducerCiudades'
import ReducerItinerarios from './ReducerItinerarios'
import ReducerUsuarios from './ReducerUsuarios'

const ReducerPrincipal = combineReducers({
    ReducerCiudades,
    ReducerItinerarios,
    ReducerUsuarios,
})

export default ReducerPrincipal;