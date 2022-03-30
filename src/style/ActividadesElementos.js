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
    height: 13.2rem;
`;
export const ContenedorInput = styled.div`
 display: flex;
    flex-direction: row;
    svg{
        color: white;
        margin:.5rem 0 0 1rem;
    }
`;
export const Comentario = styled.input`
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
    overflow: scroll;
    max-width: 36rem;
`;