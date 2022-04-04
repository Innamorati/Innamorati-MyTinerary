import React from "react";
import { Boton, ContenedorBoton } from "../style/PopOver";
import { Contenedor } from "../style/PopOverConUsuario";
import AccionesUsuarios from "../redux/acciones/AccionesUsuarios";
import { connect } from "react-redux";

function PopOverConUsuario(props) {

    const cerrando = () => {
        let correo = props.user.mail
        props.cerrarSecion(correo)
    }

    return (

        <>
            <Contenedor>
                <ContenedorBoton>
                    <Boton onClick={cerrando} type="none">Sing Out</Boton>
                </ContenedorBoton>
            </Contenedor>
        </>
    )
}
const mapDispatchToProps = {
    iniciarSecion: AccionesUsuarios.iniciarSecion,
    cerrarSecion: AccionesUsuarios.cerrarSecion,
};
const mapStateToProps = (state) => {
    return {
        user: state.ReducerUsuarios.user
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PopOverConUsuario);