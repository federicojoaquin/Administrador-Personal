import React from 'react'
import '../../stylesheets/Gastos/ListaDeGastos.css' 
import {BsTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'

function Gasto({id, desc, monto, fecha, tipo, frec, eliminarGasto, actualizarGato}) {
  return (
    <>
      <div className='gasto row'>
        <div className='col-md-11 col-sm-11'>
          <h2 className='gasto-title'>{desc}</h2>
          <p className='detalle-gasto'>Monto: <b className='detalle-gasto'>{monto}</b></p>
          <p className='detalle-gasto'>Fecha: <b className='detalle-gasto'>{fecha}</b></p>
          <p className='detalle-gasto'>Tipo: <b className='detalle-gasto'>{tipo}</b></p>
          <p className='detalle-gasto'>Frecuencia: <b className='detalle-gasto'>{frec}</b></p>
        </div>
        <div className='col-md-1 col-sm-1'>
          <div className='row justify-content-center' >
            <div className='iconos row justify-content-end' onClick={() => eliminarGasto(id)}><BsTrashFill /></div>
            <div className='iconos row justify-content-end'><AiFillEdit /></div>
          </div>
          
        </div>  
      </div>
    </>
  )
}

export default Gasto; 
