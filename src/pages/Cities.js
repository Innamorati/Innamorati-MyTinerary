import React from "react";
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
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';
import Datos from "../dates/ciudades"

function Cities() {
    
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
                    <CartasContenedor key={ciudades.id}>
                        <ContendeorImagen>
                            <CartasImagen src={process.env.PUBLIC_URL+`/imagenes/ciudades/${ciudades.Imagen}`}></CartasImagen>
                        </ContendeorImagen>
                        <TituloCiudad>
                            {ciudades.ciudad}
                        </TituloCiudad>
                    </CartasContenedor>   
                )}    
                </CartasPrincipal>
            </Contenedor>
    );
}
export default Cities;