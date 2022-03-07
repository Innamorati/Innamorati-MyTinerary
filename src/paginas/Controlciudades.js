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
import {connect} from 'react-redux'
import AccionesCiudades from "../redux/acciones/AccionesCiudades.js";
import {useSelector} from 'react-redux'

class  ControlCiudades extends React.Component {
    // state ={
    //     arrayCiudades:[]
    // }

    componentDidMount() {
        this.props.ObtenerCiudades()       
    }

    handleDelete = (id) => {
        this.props.BorrarCiudad(id)
        console.log('borrar ciudad id '+id)
        
    }
    

render(){
    console.log(this.props.ciudades)
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
            { this.props.ciudades && this.props.ciudades.map((datos) =>{

                return(
                    <Tr key={datos._id}>
                        <Td>{datos.ciudad}</Td>
                        <Td>{datos.Pais}</Td>
                        <Td>{datos.Imagen}</Td>
                        <Td>{datos.Continente}</Td>
                        <Td>{datos._id}</Td>
                        <Td><DeleteOutlineIcon onClick={()=>this.handleDelete(datos._id)}></DeleteOutlineIcon></Td>
                    </Tr>
                )
                })   
            }
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
}
const mapDispatchToProps = {
    ObtenerCiudades: AccionesCiudades.ObtenerCiudades,
    BorrarCiudad: AccionesCiudades.BorrarCiudad,
}
const mapStateToProps = (state)=>{
    return{
        ciudades: state.ReducerCiudades.ciudades,
        filtroselect: state.ReducerCiudades.filtroselect,
        datosfiltrados: state.ReducerCiudades.datosfiltrados,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlCiudades);