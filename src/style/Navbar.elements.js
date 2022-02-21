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
    font-family: 'Dancing Script', cursive;
   font-Size:2.6rem;
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
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 50%;
    height: 100vh;
    padding: 10% 0 0 0;
    justify-content:start;
    flex-direction: colum !important;
    align-items:center;
    transition: 0.5s all ease;
    background-color: white ;
    flex-direction:column ;

}
@media screen and (max-width: 376px){
    width: 100% !important;
}

`;

export const MenuItem = Styled.li `
display: flex;
justify-content: end;
margin: 0 10px 0 10px;
a{
    text-decoration:none;
}

@media screen and (max-width: 768px){
    justify-content:center !important;
    align-items:center;
    width: 10rem;
    width: 100%;
        
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

    div{
        display: flex;
        justify-content:center;
        align-items:center;
        height: 100%;
        width: 100%;
    svg{
        display:none;
    }

    }
    &:hover{
        box-shadow: 3px 3px 10px #d1d1d1, -3px -3px 10px #ffffff;
        transform: translateY(-2px);
    }
    @media screen and (max-width: 768px){
        margin: 0 0 1rem 0;
        background-color: white ;
        color: black;
        box-shadow: 0;
        border-radius:0;
        width: 10rem;

        &:hover{
            width: 20rem;
            border-radius: 10px;
            background-color:black;
            color: white;
            box-shadow: 0 0 0, 0 0 0;
            transform: translateY(0px);
        }
        div{
            svg{
                display: flex;
                flex-direction:column;
                
            }
        }
    
}
`;

export const IconoMenu = Styled.div`
display: none;
position: absolute;
z-index: 3;

    div{
        svg{
            
        }
    }
@media screen and (max-width: 768px){
    display: flex !important;
    align-items: center;
    justify-content: flex-start;
    cursor:pointer;
}
`