import Styled from "styled-components";

export const ContenedorPrincipal = Styled.div`
   padding: .5rem;
`;

export const Boton = Styled.button`
    height: 2rem !important;
    width: 6rem;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 15px;
    margin: .5rem 0;

`;
export const Input = Styled.input`
    height: 2rem !important;
    font-size: 1.3rem;
    background: none;
    border: none;
    width: 18rem;
    margin: .2rem 0;
    outline:none;
    caret-color:white;
    color:white;
    border-bottom: 1px white solid;
`;
export const Contenedor = Styled.form`
    background-color: #080808;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    label{
        color:white;
        margin-top: 10px;
        
    }
    h4{
        color:white;
    }
`;
export const ContenedorBoton = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const ContenedorImagen = Styled.div`
    /* height: 3rem;
    width: 3rem; */
    background: none;
    img{
        width: 3rem;
        height: 3rem;
        border-radius: 100px;
        object-fit: cover;
    }
    svg{
        width: 3rem;
        height: 3rem;
        border-radius: 100px;
        object-fit: cover;
    }
    `;

