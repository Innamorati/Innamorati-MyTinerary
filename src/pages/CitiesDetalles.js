import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {Link as LinkRouter} from "react-router-dom"
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
import {Datos} from '../llamadasApi/LlamadasApi'

export default function CitiesDetalles(){
    const [Ciudades, setCiudades] = useState()
    const {id} = useParams()
    const ciudad = Ciudades?.filter(datos => datos._id == id)
    useEffect(()=>{
        window.scrollTo(0,0)

        Datos()
        .then(respuesta=> setCiudades(respuesta.data.respuesta.ciudades))
    },[])

    return(
        <Contenedor>
            <CartasPrincipal>
                {ciudad?.map((ciudad)=>
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