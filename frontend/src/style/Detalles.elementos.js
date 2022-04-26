import styled from "styled-components";

export const ContenedorTitulo = styled.div`
    margin: 2rem 0 1rem 0;
`;

export const ContenedorInformacion = styled.div`
    background-color: #080808;
    height: 24rem;
    padding: 2rem;
    border-radius: 3px;
    display: flex;
    transition: all 1s cubic-bezier(0.09, 0.32, 0.34, 1.13);

    @media (max-width:1000px){
        flex-direction: column;
        height: 40rem;
    }
    @media (max-width:570px){
        height: ${({ detalles }) => (detalles ? "60rem" : "25rem")}; 
        max-height: 70rem; 
    }
    @media (max-width:375px){
        height: ${({ detalles }) => (detalles ? "60rem" : "25rem")}; 
        max-height: 70rem; 
    }

`;
export const Titulo = styled.h1`
color: white;
text-align: center;
font-weight: 100;
font-size: 2.5rem;
`;

export const Contenedor = styled.div`
    background-color: black;
    padding: 10px;
    transition: all 1s linear;
    overflow: hidden;
    @media (max-width:1000px){
        display : flex;
        flex-direction: column;
    }
    @media (max-width:570px){
        display : flex;
        flex-direction: column;
    }
`;
export const ImagenContenedor = styled.div`   
    height: 20rem;
    min-width: 30rem;
    border-radius: 10px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #080808;

    @media (max-width:1280px){
        width : 100%;
        max-width: 40rem;
    }
    @media (max-width:1000px){
        height: 20rem; 
        max-width: 60rem;
    }
    @media (max-width:700px){
        min-height: 14rem; 
    }
    @media (max-width:570px){
        margin-bottom: 1rem;
        height: 20rem;
        min-width: 100%;
    }
`;
export const ImagenDetalle = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
    @media (max-width:1280px){
        object-fit: cover;
        width : 100%;
    }
    @media (max-width:1000px){
        height: 30rem; 
    }
    @media (max-width:700px){
        height: 13rem; 
    }
    @media (max-width:570px){
        height: 20rem;
        width: 100%; 
    }
`;
export const ContenedorDescripcion = styled.div`
    padding: 0 1rem;
    width: 50rem;  
        @media (max-width:1000px){
            display: flex;
            width: 100%;
            align-items: center;
            margin-top: 1rem; 
        }
        @media (max-width:700px){
            display: flex;
            width: 100%;
            align-items: center;
            margin-top: 1rem; 
        }
        @media (max-width:570px){
            display: none; 
        }
`;

export const Parrafo = styled.p`
    color: white;
    margin-bottom : 1rem;
    font-size: 1.3rem;
    svg{
        color: green;
    }
    @media (max-width:650px){
        font-size: 1.2rem;
    }
`;
export const DatosCiudades = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width:1000px){
        justify-content: center;
    }
`;
export const ContenedorTextoDescripcion = styled.div`
    width: 100%;
    transition: all 1s linear;
    overflow: hidden;

`;
export const ContenedorDatos = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width:570px){
        align-items: center;
        flex-direction: column;
    }
`;
export const ParrafoIcon = styled.div`
    display: flex;
    margin-right: 5rem;

    @media (max-width:570px){
        margin: 0;
    }

`;

export const TituloIntinerarios = styled.h2`
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 100;
    margin-bottom: 1rem;
`;
export const ItinerariosContenedor = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ContenedorMapero = styled.div`
    transition: all 1s linear;
    width: ${({ open }) => (open ? "30rem" : "18rem")};
    height: 30rem;
    background-color: red;
    height: 30rem;
`;
export const ContenedorImgfPerfil = styled.div`
    width: 15rem;
    height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const NombreActividad = styled.h2`
    color:white;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
`;
export const ImagenPerfil = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 80px;
    object-fit: cover;
    margin-bottom: .5rem;
`;
export const NombreUsuario = styled.h3`
    color: white;
    margin: 0 2rem;
    font-size: 1.5rem;
    text-align: center;
`;
export const ContenedorPrecio = styled.div`
    margin-top: 1rem;
    color:white;
    display: flex;
    justify-content: center;
    svg{
        color:green;
    }
`;
export const VerMas = styled.button`
height: 2.3rem;
width: 8rem;
border:none;
font-size: 1rem;
font-weight: 600;
border-radius: 5px;
margin-top: .5rem;
`;
export const ContenedortIntinerarios = styled.div`
background-color: black;
min-height: 20rem;
padding-top: 2rem;

`;
export const IntinerariosInformacion = styled.div`
margin-bottom: 1rem !important;
width: ${({ expandir }) => (expandir ? "18rem" : "60rem")};
height: 30rem;
background-color: #080808;
margin: 0 10px;
padding: 1rem;
border-radius: 3px;
display: flex;
justify-content: center;
justify-content: ${({ expandir }) => (expandir ? "center" : "flex-start")};
transition: all 1s linear;

@media (max-width:1000px){
    width: ${({ expandir }) => (expandir ? "18rem" : "90%")};
    }
    @media (max-width:500px){
        height: ${({ expandir }) => (expandir ? "30rem" : "64rem")};
        width: ${({ expandir }) => (expandir ? "18rem" : "90%")};
        flex-direction: column;
        max-height: 70rem; 
    }
`;
export const ContenedorDuracion = styled.div`
    display: flex;
    justify-content: center;
    color:white;
    margin-top: .5rem;
    svg{
        color:white;
    }
`;
export const Duracion = styled.h4`
    font-size: 1.3rem; 
    font-weight: 100;
    
`;
export const ContenedorLike = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    svg{
        color: red;
    }
`;
export const NumeroLike = styled.h4`
    color:red;
`;
export const ContenedorEtiquetas = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const Etiquetas = styled.h4`
    color:white;
    margin-left:10px; 
`;
export const ContenedorSinExpandir = styled.div`
    width: 18rem;
    height: 30rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 1s linear;
    @media (max-width:500px){
        width: ${({ expandir }) => (expandir ? "18rem" : "100%")};
    }
`;
export const ContenedorExpandir = styled.div`
    display: flex;
    transition: all 1.5s linear;
    height: 28.2rem;
    flex-direction: column;
    width: ${({ expandir }) => (expandir ? "0" : "40rem")};
    border-radius: 3px;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
   
    h3{
        font-size: 4rem;
        text-align:center;
        color:white;
    }
    @media (max-width:500px){
        width: ${({ expandir }) => (expandir ? "18rem" : "100%")};
    }
`;
export const ContenedorMediaQueries = styled.div`
    display: flex;
    transition: all 1s linear;
    @media (max-width:570px){
        transition: all 1s linear;
        display: flex;
        justify-content: center;
    }
`;
export const ContenedorTransicion = styled.div`
    display: none;
    transition: all 1s linear;
    overflow: hidden;
    @media (max-width:570px){
        transition: all 1s cubic-bezier(0.09, 0.32, 0.34, 1.13);
        display: flex;
        height: ${({ detalles }) => (detalles ? "27rem" : "0rem")};
        overflow: hidden;
        justify-content: center;
    }
    @media (max-width:375px){
        transition: all 1s cubic-bezier(0.09, 0.32, 0.34, 1.13);
        display: flex;
        height: ${({ detalles }) => (detalles ? "35rem" : "0rem")};
        overflow: hidden;
        justify-content: center;
    }
`;
export const ContenedorBoton = styled.div`
    display: none;
    @media (max-width:570px){
        display: flex;
        justify-content: center;
    }
`; 
