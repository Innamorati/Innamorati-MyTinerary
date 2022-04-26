import styled from 'styled-components'

export const ContenedorPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const CotenedorDivImagen = styled.div`
height: 10rem;
width: 37%;
margin: .5rem ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

     @media (max-width:900px){
        border-radiusr: 3px;
         object-fit: cover;
        min-width: 15rem;
        width: 60%;
    }
    @media (max-width:570px){
        min-width: 10rem;
        width: 60%;
    }  
`;
export const ContenedorImagen = styled.div`
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-size: 15rem 10rem;
    background-repeat: no-repeat;
    border-radius: 3px;
    @media (max-width:900px){
        display: flex;
        justify-content: center;
         object-fit: cover;
         width: 80%;
        min-width: 15rem;
    } 
    @media (max-width:570px){
        min-width: 10rem;
        width: 60%;
    }  
`;
export const ContenedorActividades = styled.div`
width: 100%;
    display: flex;
    flex-direction: row;
    p{
        color: white;
        font-size: 1rem;
    }
`;
export const ContenedorComentarios = styled.div`
    height: 12.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: scroll;

`;
export const ContenedorMensajes = styled.div`
    height: auto;
    @media (max-width:500px){
        width: 100%;
}
`;
export const ContenedorInput = styled.div`
 display: flex;
flex-direction: row;
width: 100%;
    svg{
        color: white;
        margin:.5rem 0 0 1rem;
    }
`;
export const Comentario = styled.input`
    width: 100%;
    height: 2rem;
    outline: none;
    padding: 0 .2rem;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    caret-color:white;
    color: white;
    font-size: 1.3rem;
    max-width: 36rem;
    margin-top: 1rem;
`;
export const ComentarioBurbuja = styled.div`
    background-color: black;
    display: flex;
    margin: .1rem 0;
    align-items: center;
    height: 3rem;
    border-radius: 10px;
    padding: 0px 1rem;
    width: 97%;
    svg{
        color: white;
    }
    p{
        color: white;
        margin-left: 1rem;
        width: 90%;
    }
`;
export const ImagenComentario = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 15px;
    background-size: 2rem 2rem;

`;
export const Form = styled.form`
    display: flex;
    width: 100%;
`
export const BotonComentar = styled.button`
    /* width: 1rem; */
    background: none;
    border: none;
`
export const ContendedorActividadesSinCArrusel = styled.div`
    display: flex;
    object-fit: cover;
    width: 100%;
    @media (max-width:900px){
        display: none;    }
`;