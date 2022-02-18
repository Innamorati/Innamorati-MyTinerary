import React from "react";
import Noche from '../assents/Noche.jpg'
import '../index.css'




function Index(){
    return(
        <div>
            <img className="imagenNoche" src={Noche} alt='Noche estrellada'></img>
        </div>

    )    
}

export default Index; 