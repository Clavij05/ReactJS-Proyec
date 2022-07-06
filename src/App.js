import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import navbar from './components/navegacion/Navbar';
import inicio from './components/navegacion/paginas/inicio';
import contacto from './components/navegacion/paginas/contacto';
import servicios from './components/navegacion/paginas/servicios';
import Navbar from './components/navegacion/Navbar';


function App() {



  return (
    <div className="App">
        <Router>
          
          <Navbar/>
        </Router>
    </div>
  );
}

export default App;