import { combineReducers } from 'redux'


import ReducerCiudades from './ReducerCiudades'

const ReducerPrincipal = combineReducers({
    ReducerCiudades,
})

export default ReducerPrincipal;