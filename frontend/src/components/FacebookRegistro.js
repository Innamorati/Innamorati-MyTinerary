import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import AccionesUsuarios from '../redux/acciones/AccionesUsuarios';


function FacebookRegistro(props) {

    const responseFacebook = async (respuesta) => {
        console.log(respuesta)
        console.log(respuesta.name)
        const separoNombre = respuesta.name.split(" ")
        console.log(separoNombre)

        const datos = {
            nombre: separoNombre[0],
            apellido: separoNombre[1],
            correo: respuesta.email,
            contrasena: respuesta.id,
            pais: "venezuela",
            imagen: respuesta.picture.data.url,
            from: "facebook",
            // pais: props.pais
        }
        await props.cargarUsuarios(datos)
        console.log(datos)
    }
    return (
        <FacebookLogin
            cssClass="buttonsocial my-facebook-button-class"
            icon="fa-facebook"
            textButton=" SignUp with Facebook"
            appId="986383418650407"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}

        />
    );
}
const mapDispatchToProps = {
    cargarUsuarios: AccionesUsuarios.cargarUsuarios,

}

export default connect(null, mapDispatchToProps)(FacebookRegistro);