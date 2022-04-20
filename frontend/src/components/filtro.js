import { useState } from 'react'

import { Buscador, BuscadorContenedor, Selector } from '../style/Cities.elements'
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import { connect } from "react-redux";
import AccionesCiudades from '../redux/acciones/AccionesCiudades';

function Filtro(props) {
    // const ciudades = useSelector(state => state.ReducerCiudades.ciudades)
    const [busqueda] = useState()
    // const filtroSelect = props.filtroSelect



    // let todosloscontinentes = props.continentes?.map(ciudades => ciudades.Continente)
    // let limpiar = new Set(todosloscontinentes)
    // let continentes = [...limpiar]


    const filtroContinentes = e => {
        props.FiltroSelect(props.ciudades, e.target.value)
    }
    const parametroBusqueda = parametro => {
        props.Filtrar(props.filtroSelect, parametro)

    }

    return (
        <BuscadorContenedor>
            <SearchIcon> </SearchIcon>
            <Buscador type="search" value={busqueda} onChange={(evento) => parametroBusqueda(evento.target.value)}></Buscador>
            <Selector onChange={filtroContinentes}>
                <option value="todos">All continets</option>
                {props.continentes?.map((continente, index) =>
                    <option value={continente} key={index}>{continente}</option>
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

const mapStateToProps = (state) => {
    return {
        ciudades: state.ReducerCiudades.ciudades,
        filtroSelect: state.ReducerCiudades.filtroSelect,
        datosFiltrados: state.ReducerCiudades.datosFiltrados,
        auxiliar: state.ReducerCiudades.auxiliar,
        continentes: state.ReducerCiudades.continentes,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filtro)