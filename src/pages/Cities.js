import React from "react";
import styled from "styled-components";
import {
    Titulo,
    Buscador,
    BuscadorContenedor,
    Contenedor,
    BotonBuscador,
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';

function Cities() {
    
    return(
            <Contenedor>
                <Titulo>Find your perfect city</Titulo>
                <BuscadorContenedor>
                    <Buscador type="search">
                        
                    </Buscador>
                    <SearchIcon/>
                </BuscadorContenedor>     
            </Contenedor>
    );
}
export default Cities;