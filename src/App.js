<<<<<<< HEAD
import './App.css';
import Navbar from './componentes/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/index'
=======

import './App.css';
import Index from './pages/index.js'
import Navbar from './components/navbar.js'
import Cities from "./pages/Cities.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Piepagina from './components/footer';

>>>>>>> d3e1e0c39a316016907fbb4205a0376c621d4440


function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Navbar/>
    <div className='App'>
      <Routes>
        <Route path={"/index"} element={<Index/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  )
=======
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="*" element={<Index/>}></Route>
        <Route path="/Cities" element={<Cities/>}></Route>
     </Routes>
     <Piepagina/>
    </div>
        
    </BrowserRouter>
  );
>>>>>>> d3e1e0c39a316016907fbb4205a0376c621d4440
}

export default App;
