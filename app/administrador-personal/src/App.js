
import './App.css';
import Cards from './componentes/Cards.js';
import Navbar from './componentes/Navbar.js'

import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';

import Home from './componentes/Home/Home.js'; 
import Gastos from './componentes/Gastos/Gastos.js';
import Finanzas from './componentes/Finanzas/Finanzas.js';
import Gantt from './componentes/Gantt/Gantt.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Cards />  */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact></Route>
          <Route path='/gastos' element={<Gastos/>}></Route>
          <Route path='/finanzas' element={<Finanzas/>}></Route>
          <Route path='/gantt' element={<Gantt/>}></Route>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
