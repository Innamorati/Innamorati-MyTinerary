import logo from './logo.svg';
import './App.css';
import Index from './pages/index.js'
import Navbar from './components/navbar.js'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Index/>
    </div>
  );
}

export default App;
