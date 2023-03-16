import React from 'react'
import Formulario from './Formulario';
import ListaDeGastos from './ListaDeGastos';
import '../../stylesheets/Gastos/Gastos.css' 
import AddButton from '../AddButton';
import '../../stylesheets/Gastos/AddButton.css'

// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route,
// } from 'react-router-dom';

function Gastos() {
  return (
    <div className='main'>
      <AddButton ruta='gastos/formulario'/>
      <div className='gastos-container'>
        {/* <Formulario /> */}
        <ListaDeGastos />
      </div>
    
    {/* <Router>
      <Routes>
        <Route path='/formulario' element={<Formulario/>} exact></Route>
      </Routes>
    </Router>  */}
  </div>
  )
}

export default Gastos; 

