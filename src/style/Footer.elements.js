import styled from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Link as LinkRouter} from "react-router-dom"


export const Contenedor = styled.div`
width: 100%;
height: 20vh !important;
background-color: black;
display: flex;
`;
export const Navegacion = styled.div`
height: 100%;
width: 15%;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h3{
    color: white;
}

`;
export const Navegacioncont = styled.div`
color: white;
margin-top: .5rem;

`;

export const Navegacionbutones = styled.div`
color: white;
text-decoration: none;
    a{
        margin-top: 5px;
        font-size: 1.2rem;
        text-decoration: none;
        color: white;
    }
    &:hover{
        transform: translateY(-2px);
    }
`;

export const Redes = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 1rem;
width: 15%;

`;
export const Redesiconos = styled.div`
display: flex;
height: 2.3rem;
justify-content: center;
padding-left: 8px;

svg{
    color: white;
    display: flex;
    align-items: center;
   &:hover{
    transform: translateY(-2px);
   }
    
}

`;

export const Mapa = styled.div`

`;