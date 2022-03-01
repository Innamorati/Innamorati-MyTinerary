import React, {useState} from 'react';
import './App.css';
import Index from './pages/index.js'
import Navbar from './components/navbar.js'
import Cities from "./pages/Cities.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Piepagina from './components/footer';
import CitiesDetalles from './pages/CitiesDetalles'



export const App = () => {

 

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="*" element={<Index/>}></Route>
        <Route path="/Cities" element={<Cities/>}></Route>
        <Route path="/Cities/Detalle/:id" element={<CitiesDetalles/>}></Route>
     </Routes>
     <Piepagina/>
    </div>
        
    </BrowserRouter>
  );
}


