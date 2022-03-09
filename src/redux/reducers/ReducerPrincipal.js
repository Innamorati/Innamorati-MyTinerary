import { combineReducers } from 'redux'


import ReducerCiudades from './ReducerCiudades'
import ReducerItinerarios from './ReducerItinerarios'

const ReducerPrincipal = combineReducers({
    ReducerCiudades,
    ReducerItinerarios,
})

export default ReducerPrincipal;