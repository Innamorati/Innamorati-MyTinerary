import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'
import {Link as LinkRouter} from "react-router-dom"
import Datos from '../dates/ciudades'
import {
    Contenedor,
    CartasPrincipal,
    CartasContenedor,
    ContendeorImagen,
    CartasImagen,
    TituloCiudad,
} from '../style/Cities.elements'
import {
    Titulo,
    BotonVolver,
}from '../style/Detalles.elementos'

export default function CitiesDetalles(){
const {id} = useParams()
const ciudad = Datos.filter(datos => datos.id == id)
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <Contenedor>
            <CartasPrincipal>
                {ciudad.map((ciudad)=>
                    <CartasContenedor>
                        <ContendeorImagen>
                            <CartasImagen src={process.env.PUBLIC_URL+`/imagenes/ciudades/${ciudad.Imagen}`}/> 
                        </ContendeorImagen>
                        <TituloCiudad>
                            {ciudad.ciudad}
                        </TituloCiudad>    
                    </CartasContenedor>
            )}  
            </CartasPrincipal> 
            <Titulo>
                Under Construction
            </Titulo>
            <LinkRouter to={`/Cities`}>
                <BotonVolver>To return</BotonVolver>      
            </LinkRouter>
       </Contenedor>
    )

}