import React from "react";
import Logo from '../assents/LogosinFondoNegro.png'
import PopoverNavbar from './popover';
import {Container, Wrapper, ContenedorLogo, Menu, MenuItem, MenuItemLink, IconoMenu} from "./Navbar.elements"
import MenuIcon from '@mui/icons-material/Menu';
function NavBar(){

    
    return(
        
      <Container>
          <Wrapper>
               <IconoMenu>
                   <MenuIcon sx={{ fontSize: 40 }}/>
               </IconoMenu>
            <ContenedorLogo>
                <img className="logomain" src={Logo}></img>
                <p>Mi Tinerary</p>
            </ContenedorLogo>
            <Menu>
                <MenuItem>
                    <MenuItemLink className="btn">
                        Home
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink className="btn">
                        Cities
                    </MenuItemLink>
                </MenuItem>
            </Menu>
          </Wrapper>
          <PopoverNavbar/>
      </Container>
    )
}
export default NavBar;