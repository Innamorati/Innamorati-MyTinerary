import React from "react";
import Logo from '../assents/LogosinFondoNegro.png'
import LogoMenu from '../assents/menu.svg'
import PopoverNavbar from './popover';


function NavBar(){

    
    return(
        <div className="Navbar">
            <img className="logomenu" src={LogoMenu}></img>
            <img className="imagenlogo" src={Logo} alt='Logo MiTinerary'></img>
            <div className="navbarleft">
                <a><h1>MiTinerary</h1></a>
            </div>
            <div className="navbarrigth">
                <button className="btn">Cities</button>
                <button className="btn">Popular MYtineraries</button>
                <PopoverNavbar/>
            </div>
 btn


        </div>
    )
}
export default NavBar;