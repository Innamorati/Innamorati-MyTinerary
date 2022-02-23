import React from "react";
import styled from "styled-components";
import {
Buscador,
BuscadorContenedor,
Contenedor,
Titulo,
} from "../style/Cities.elements"
import SearchIcon from '@mui/icons-material/Search';

function Cities() {
    
    return(
            <Contenedor>
                <Titulo>
                    Find your pefect city
                </Titulo>
                <BuscadorContenedor>
                    <Buscador placeholder="Find here"></Buscador>
                </BuscadorContenedor>         
            </Contenedor>
    );
}
export default Cities;