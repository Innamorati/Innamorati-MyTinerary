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
    Avisobusqueda,
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
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
    var [Vacio, setVacio] = useState(false)
    var longitud = Datosfiltrados?.length
    var unsolodato = Ciudades?.map(ciudades => ciudades.Continente)
    const limpiar = new Set(unsolodato)
    var continentes = [...limpiar]
   

    const parametroBusqueda=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);

    } 
    
    
    var filtrar =(parametroBusqueda)=>{
        var sinespacios = parametroBusqueda.split(" ").join("")
        var resultadoBusqueda=filtroSelect.filter((ciudades)=>{
           if(ciudades.ciudad.toString().toLowerCase().startsWith(sinespacios.toLowerCase())){
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
        }
        setDatosfiltrados(filtroSelect)   
    }
    var visibilidadAviso = () =>{
        console.log(longitud)
        if(longitud >= 1){
            Vacio = true
            console.log(Vacio)
        }
        else{
            Vacio = false
            console.log(Vacio)
        }
    }
    visibilidadAviso()
    console.log(<Avisobusqueda></Avisobusqueda>)
    return(
        <Contenedor>
                <Titulo>Find your perfect city</Titulo>
                <BuscadorContenedor>
                    <Buscador type="search" value={busqueda} onChange={parametroBusqueda} ></Buscador>
                    <Selector onChange={filtroContinentes}>
                        <option value="todos">Continent</option>
                        {continentes?.map((continente)=>
                            <option value={continente} onChange={filtroContinentes} >{continente}</option>
                            )}
                    </Selector>
                    
                    <SearchIcon/>
                </BuscadorContenedor> 
                <Avisobusqueda visibilidad={Vacio}>
                    Sorry no match... Please try again.
                    <ErrorOutlineIcon></ErrorOutlineIcon>
                </Avisobusqueda>
                <CartasPrincipal>
                {Datosfiltrados?.map ((ciudades)=> 
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