import React, { useState } from "react";
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

export const DetalleItinerarioswhithRouter = withRouter(CiudadDetallesIntinerario);
export const CiudadDetalleWhitRouter = withRouter(CiudadDetalleCiudad);
const DetallesCiudadwithRouter = withRouter(Detalleciudades);
const RegistroWhitRouter = withRouter(Registro);

export const App = () => {
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
        <Piepagina />
      </div>
    </BrowserRouter>
  );
};
