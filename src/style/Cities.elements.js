import styled from "styled-components";

export const Contenedor = styled.div`
    background-color: black;
    width: 100%;
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 320px){
    height: 100%;
}
`;

export const Titulo = styled.h1`
text-align: center;
color: white;
margin-top: 2rem ;
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
        left: 10.5%;
    }
@media screen and (max-width: 320px){
    svg{
        left: 4%;
    }
}
`;
export const Buscador = styled.input`
width: 70%;
height: 2rem;
font-size: 1rem;
padding: 0 5px 0 35px;
outline: none;

`;
export const Selector = styled.select`
width: 8rem;
font-size: 1.2rem;
outline: none;
option{
    text-align: center;
    font-size: 1.2rem;
    font-weight: 100;
    hover{
        background-color:red !important;
    }
}
`;
export const Avisobusqueda = styled.div`
    height: 20rem;
    width: 70%;
    color: white;
    display: ${({ visibilidad }) => (visibilidad ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    svg{
        color: white;
        margin-top: 1rem;
        font-size: 10rem;
    }
`;
export const CartasPrincipal = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

`;
export const BotonDetalle = styled.button`
    width: 26rem;
    background-color: black;
    border: none;
@media screen and (max-width: 320px){
    width: 16rem;
}
`;
export const CartasContenedor = styled.div`
    margin: 1rem;
    height: 20rem;
    width: 25rem;
    transition: all 0.1s ease-in;
    overflow: hidden;
    border-radius: 3px;
    
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
 @media screen and (max-width: 320px){
    height: 10rem;
    width: 10rem;
    margin: 0;
}
`;

export const ContendeorImagen = styled.div`
height: 18rem;
width: 25rem;
border-radius: 3px;
overflow: hidden;
@media screen and (max-width: 320px){
    width: 16rem;
    height: 8rem;
}
`;
export const  CartasImagen = styled.img`
height: 18rem;
width: 25rem;
border-radius: 3px;
transition: all 0.1s ease-in;
object-fit: cover;
@media screen and (max-width: 320px){
    width: 16rem;
    height: 9rem;
    margin:0;
}
`;

export const TituloCiudad = styled.h2`
text-align: center;
color: white;
@media screen and (max-width: 320px){
    height: 2rem;
}
`;
