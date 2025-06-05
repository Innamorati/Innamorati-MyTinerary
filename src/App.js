import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Login from "./componets/Login";
import Listado from "./componets/Listado";
import { useEffect } from 'react';
import './style/App.css'


function App() {

  let token = null

  useEffect(() => {
    const token = localStorage.getItem('token');
  })

  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="listado" Component={Listado} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
