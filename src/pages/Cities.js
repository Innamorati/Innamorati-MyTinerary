import React, {useEffect, useState} from "react";
import axios from 'axios'
import styled from "styled-components";
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
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';
import {Link as LinkRouter} from "react-router-dom"
function Cities() {

    const [Datos, setDatos] = useState()
    console.log(Datos)

    useEffect(()=>{

        axios.get(`http://localhost:4000/api/ciudades`)
          .then(respuesta=>setDatos(respuesta.data.respuesta.ciudades))
    
      },[])
    return(
            <Contenedor>
                <Titulo>Find your perfect city</Titulo>
                <BuscadorContenedor>
                    <Buscador type="search">
                        
                    </Buscador>
                    <SearchIcon/>
                </BuscadorContenedor> 
                <CartasPrincipal>
                {Datos.map((ciudades)=>
                    <BotonDetalle>
                        <LinkRouter to={`Detalle/${ciudades.id}`}>
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