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
    BotonDetalle,
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';
import Datos from "../dates/ciudades"
import {Link as LinkRouter} from "react-router-dom"
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