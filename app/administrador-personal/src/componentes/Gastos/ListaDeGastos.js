import React, { useState } from 'react'
import Formulario from './Formulario'
import Gasto from './Gasto'
import Search from '../Search'
import '../../stylesheets/Gastos/ListaDeGastos.css'
import { useSearchParams } from 'react-router-dom'

function ListaDeGastos() {

  const [gastos, setGastos] = useState([]); 
  const [change, setChange] = useState(0); 
  const [ params, setParams ] = useSearchParams(); 
  const [flagNext, setFlagN] = useState(false); 
  const [flagPrev, setFlagP] = useState(false); 

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

  const getGastos = async () => {
    setParams({
      change: change
    });
    const response = await fetch(`http://localhost:9000/gastos?change=${change}`); 
    const gastosBase = await response.json();
    console.log(gastosBase)
    setGastos(gastosBase); 
    
  }

  const getNext = () => {
    if (flagPrev) { 
      setChange(change); 
      setFlagP(flagPrev = false); 
    }
    setChange(change + 4); 
    getGastos(); 
    setFlagN(flagNext = true); 
    
  }

  const getPrev = () => {
    if (flagNext) { 
      setChange(change); 
      setFlagN(false); 
    }
    if (change !== 0) {
        setChange(change - 4)
       
    }
    getGastos();
    setFlagP(true)

    
  }

 
  return (
    <div className='container'>
        <div className='row'>
            {/* <div className='formulario col-md-4 col-sm-12'>
                <Formulario onSubmit={agregarGastos}/>
            </div> */}
            <div className='tabla col-md-12 col-sm-12'>
                <div className='row justify-content-end'>
                    <div className='col-md-2 my-3'>
                            <button onClick={getGastos} className='btn btn-light'>Refrescar</button>
                            <button onClick={getPrev} className='btn btn-light buttons-guided'>Anterior</button>
                            <button onClick={getNext} className='btn btn-light buttons-guided'>Siguiente</button>
                    </div>
                    <Search />
                </div>
                    
                <div className='row'>
                    <div className='col-md-12'>
                        { 
                            
                            gastos.map((gasto) => 
                                <Gasto 
                                    
                                    desc={gasto.gas_descripcion}
                                    monto={gasto.gas_monto}
                                    fecha={gasto.gas_fecha}
                                    tipo={gasto.gas_tipo}
                                    frec={gasto.gas_fecuencia}
                                    />)
                    
                        }
                    </div>
                     
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ListaDeGastos; 
