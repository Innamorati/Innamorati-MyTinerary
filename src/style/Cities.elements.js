import styled from "styled-components";

export const Contenedor = styled.div`
    background-color: black;
    min-height: 100vh;
    padding-top: 10px;
`;

export const Titulo = styled.h1`
text-align: center;
color: white;
`;
export const BuscadorContenedor = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 1rem 0;
position: relative;
svg{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15.5%;
    }
`;
export const Buscador = styled.input`
width: 70%;
height: 2rem;
font-size: 1rem;
padding: 0 5px 0 35px;
`;
export const BotonBuscador = styled.button`
    
`;
