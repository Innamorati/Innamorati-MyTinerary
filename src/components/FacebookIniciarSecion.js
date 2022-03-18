import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import AccionesUsuarios from '../redux/acciones/AccionesUsuarios';
import style2 from './style2.css'

function FacebookIniciarSecion(props) {

    const responseFacebook = async (respuesta) => {


        console.log(respuesta)
        const datosUsuarios = {
            correo: respuesta.email,
            contrasena: respuesta.id,
            from: "facebook",

        }
        await props.iniciarSecion(datosUsuarios)
    }

    return (
        <FacebookLogin
            cssClass="buttonsocial my-facebook-button-class"
            icon="fa-facebook"
            textButton=" with Facebook"
            appId="986383418650407"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}

        />
    );
}
const mapDispatchToProps = {
    iniciarSecion: AccionesUsuarios.iniciarSecion,

}

export default connect(null, mapDispatchToProps)(FacebookIniciarSecion);