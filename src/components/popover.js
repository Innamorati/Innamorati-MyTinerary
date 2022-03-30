import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link as LinkRouter } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { connect } from "react-redux";
import {
  Boton,
  Contenedor,
  ContenedorBoton,
  ContenedorImagen,
  ContenedorPrincipal,
  Input,
} from "../style/PopOver";

import AccionesUsuarios from "../redux/acciones/AccionesUsuarios";
import PopOverSinUsuario from "./PopOverSinUsuario";
import PopOverConUsuario from "./PopOverConUsuario";
import FacebookIniciarSecion from "./FacebookIniciarSecion";
import { ImageNotSupported } from "@mui/icons-material";


function PopoverNavbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const enviarInformacion = (event) => {
    event.preventDefault(event);

    const datosUsuarios = {
      correo: event.target[0].value,
      contrasena: event.target[1].value,
      from: "iniciarSecion",
    };
    props.iniciarSecion(datosUsuarios)
  };
  console.log(props)
  return (
    <ContenedorPrincipal >

      <ContenedorImagen
        sx={{ fontSize: 50 }}
        onClick={handleClick}
      >
        {props.user !== null ? <img src={props.user.imagen}></img> : <AccountCircleIcon>
        </AccountCircleIcon>}
      </ContenedorImagen>




      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Contenedor onSubmit={enviarInformacion}>
          {props.user == null ?
            <>
              <h4>Sign-in</h4>
              <label>Email:</label><Input
                name="correo"
                type="email"
              ></Input><label>Password:</label><Input
                name="password"
                type="password"
              ></Input>
              <ContenedorBoton>
                <Boton type="submit">Sign In</Boton>
              </ContenedorBoton>
              <ContenedorBoton>
                <h4>Or</h4>
                <FacebookIniciarSecion />
              </ContenedorBoton>
              <h4>¿You still don’t have an account?</h4>
              <ContenedorBoton>
                <LinkRouter to="Registro">
                  <Boton type="submit">Sing Up</Boton>
                </LinkRouter>
              </ContenedorBoton></>
            : <PopOverConUsuario></PopOverConUsuario>}
        </Contenedor>
      </Popover>

    </ContenedorPrincipal>
  );
}
const mapDispatchToProps = {
  iniciarSecion: AccionesUsuarios.iniciarSecion,
  cerrarSecion: AccionesUsuarios.cerrarSecion,
};
const mapStateToProps = (state) => {
  return {
    user: state.ReducerUsuarios.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PopoverNavbar);
