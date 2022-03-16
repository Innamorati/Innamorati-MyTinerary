import React from "react";
import {
    Boton,
    Contenedor,
    ContenedorBoton,
    ContenedorPrincipal,
    Input,
} from "../style/PopOver";
import { Link as LinkRouter } from "react-router-dom";
export default function PopOverSinUsuario() {

    return (
        <>
            <h4>Sign-in</h4><label>Email:</label><Input
                name="correo"
                type="email"
                placeholder="exaple@mail.com"
            ></Input><label>Password:</label><Input
                name="password"
                type="password"
                placeholder="*********"
            ></Input><ContenedorBoton>
                <Boton type="submit">Sign In</Boton>
            </ContenedorBoton><h4>¿You still don’t have an account?</h4><ContenedorBoton>
                <LinkRouter to="Registro">
                    <Boton type="submit">Sing Up</Boton>
                </LinkRouter>
            </ContenedorBoton>
        </>)
}