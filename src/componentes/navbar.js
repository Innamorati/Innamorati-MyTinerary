import React from 'react';
import "../style/navbar.css"
import LogoCuenta from "../assents/logocuneta.svg"
import IconoMenu from "../assents/IconoMenu.svg"
import LogoLimpio from "../assents/LogosinFondoNegro.png"
function Navbar(){
    return(
        <div className='navbar'>
            <div>
                <img src={IconoMenu} alt="logomenu" className='logomenu'></img>
            </div>
            <img src={LogoLimpio} alt="Logo" className="Logomain" ></img>
            <div className='navbarleft'>
                <a>My Tinerary</a>
            </div>
            <div className='navbarrigth'>
                <a className='btn'>City</a>
                <a className='btn'>Popular MyTinerary</a>
            </div>
            <img src={LogoCuenta} alt="logocuenta" className='imgcuenta'></img>
        </div>
    )
}

export default Navbar;