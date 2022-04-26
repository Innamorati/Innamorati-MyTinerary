import styled from "styled-components";



export const Contenedor = styled.div`
width: 100%;
height: 25vh;
background-color: #080808;
display: flex;
padding: 2rem;
@media screen and (max-width: 1440px){
    height: 30vh;
}
@media screen and (max-width: 768px){
    flex-direction: column;
    height: 43rem;
    padding: 0;
}
@media screen and (max-width: 425px){
    padding: 0;
    flex-direction: column;
    align-items: center;
    height: 38rem;
    padding: 0;
    background-color: black !important;
}
@media screen and (max-width: 375px){
    height: 40rem;
    padding: 1rem;
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
@media screen and (max-width: 768px){
    width:100%;
    padding: 0;
    height: 10rem;
    margin: 1rem 0 0 0 ;
    h3{
        font-size: 2rem;
    }
}
@media screen and (max-width: 425px){
    padding: 0;
    height: 10rem;
    width:100%;
    padding: 0;
    text-align: center;
    h3{
        margin-top: 1rem;
        font-size: 2rem;
    }
}
@media screen and (max-width: 375px){
    height: 10rem;
    padding: .5rem;
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
@media screen and (max-width: 768px){
    a{
        font-size: 2rem;
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
    flex-direction: row;
    height: 5rem ;
    width: 100%;
    padding: 0;
    align-items: center;
}
@media screen and (max-width: 425px){
    flex-direction: row;
    width: 100%;
    height: 15%;
    padding: 0;

}
@media screen and (max-width: 375px){
    padding: 1rem;
    height: 5rem;
    flex-direction: row;
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
@media screen and (max-width: 768px){
    width: 100%;
    padding: 0;
}
@media screen and (max-width: 425px){
    width: 100%;
}

@media screen and (max-width: 375px){
    padding: 0;
    width: 100%;
}
`;

export const Contactotitulo = styled.h3`
color: white;
margin: 0 0 0 .8rem ;
@media screen and (max-width: 1440px){
    font-size: 2rem;
}
@media screen and (max-width: 768px){
    margin: 0;
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
    flex-direction: row;
   
    input{
        height: 3rem;
        width: 18.6rem;
        margin: .4rem .4rem;
        font-size: 1.8rem;
        ::placeholder{
            padding:.5rem;
        }
    
    }
}
@media screen and (max-width: 425px){
    margin: 0;
    padding: 0;
    width: 100%;
    input{
        height:2rem ;
        width: 100%;
        margin-left: 0;
    }
}
@media screen and (max-width: 320px){
    display: flex;
    flex-direction: column;
    
    input{
        flex-direction: row;
        width: 18rem;
        font-size: .9rem;
        font-weight: 600;
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
@media screen and (max-width: 768px){
    width: 100%;
    margin: 0 .5rem;
    input{
        height: 3rem;
        width: 100%;
        margin: .4rem .4rem;
        font-size: 1.8rem;
        ::placeholder{
            padding-left: .5rem;
        }
    }
}
@media screen and (max-width: 425px){
    width: 100%;
    margin: 0;
    padding: 0;
    input{
        height: 2rem;
        width: 100%;
        margin: 0;
        margin-top: .4rem;
    }  
    }
@media screen and (max-width: 320px){
    input{
        font-size: .9rem;
        width: 18rem;
        font-weight: 600;
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
@media screen and (max-width: 768px){
  margin: .4rem .5rem;
  margin-left: .5rem;
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
}
@media screen and (max-width: 425px){
    height: 2rem;
    width: 22rem;
    margin-top: 1rem;
}
@media screen and (max-width: 320px){
  width: 18rem;
}
@media screen and (max-width: 375px){
    width: 100%;
    margin: .4rem .4rem;
    margin-top: 1rem;
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