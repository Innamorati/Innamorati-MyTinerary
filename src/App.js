
import './App.css';
import Index from './pages/index.js'
import Navbar from './components/navbar.js'
import Cities from "./pages/Cities.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="*" element={<Index/>}></Route>
        <Route path="/Cities" element={<Cities/>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
