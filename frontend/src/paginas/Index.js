import React, { useEffect } from "react";
import '../index.css'
import Carrusel from '../components/carrusel.js'
import Carruselexpediciones from "../components/Carruselexpediciones";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import {Link as LinkRouter} from "react-router-dom"




    function Index(){
        useEffect(()=>{
            window.scrollTo(0,0)

        },[])
    return(
        <div>
        <main>
            <div className="indexcontenedor">
            <div className="imagencontainer">
            <div className="Frasecontenedor">
                <h2 className="Frase">¡Find your perfect trip,
                insiders who know and love their cities!</h2>
                <p>¡Your next destination one click!</p>
                <LinkRouter  to="Cities" className="Linkrouter" >
                    <button className="botonaccion"> Get started
                        <div className="icon">
                            <AirplanemodeActiveIcon/>
                        </div>
                    </button>
                </LinkRouter>
            </div>
            </div>
            </div>
                <h2 className="destinos">Destinations for the most adventurous</h2>
            <div className="Excursiones">
                <Carruselexpediciones/>
            </div>
            <div>
                <h2 className="destinos">Popular MYtineraries</h2>
            </div>
        <Carrusel/>
        </main>
        </div>   
            

    )    
}

export default Index; 