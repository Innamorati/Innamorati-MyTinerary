import React, {useEffect, useState} from "react";
import {
    Titulo,
    Buscador,
    BuscadorContenedor,
    Contenedor,
    CartasPrincipal,
    CartasContenedor,
    CartasImagen,
    TituloCiudad,
    ContendeorImagen,
    BotonDetalle,
    Selector,
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import {Link as LinkRouter} from "react-router-dom"
import {Datos} from '../llamadasApi/LlamadasApi'



 function Cities() {

     useEffect(()=>{
         Datos()
         .then(respuesta=> {setCiudades(respuesta.data.respuesta.ciudades); setDatosfiltrados(respuesta.data.respuesta.ciudades); setFiltroSelect(respuesta.data.respuesta.ciudades)})
           
     },[])
     
    const [Ciudades, setCiudades] = useState()
    const [busqueda, setBusqueda] = useState()
    var   [Datosfiltrados, setDatosfiltrados] = useState()
    var [filtroSelect, setFiltroSelect] = useState()
    console.log(Datosfiltrados)
    var unsolodato = Ciudades?.map(ciudades => ciudades.Continente)
    const limpiar = new Set(unsolodato)
    var continentes = [...limpiar]
   

    const parametroBusqueda=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
        console.log(e.target.value)
    } 
    const filtrar =(terminoBusqueda)=>{
        var resultadoBusqueda=filtroSelect.filter((ciudades)=>{
           if(ciudades.ciudad.toString().toLowerCase().startsWith(terminoBusqueda.toLowerCase())){
               return ciudades;
           }
        })
        setDatosfiltrados(resultadoBusqueda)
    }
    
    const filtroContinentes=e=>{
        const seleccionado = (e.target.value)
        console.log(seleccionado)
        var filtroSelect = {}
        switch(seleccionado){
            case 'America' :
                filtroSelect = Ciudades.filter(ciudades=> ciudades.Continente == seleccionado)
            break;
            case 'Oceania' :
                filtroSelect = Ciudades.filter(ciudades=> ciudades.Continente == seleccionado)
            break;
            case 'Europe' :
                filtroSelect = Ciudades.filter(ciudades=> ciudades.Continente == seleccionado)
            break;
            case 'Africa' :
                filtroSelect = Ciudades.filter(ciudades=> ciudades.Continente == seleccionado)
            break;
            case 'Asia' :
                filtroSelect = Ciudades.filter(ciudades=> ciudades.Continente == seleccionado)
            break;

            case 'todos':
                filtroSelect = Ciudades.map(ciudad=>ciudad)
            break;
            default:
                filtroSelect = Ciudades.map(ciudad=>ciudad)
            break;
        }
        setDatosfiltrados(filtroSelect)
        setFiltroSelect(filtroSelect)
        console.log(filtroSelect)
        
    }
    
    return(
        <Contenedor>
                <Titulo>Find your perfect city</Titulo>
                <BuscadorContenedor>
                    <Buscador type="search" value={busqueda} onChange={parametroBusqueda}></Buscador>
                    <Selector onChange={filtroContinentes}>
                        <option value="todos">Continent</option>
                        {continentes?.map((continente)=>
                            <option value={continente} onChange={filtroContinentes} >{continente}</option>
                            )}
                    </Selector>
                    
                    <SearchIcon/>
                </BuscadorContenedor> 
                <CartasPrincipal>
                {Datosfiltrados?.map((ciudades)=>
                    <BotonDetalle>
                        <LinkRouter to={`Detalle/${ciudades._id}`}>
                        <CartasContenedor key={ciudades.id}>
                            <ContendeorImagen>
                                <CartasImagen src={process.env.PUBLIC_URL+`/imagenes/ciudades/${ciudades.Imagen}`}></CartasImagen>
                            </ContendeorImagen>
                            <TituloCiudad>
                                {ciudades.ciudad}
                            </TituloCiudad>
                        </CartasContenedor>   
                        </LinkRouter>
                    </BotonDetalle>
                )}    
                </CartasPrincipal>
            </Contenedor> 
    );
}
export default Cities;