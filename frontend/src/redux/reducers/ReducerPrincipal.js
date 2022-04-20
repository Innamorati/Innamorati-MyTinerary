import { combineReducers } from 'redux'


import ReducerCiudades from './ReducerCiudades'
import ReducerItinerarios from './ReducerItinerarios'
import ReducerUsuarios from './ReducerUsuarios'
import ReducerActividades from './ReducerActividades'

const ReducerPrincipal = combineReducers({
    ReducerCiudades,
    ReducerItinerarios,
    ReducerUsuarios,
    ReducerActividades,
})

export default ReducerPrincipal;