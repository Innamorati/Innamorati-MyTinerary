import { Input } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import { ContenedorBoton } from "../style/PopOver";
import {
    Contenedor,
    ContenedorFormulario,
    Titulo,
    Formulario,
    Campos,
    ContenedorNombres,
    Etiqueta,
    DentroEtiqueta,
    Boton,
} from "../style/RegistroStyle";
import AccionesUsuarios from "../redux/acciones/AccionesUsuarios";

function Registro(props) {
    const registrarse = (event) => {

        event.preventDefault(event)
        const datos = {
            nombre: event.target[0].value,
            apellido: event.target[1].value,
            correo: event.target[2].value,
            contrasena: event.target[3].value,
            pais: event.target[4].value,
            from: "registro"
        }
        // props.obtenerUsuarios()
        props.cargarUsuarios(datos)
        console.log(datos, props.todosUsuarios)
    }

    return (
        <Contenedor>
            <Titulo>Complete your registration</Titulo>
            <ContenedorFormulario>
                <Formulario onSubmit={registrarse}>
                    <Etiqueta ><DentroEtiqueta>First name</DentroEtiqueta></Etiqueta>
                    <Campos></Campos>
                    <Etiqueta><DentroEtiqueta>Last name</DentroEtiqueta></Etiqueta>
                    <Campos type="text"></Campos>
                    <Etiqueta><DentroEtiqueta>Email</DentroEtiqueta></Etiqueta>
                    <Campos type="email"></Campos>
                    <Etiqueta><DentroEtiqueta>Password</DentroEtiqueta></Etiqueta>
                    <Campos type="password"></Campos>
                    <Etiqueta><DentroEtiqueta>Country</DentroEtiqueta></Etiqueta>
                    <Campos></Campos>
                    <ContenedorBoton>
                        <Boton type="sunmit">Register</Boton>
                    </ContenedorBoton>

                </Formulario>
            </ContenedorFormulario>
        </Contenedor>
    )
}
const mapDispatchToProps = {
    cargarUsuarios: AccionesUsuarios.cargarUsuarios,
    obtenerUsuarios: AccionesUsuarios.obtenerUsuarios,
};

const mapStateToProps = (state) => {
    return {
        todosUsuarios: state.ReducerUsuarios.todosUsuarios
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registro);
