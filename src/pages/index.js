import React from "react";
import Noche from '../assents/Noche.jpg'
import '../index.css'
import Carrusel from '../components/carrusel.js'
import NocheCamping from "../assents/Carpa.jpg"
import Carruselexpediciones from "../components/Carruselexpediciones";





function Index(){
    return(
        <div>
        <main>
            <div className="imagencontainer">
            <img className="imagenNoche" src={NocheCamping} alt='Noche estrellada'/>
            <div className="Frasecontenedor">
                <h2 className="Frase">¡Find your perfect trip,
                insiders who know and love their cities!</h2>
            </div>
            </div>
            <div className="Excursiones">
                <h2 className="destinos">Destinations for the most adventurous</h2>
                <div className="segundocarrusel">
                    <Carruselexpediciones/>
                </div>
            </div>
            <h2 className="destinos">Popular MYtineraries</h2>
        <Carrusel/>
        </main>
        </div>   
            

    )    
}

export default Index; 
