import React from "react";
import Noche from '../assents/Noche.jpg'
import '../index.css'
import Carrusel from '../components/carrusel.js'
import NocheCamping from "../assents/Carpa.jpg"
import Carruselexpediciones from "../components/Carruselexpediciones";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';





    function Index(){
    return(
        <div>
        <main>
            <div className="imagencontainer">
            <div className="Frasecontenedor">
                <h2 className="Frase">¡Find your perfect trip,
                insiders who know and love their cities!</h2>
                <p>¡Your next destination one click!</p>
                <button class="botonaccion"> Get started
                    <div class="icon">
                      <AirplanemodeActiveIcon/>
                    </div>
                </button>
            </div>
            </div>
            <div className="Aviso">
                <h3>Tu destino te espera</h3>
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