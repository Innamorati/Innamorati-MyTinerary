import './App.css';
import Navbar from './componentes/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/index'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='App'>
      <Routes>
        <Route path={"/index"} element={<Index/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
