import React from 'react'
import Formulario from './Formulario';
import ListaDeGastos from './ListaDeGastos';
import '../../stylesheets/Gastos/Gastos.css' 

function Gastos() {
  return (
    <div className='gastos-container'>
      {/* <Formulario /> */}
      <ListaDeGastos />
    </div>
  )
}

export default Gastos; 

