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
  ContenedorPrincipal,
  Input,
} from "../style/PopOver";
import AccionesUsuarios from "../redux/acciones/AccionesUsuarios";
import PopOverSinUsuario from "./PopOverSinUsuario";

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
    console.log(datosUsuarios);

  };
  console.log(props.user == null)
  return (
    <ContenedorPrincipal>
      <AccountCircleIcon
        aria-describedby={id}
        onClick={handleClick}
        sx={{ fontSize: 50 }}
        className="botoncuenta"
      />
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
            <PopOverSinUsuario />
            : "hola"
          }

        </Contenedor>
      </Popover>
    </ContenedorPrincipal>
  );
}
const mapDispatchToProps = {
  iniciarSecion: AccionesUsuarios.iniciarSecion
};
const mapStateToProps = (state) => {
  return {
    user: state.ReducerUsuarios.user
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PopoverNavbar);
