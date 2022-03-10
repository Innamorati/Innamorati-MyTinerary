import react, { useState } from 'react'

import {Buscador, BuscadorContenedor, Selector} from '../style/Cities.elements'
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import {connect} from "react-redux";
import AccionesCiudades from '../redux/acciones/AccionesCiudades';

function Filtro(props){
    const ciudades = useSelector(state => state.ReducerCiudades.ciudades)
    const [busqueda, setBusqueda] = useState()
    const filtroSelect = props.filtroSelect
    const longitud = props.datosFiltrados.length

    console.log(longitud)

    let todosloscontinentes = props.auxiliar?.map(ciudades=>ciudades.Continente)
    let limpiar = new Set(todosloscontinentes)
    let continentes = [...limpiar]

    const filtroContinentes=e=>{
        const seleccionado = (e.target.value)
        // props.VisibilidadAviso(longitud)
        props.FiltroSelect(ciudades, seleccionado)
     
    }
    const parametroBusqueda=parametro=>{
        props.Filtrar(filtroSelect, parametro)

    }
    props.VisibilidadAviso(longitud)
    return(
        <BuscadorContenedor>
            <SearchIcon> </SearchIcon>
            <Buscador type="search" value={busqueda} onChange={(evento)=>parametroBusqueda(evento.target.value)}></Buscador>
                <Selector onChange={filtroContinentes}>
                    <option value="todos" onChange={filtroContinentes}>All continets</option>
                {continentes?.map((continente, index)=>
                    <option value={continente} onChange={filtroContinentes} key={index}>{continente}</option>
                )}
                </Selector>
        </BuscadorContenedor>
    )
}
const mapDispatchToProps = {
    ObtenerUnaCiudad: AccionesCiudades.ObtenerUnaCiudad,
    Filtrar: AccionesCiudades.Filtrar,
    FiltroSelect: AccionesCiudades.FiltroSelect,
    VisibilidadAviso: AccionesCiudades.VisibilidadAviso 
}

const mapStateToProps =(state)=>{
    return{ 
        ciudades: state.ReducerCiudades.ciudades,
        filtroSelect: state.ReducerCiudades.filtroSelect,
        datosFiltrados: state.ReducerCiudades.datosFiltrados,
        auxiliar: state.ReducerCiudades.auxiliar,
        Valores: state.ReducerCiudades.Valores,
        visivilidad: state.ReducerCiudades.visivilidad,
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filtro)