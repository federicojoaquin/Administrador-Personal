import React, { useState } from 'react'
import Formulario from './Formulario'
import Gasto from './Gasto'
import Search from '../Search'
import '../../stylesheets/Gastos/ListaDeGastos.css'

function ListaDeGastos() {

  const [gastos, setGastos] = useState([]); 

  const agregarGastos = gasto => { 

    if (gasto.desc.trim() && gasto.monto.trim() && gasto.fecha.trim() && gasto.frec.trim()) {
        gasto.desc = gasto.desc.trim(); 
        gasto.monto = gasto.monto.trim();
        gasto.fecha = gasto.fecha.trim();
        gasto.tipo = gasto.fecha.trim();
        gasto.frec = gasto.frec.trim();

        const gastosActualizados = [gasto, ...gastos]; 
        setGastos(gastosActualizados); 
    }
  }; 

  const eliminarTarea = id => { 
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados); 
  }; 

  return (
    <div className='container'>
        <div className='row'>
            <div className='formulario col-md-4 col-sm-12'>
                <Formulario onSubmit={agregarGastos}/>
            </div>
            <div className='tabla col-md-8 col-sm-12'>
                <Search />
                <div className='row justify-content-center'>
                    <div className='col-md-2 columna'>
                        <p><b>Descripción</b></p>
                    </div>
                    <div className='col-md-2 columna'>
                        <p><b>Monto</b></p>
                    </div>
                    <div className='col-md-2 columna'>
                        <p><b>Fecha</b></p>
                    </div>
                    <div className='col-md-2 columna'>
                        <p><b>Tipo</b></p>
                    </div>
                    <div className='col-md-2 columna'>
                        <p><b>Frecuencia</b></p>
                    </div>
                    <div className='col-md-2 columna'>
                        <p><b>Opciones</b></p>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    { 
                        gastos.map((gasto) => 
                            <Gasto 
                                
                                desc={gasto.desc}
                                monto={gasto.monto}
                                fecha={gasto.fecha}
                                tipo={gasto.tipo}
                                frec={gasto.frec}
                                />)
                
                    } 
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ListaDeGastos; 
