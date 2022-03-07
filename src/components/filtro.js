import react, { useState } from 'react'

import {Buscador, BuscadorContenedor, Selector} from '../style/Cities.elements'
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';

export default function Filtro(){
    const ciudades = useSelector(state => state.ReducerCiudades.ciudades)
    // console.log(ciudades)

    const [busqueda, setBusqueda] = useState()
    
    let todosloscontinentes = ciudades?.map(ciudades=>ciudades.Continente)
    let limpiar = new Set(todosloscontinentes)
    let continentes = [...limpiar]
    // console.log(continentes)

    const filtroContinentes=e=>{
        const seleccionado = (e.target.value)
        // console.log(seleccionado)
    }
    const parametroBusqueda=e=>{
        setBusqueda(e.target.value);
        // console.log(e.target.value)
    }
    
    return(
        <BuscadorContenedor>
            <SearchIcon> </SearchIcon>
            <Buscador type="search" value={busqueda} onChange={parametroBusqueda}></Buscador>
                <Selector>
                    <option value="todos" onChange={filtroContinentes}> All continest</option>
                {continentes?.map((continente, index)=>
                    <option value={continente} onChange={filtroContinentes} key={index}>{continente}</option>
                )}
                </Selector>
        </BuscadorContenedor>
    )
}