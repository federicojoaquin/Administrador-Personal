import React from 'react'
import '../../stylesheets/Gastos/ListaDeGastos.css' 
import {BsTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'

function Gasto({id, desc, monto, fecha, tipo, frec, eliminarGasto, actualizarGato}) {
  return (
    <>
      <div className='col-md-2'>
        {desc}
      </div>
      <div className='col-md-2'>
        {monto}
      </div>
      <div className='col-md-2'>
        {fecha}
      </div>
      <div className='col-md-2'>
        {tipo}
      </div>
      <div className='col-md-2'>
        {frec}

      </div>
      <div className='gastos-conenedor-borrar col-md-2'
        onClick={() => eliminarGasto(id)}>
        <BsTrashFill />
        <AiFillEdit />
      </div>
    </>
  )
}

export default Gasto; 
