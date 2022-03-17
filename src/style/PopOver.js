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
    width: 18rem;
    margin: .2rem 0;
    outline:none;

`;
export const Contenedor = Styled.form`
    background-color: #080808;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    label{
        color:white;
        
    }
    h4{
        color:white;
    }
`;
export const ContenedorBoton = Styled.div`
    display: flex;
    justify-content: center;
`;
export const ContenedorImagen = Styled.div`
    height: 3rem;
    width: 3rem;
    

    img{
        width: 3rem;
        height: 3rem;
        border-radius: 100px;
        object-fit: cover;
    }
`;
