
import './App.css';
import Index from './pages/index.js'
import Navbar from './components/navbar.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Index/>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
