import React, {useState} from 'react';
import './App.css';
import Index from './paginas/Index.js'
import Navbar from './components/navbar.js'
import Cities from "./paginas/Cities.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Piepagina from './components/footer';
import CitiesDetalles from './paginas/CitiesDetalles'
import Controlciudades from './paginas/Controlciudades'



export const App = () => {

 

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="*" element={<Index/>}></Route>
        <Route path="/Cities" element={<Cities/>}></Route>
        <Route path="/Cities/Detalle/:id" element={<CitiesDetalles/>}></Route>
        <Route path="/Control" element={<Controlciudades/>}></Route>
     </Routes>
     <Piepagina/>
    </div>
        
    </BrowserRouter>
  );
}


