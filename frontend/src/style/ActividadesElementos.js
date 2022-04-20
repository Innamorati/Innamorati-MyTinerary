import styled from 'styled-components'

export const ContenedorPrincipal = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CotenedorDivImagen = styled.div`
height: 12rem;
width: 12.6rem;
margin: .5rem ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
p{
    margin-top: .8rem;
    color: white;
    font-size: 1.2rem;
}
`;
export const ContenedorImagen = styled.div`
    min-height: 10rem;
    width: 12rem;
    object-fit: cover;
    background-size: 15rem 11rem;
    background-repeat: no-repeat;
    border-radius: 3px; 
`;
export const ContenedorActividades = styled.div`
    display: flex;
    flex-direction: row;
`;
export const ContenedorComentarios = styled.div`
    height: 12.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
export const ContenedorInput = styled.div`
 display: flex;
    flex-direction: row;
    svg{
        color: white;
        margin:.5rem 0 0 1rem;
    }
`;
export const Comentario = styled.div`
    width: 36rem;
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
`;
export const ComentarioBurbuja = styled.div`
    background-color: black;
    display: flex;
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