import React from "react";
import Noche from '../assents/Noche.jpg'
import '../index.css'
import Carrusel from '../components/carrusel.js'




function Index(){
    return(
        <div>
        <main>
            <div className="imagencontainer">
            <img className="imagenNoche" src={Noche} alt='Noche estrellada'/>
            </div>
            <h2 className="destinos">Our destinations</h2>
        <Carrusel/>
        </main>
        <footer>
        </footer>
        </div>   
            

    )    
}

export default Index; 