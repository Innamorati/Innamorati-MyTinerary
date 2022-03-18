import React, { useEffect } from 'react'
import "./App.css";
import Index from "./paginas/Index.js";
import Navbar from "./components/navbar.js";
import Cities from "./paginas/Cities.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Piepagina from "./components/footer";
import Detalleciudades from "./paginas/CitiesDetalles";
import { withRouter } from "./components/withRouter";
import CiudadDetallesIntinerario from "./components/CiudadDetallesIntinerario";
import CiudadDetalleCiudad from "./components/CiudadDetalle.Ciudad";
import Registro from "./paginas/Registro";
import CustomizedSnackbars from "../src/components/Snackbar";
import AccionesUsuarios from "./redux/acciones/AccionesUsuarios";
import { connect } from "react-redux";

export const DetalleItinerarioswhithRouter = withRouter(CiudadDetallesIntinerario);
export const CiudadDetalleWhitRouter = withRouter(CiudadDetalleCiudad);
const DetallesCiudadwithRouter = withRouter(Detalleciudades);
const RegistroWhitRouter = withRouter(Registro);

function App(props) {
  useEffect(() => {

    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Index />}></Route>
          <Route path="/Cities" element={<Cities />}></Route>
          <Route path="/Cities/Detalle/:id" element={<DetallesCiudadwithRouter />}></Route>
          <Route path="/Registro" element={<RegistroWhitRouter />}></Route>
        </Routes>
        <CustomizedSnackbars></CustomizedSnackbars>
        <Piepagina />
      </div>
    </BrowserRouter>
  );
};
const mapDispatchToProps = {
  VerificarToken: AccionesUsuarios.VerificarToken,

}
export default connect(null, mapDispatchToProps)(App);