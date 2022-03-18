import { Input } from "@mui/icons-material";
import React, { useEffect } from "react";
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
    Subtitulo,
    Menu,
    Opciones,
} from "../style/RegistroStyle";
import AccionesUsuarios from "../redux/acciones/AccionesUsuarios";
import FacebookRegistro from "../components/FacebookRegistro";

function Registro(props) {
    useEffect(() => {
        props.obtenerPaises(props.token)
    }, [])



    const registrarse = (event) => {

        event.preventDefault(event)
        const datos = {
            nombre: event.target[0].value,
            apellido: event.target[1].value,
            correo: event.target[2].value,
            contrasena: event.target[3].value,
            pais: event.target[4].value,
            imagen: event.target[5].value,
            from: "registro"
        }
        props.cargarUsuarios(datos)
    }


    return (
        <Contenedor>
            <Titulo>Complete your registration</Titulo>
            <Subtitulo>login with facebook </Subtitulo>
            <FacebookRegistro />
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
                    <Campos list="paises"></Campos>
                    <Menu id="paises">
                        <Opciones  >Select your country</Opciones>
                        {props.paises.map((paises, index) =>
                            <Opciones value={paises.nombre} key={index}>{paises.nombre}</Opciones>
                        )
                        }
                    </Menu>
                    <Etiqueta><DentroEtiqueta>URL image</DentroEtiqueta></Etiqueta>
                    <Campos></Campos>
                    <ContenedorBoton>
                        <Boton type="sunmit">Register</Boton>
                    </ContenedorBoton>

                </Formulario>
            </ContenedorFormulario>
        </Contenedor >
    )
}
const mapDispatchToProps = {
    cargarUsuarios: AccionesUsuarios.cargarUsuarios,
    obtenerUsuarios: AccionesUsuarios.obtenerUsuarios,
    obtenerToken: AccionesUsuarios.obtenerToken,
    obtenerPaises: AccionesUsuarios.obtenerPaises,
};

const mapStateToProps = (state) => {
    return {
        todosUsuarios: state.ReducerUsuarios.todosUsuarios,
        snackbar: state.ReducerUsuarios.snackbar,
        paises: state.ReducerUsuarios.paises,
        token: state.ReducerUsuarios.token,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registro);
