import React from "react";
import Logo from '../assents/LogosinFondoNegro.png'
import CuentaLogo from '../assents/logocuneta.svg'
import LogoMenu from '../assents/menu.svg'


function NavBar(){
    return(
        <div className="Navbar">
            <img className="logomenu" src={LogoMenu}></img>
            <img className="imagenlogo" src={Logo} alt='Logo MiTinerary'></img>
            <div className="navbarleft">
                <a><h1>MiTinerary</h1></a>
            </div>
            <div className="navbarrigth">
                <a>Cities</a>
                <a>Popular MYtineraries</a>
                <img  src={CuentaLogo}></img>
            </div>



        </div>
    )
}
export default NavBar;