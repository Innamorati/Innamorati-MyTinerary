import Styled from "styled-components"

export const Container = Styled.div `
position: relative;
z-index: 3;
color:white;
display:flex;
align-content: center;
justify-content: center;
align-items:center;
height: 5rem;
padding: 0 2.5rem 0 .5rem;
`;

export const Wrapper = Styled.div `
width:100%;
height: 4rem;
display: flex;
justify-content:flex-end;
@media screen and (max-width: 768px){
    display: flex !important;
    align-items: center;
    justify-content: flex-start
}
`;

export const ContenedorLogo = Styled.div `
display: flex;
align-items: center;
width: 100%;
p {
   font-Size:2rem;
}
@media screen and (max-width: 768px){
    display: none;
    
}
`;

export const Menu = Styled.ul `
display: flex;
justify-content: flex-end;
align-items:center;
@media screen and (max-width: 768px){
    position: absolute;
    top:0px;
    left: 0;
    width: 50%;
    height: 100vh;
    justify-content:center;
    flex-direction: colum !important;
    align-items:center;
    transition: 0.5s all ease;
    background-color: white ;
    flex-direction:column ;

}

`;

export const MenuItem = Styled.li `
display: flex;
justify-content: end;
margin: 0 10px 0 10px;

@media screen and (max-width: 768px){
        
    }
`;

export const MenuItemLink = Styled.a `
font-size: 1.2rem;
font-weight:600;
display: flex;
  height: 2em;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee4b;
  border-radius: 20px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  background: #fff;
  color: black;
  margin-right: 2rem;
    svg{
        margin-right: 5px;
        margin-left: 5px;
        font-size: 20px;
        transition: all 0.4s ease-in;

        &:hover{
            font-size: 1.2em;
            transform: translateX(-5px); 
        }
    }
    &:hover{
        box-shadow: 3px 3px 10px #d1d1d1, -3px -3px 10px #ffffff;
        transform: translateY(-2px);
    }
    @media screen and (max-width: 768px){
        background-color: black ;
        color: white;
        box-shadow: 0;

        &:hover{
            box-shadow: 0 0 0, 0 0 0;
            transform: translateY(0px);
        }
     
    
}
`;

export const IconoMenu = Styled.div`
display: none;

    div{
        svg{
            
        }
    }
@media screen and (max-width: 768px){
    display: flex !important;
    align-items: center;
    justify-content: flex-start
    cursor:pointer;
}
`