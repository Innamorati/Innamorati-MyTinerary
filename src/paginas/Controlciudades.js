import React, {useEffect, useState} from "react";
import {
    Contenedor,
    Cuerpotabla,
    Tabla,
    Titulo,
    Th,
    Td,
    Tr,
    ContenedorTabla,
    Contenedoriconos,

} from '../style/Ciudadescontrol.elemt'
import {Datos} from '../llamadasApi/LlamadasApi'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';

function ControlCiudades(){
    useEffect(()=>{
        window.scrollTo(0,0)
         Datos()
         .then(respuesta=> {setCiudades(respuesta.data.respuesta.ciudades)})
           
     },[])
    const [Ciudades, setCiudades] = useState()
    console.log(Ciudades)
return(
    <Contenedor>
    <Titulo>
        Tabla de prueba
    </Titulo>
    <ContenedorTabla>
    <Tabla>
        <Cuerpotabla>
            <Tr>
                <Th>Ciudad</Th>
                <Th>Pais</Th>
                <Th>Imagen</Th>
                <Th>Continente</Th>
                <Th>Id</Th>
            </Tr>
            {Ciudades?.map((datos, index) =>
                <Tr key={index}>
                    <Td>{datos.ciudad}</Td>
                    <Td>{datos.Pais}</Td>
                    <Td>{datos.Imagen}</Td>
                    <Td>{datos.Continente}</Td>
                    <Td>{datos._id}</Td>
                    <Td><DeleteOutlineIcon></DeleteOutlineIcon></Td>
                </Tr>
            )}
        </Cuerpotabla>
    </Tabla>
    </ContenedorTabla>
    <Contenedoriconos>
        <AddCircleIcon></AddCircleIcon>
        <EditIcon></EditIcon>
    </Contenedoriconos>
    </Contenedor>
);
}
export default ControlCiudades;