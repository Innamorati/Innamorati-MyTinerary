import React from "react";
import Noche from '../assents/Noche.jpg'
import "../style/index.css"
import Navbar from "../componentes/navbar.js"


function index(){
    return(
        <div>
            <img className="imagenNoche" src={Noche} alt='Noche estrellada'></img>
        </div>

    )    
}

export default index; 