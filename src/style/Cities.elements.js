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
export const CartasPrincipal = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

`;

export const CartasContenedor = styled.div`
    margin: 1rem;
    height: 20rem;
    width: 25rem;
    transition: all 0.1s ease-in;
    overflow: hidden;
    border-radius: 10px;
    
    &:hover{
        transition: all 0.1s ease-in;
        
        img{
            transition: all 0.1s ease-in;
            transform: scale(1.1);
        }
        ::before{
            background-color: rgb(0, 0, 0, 0.5);
            z-index: 2;
        }
    }
`;

export const ContendeorImagen = styled.div`
height: 18rem;
width: 25rem;
border-radius: 10px;
overflow: hidden;
`;
export const  CartasImagen = styled.img`
height: 18rem;
width: 25rem;
border-radius: 10px;
transition: all 0.1s ease-in;
`;

export const TituloCiudad = styled.h2`
text-align: center;
color: white;
`;