import styled from "styled-components";

export const Contenedor = styled.div`
    background-color: black;
    min-height: 100vh;
    padding-top: 2rem;
`;
export const Titulo = styled.h1`
    color: white;
    text-align: center;
`;
export const ContenedorTabla = styled.div`
    display: flex;
    justify-content: center;
`;
export const Tabla = styled.table`
margin: 2rem;
width: 80%;
border: 1px solid white;
border-radius: 3px;
`;
export const Cuerpotabla = styled.tbody`

`;
export const Tr = styled.tr`
    text-align: center;
`;
export const Td = styled.td`
    color: white;
    border-bottom: 1px solid lightgray;
    
`;
export const Th = styled.th`
    color: white;
    font-size: 1.5rem;
    font-weight: 100;
`;
export const Contenedoriconos = styled.div`
width: 100%;
display: flex;
justify-content: center;
    svg{
        color:white;
        margin: 1rem;
    }
`;
