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
    flex: colums;
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
`;
export const  ImagenContenedor = styled.div`
    width: 30rem ;
    border-radius: 10px;
    border-radius: 3px;
    height: 20rem;
    overflow: hidden;
    background-color: #080808;
`;
export const ImagenDetalle = styled.img`
    height: 20rem;
    border-radius: 4px;
`;
export const ContenedorDescripcion = styled.div`
    padding: 0 1rem;
    width: 50rem;
    
    
`;
export const Parrafo = styled.p`
    color: white;
    margin-bottom : 1rem;
    font-size: 1.3rem;
    svg{
        color: green;
    }
`;
export const DatosCiudades = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ContenedorDatos = styled.div`
    display: flex;
    flex-direction: row;
`;
export const ParrafoIcon = styled.div`
    display: flex;
    margin-right: 5rem;
`;
export const ContenedortIntinerarios = styled.div`
    background-color: black;
    min-height: 20rem;
    padding-top: 2rem;
    
`;
export const TituloIntinerarios = styled.h2`
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 100;
    margin-bottom: 1rem;
`;
export const IntinerariosInformacion = styled.div`
    height: 30rem;
    width: 18rem;
    background-color: #080808;
    margin: 0 10px;
    display: flex;
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ContenedorImgfPerfil = styled.div`
    width: 15rem;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const NombreActividad = styled.h2`
    color:white;
    font-size: 2rem;
    margin-bottom: 1rem;
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
`;
export const ContenedorPrecio = styled.div`
    margin-top: .5rem;
    display: flex;
    justify-content: center;
    svg{
        color:green;
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
       color:red;
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
export const VerMas = styled.button`
    height: 2.3rem;
    width: 8rem;
    border:none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    margin-top: .5rem;
`;