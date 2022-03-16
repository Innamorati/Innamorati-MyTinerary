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

function PopoverNavbar() {
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
    const datosUsuarios = {
      Correo: event.target[0].value,
      Contraseña: event.target[1].value,
      Desde: "signin",
    };
    event.preventDefault(event);
    console.log(datosUsuarios);
  };

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
          {/* <form onSubmit={enviarInformacion}> */}
          <h4>Sign-in</h4>
          <label>Email:</label>
          <Input
            name="correo"
            type="email"
            placeholder="exaple@mail.com"
          ></Input>
          <label>Password:</label>
          <Input
            name="password"
            type="password"
            placeholder="*********"
          ></Input>
          <ContenedorBoton>
            <Boton type="submit">Sign In</Boton>
          </ContenedorBoton>
          <h4>¿You still don’t have an account?</h4>
          {/* </form> */}
          <ContenedorBoton>
            <LinkRouter to="Registro">
              <Boton>Sing Up</Boton>
            </LinkRouter>
          </ContenedorBoton>
        </Contenedor>
      </Popover>
    </ContenedorPrincipal>
  );
}
const mapDispatchToProps = (state) => { };
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PopoverNavbar);
