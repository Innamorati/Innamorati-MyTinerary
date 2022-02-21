import styled from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Link as LinkRouter} from "react-router-dom"


export const Contenedor = styled.div`
width: 100%;
height: 25vh !important;
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

export const Contacto = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1em;
width: 50%;

`;

export const Contactotitulo = styled.h3`
color: white;
margin: 0 0 0 .8rem ;

`;
export const Contactocontenido = styled.div`

input{
    margin: .8rem 0 0 .8rem;
    height: 1.5rem;
}

`;

export const ContactoMail = styled.div`

input{
    margin: .8rem 0 0 .8rem;
    height: 1.5rem;
    width: 22.5rem;
}
`;
export const IconoEnviar = styled.button`
color: black;
height: 1.5rem;
margin: .8rem 0 0 .8rem;
width: 22.5rem;


    &:hover{
        transform: translateY(-2px);  
    }

`; 
export const Politicas = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 0 0 .7rem;

`;
export const PoliticasTitulo = styled.h3`
color: white;
padding: 1em;
width: 100%;

`;
export const PoliticasLista = styled.ul`
list-style: none;

`;
export const PoliticasItems = styled.li`
cursor: pointer;
color: white;
&:hover{
        transform: translateY(-2px);  
    }
`;