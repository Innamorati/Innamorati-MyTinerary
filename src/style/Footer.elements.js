import styled from "styled-components";



export const Contenedor = styled.div`
width: 100%;
height: 25vh;
background-color: black;
display: flex;
padding: 2rem;
@media screen and (max-width: 1440px){
    height: 30vh;
}
@media screen and (max-width: 768px){
    flex-direction: column;
    height: 43rem;
}
@media screen and (max-width: 425px){
    flex-direction: column;
    align-items: center;
    height: 38rem;
    background-color: black !important;
}
`;
export const Navegacion = styled.div`
height: 100%;
width: 15%;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h3{
    color: white;
}
@media screen and (max-width: 1440px){
  h3{
      font-size: 1.5rem;
  }  
}
@media screen and (max-width: 425px){
    width:100%;
    text-align: center;
    h3{
        margin-top: 1rem;
        font-size: 2rem;
    }
}

`;
export const Navegacioncont = styled.div`
color: white;
margin-top: .5rem;

@media screen and (max-width: 425px){
    width: 100%;
}

`;

export const Navegacionbutones = styled.div`
color: white;
text-decoration: none;
    a{
        margin-top: 5px;
        font-size: 1.2rem;
        text-decoration: none;
        color: white;
    }
    &:hover{
        transform: translateY(-2px);
    }
@media screen and (max-width: 1440px){
    a{
        font-size: 1.5rem;
    }
}
@media screen and (max-width: 476px){
    a{
        font-size: 2rem;
    }
}
`;

export const Redes = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 1rem;
width: 15%;
@media screen and (max-width: 1440px){
     height: 100%;
}
@media screen and (max-width: 768px){
    height: 100% ;
}
@media screen and (max-width: 425px){
    width: 100%;
    height: 30%;
    padding: 0;

}


`;
export const Redesiconos = styled.div`
display: flex;
height: 2.3rem;
justify-content: center;
padding-left: 8px;

svg{
    color: white;
    display: flex;
    align-items: center;
   &:hover{
    transform: translateY(-2px);
   }
  
}
@media screen and (max-width: 1440px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    svg{
        font-size: 2.5rem;
    }
}
@media screen and (max-width: 768px){
    height: 10%;
}
@media screen and (max-width: 425px){
      padding: 0;
      width: 100%;
      height: 100%;
      svg{
          font-size: 2.5rem;
      }
    }
`;

export const Contacto = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1em;
width: 50%;
@media screen and (max-width: 1440px){

}
@media screen and (max-width: 425px){
        width: 100%;
    }

`;

export const Contactotitulo = styled.h3`
color: white;
margin: 0 0 0 .8rem ;
@media screen and (max-width: 1440px){
    font-size: 2rem;
}
@media screen and (max-width: 476px){
        font-size: 1.8rem;
    }

`;
export const Contactocontenido = styled.div`

input{
    margin: .8rem 0 0 .8rem;
    height: 1.5rem;
}
@media screen and (max-width: 1440px){
    input{
        height: 2rem;
    }
}
@media screen and (max-width: 784px){
    display:flex;
    flex-direction: row;
}
@media screen and (max-width: 476px){
    input{
        height:2rem ;
    }
}
@media screen and (max-width: 376px){
    display: flex;
    flex-direction: row;
    
    input{
        flex-direction: row;
    }
}

`;

export const ContactoMail = styled.div`

input{
    margin: .8rem 0 0 .8rem;
    height: 1.5rem;
    width: 22.5rem;
}
@media screen and (max-width: 1440px){
    input{
        height: 2rem;
    }
}
@media screen and (max-width: 476px){
    input{
        height: 2rem;
    }  
    }
@media screen and (max-width: 376px){
    input{
        margin: .2rem 0 0 .1rem !important;
    }
}
`;
export const IconoEnviar = styled.button`
color: black;
height: 1.5rem;
margin: .8rem 0 0 .8rem;
width: 22.5rem;


    &:hover{
        transform: translateY(-2px);  
    }
@media screen and (max-width: 1440px){
    height: 2rem;
}
@media screen and (max-width: 476px){
    height: 2rem;
}
`; 
export const Politicas = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 0 0 .7rem;
@media screen and (max-width: 476px){
        width:100%;
    }

`;
export const PoliticasTitulo = styled.h3`
color: white;
padding: 1em;
width: 100%;
@media screen and (max-width: 1440px){
    text-align: center;
    padding: 10px;
    font-size:2rem;
}
@media screen and (max-width: 476px){
      text-align: center;
      font-size: 2rem;
      padding: 0.5rem;
    }
`;
export const PoliticasLista = styled.ul`
list-style: none;
@media screen and (max-width: 1440px){
    font-size: 1.5rem;
}
`;
export const PoliticasItems = styled.li`
cursor: pointer;
color: white;
&:hover{
        transform: translateY(-2px);  
    }
    @media screen and (max-width: 476px){
        font-size: 1.5rem;
    }
`;