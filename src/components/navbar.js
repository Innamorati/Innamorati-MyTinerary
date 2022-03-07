import React, {useState} from "react";
import Logo from '../assents/LogosinFondoNegro.png'
import PopoverNavbar from './popover';
import {Container, Wrapper, ContenedorLogo, Menu, MenuItem, MenuItemLink, IconoMenu} from "../style/Navbar.elements"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
import HouseIcon from '@mui/icons-material/House';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { grey } from '@mui/material/colors';
import {Link as LinkRouter} from "react-router-dom"
function NavBar(){
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    
    return(
        
      <Container>
          <Wrapper>
               <IconoMenu onClick={() => setShowMobileMenu(!showMobileMenu)} >
                   {showMobileMenu ?  <CloseIcon sx={{color: grey[900], fontSize: 40}}/> : <MenuIcon sx={{fontSize: 40}}/> }
               </IconoMenu>
            <ContenedorLogo>
                <img className="logomain" src={Logo}></img>
                <p>Mi Tinerary</p>
            </ContenedorLogo>
            <Menu open={showMobileMenu}>
                <MenuItem>
                <LinkRouter to="*">
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                        <HouseIcon/>
                        Home
                        </div>
                    </MenuItemLink>
                    </LinkRouter>
                </MenuItem>
                <MenuItem>
                <LinkRouter to="Cities">
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <div>
                        <AirplanemodeActiveIcon/>
                        Cities
                        </div>
                    </MenuItemLink>
                    </LinkRouter>
                </MenuItem>
            </Menu>
          </Wrapper>
          <PopoverNavbar/>
      </Container>
    )
}
export default NavBar;