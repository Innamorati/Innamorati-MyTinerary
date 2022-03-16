import styled from "styled-components";

export const Contenedor = styled.div`
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
`;
export const Titulo = styled.h3`
    color:white;
    font-size: 2rem;
    font-size: 100;
    margin-bottom: 2rem;
`;
export const ContenedorFormulario = styled.div`
border-radius: 3px;
    background-color: #080808;
    min-height: 20rem;
    width: 25rem;
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
`;
export const ContenedorNombres = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;
export const Formulario = styled.form`

`;
export const Etiqueta = styled.label`
   color: white;
    /* position: absolute; */
    /* width: 100%; */

`;
export const DentroEtiqueta = styled.span`
    /* position: absolute;
    width: 100%;
    top: 1rem;
    left: 0; */
`;
export const Campos = styled.input`
    outline: none;
    height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 100;
    width: 100%;
    background: none;
    color: white;
    border: none;
    border-bottom: 1px white solid;

    svg{
       color: white; 
    }
`;
export const ContenedorBoton = styled.div`
    display: flex;
    justify-content: center;
`;
export const Boton = styled.button`
    margin-top: 10px;
    border: none;
    border-radius: 15px;
    height: 2rem;
    width: 5rem;
`;
