import React, {useState} from 'react'
import '../../stylesheets/Gastos/Formulario.css'
import {v4 as uuidv4} from 'uuid'

function Formulario() {

  const [formData, setFormData] = useState({
    // id: "", 
    desc: "", 
    monto: "", 
    fecha: "", 
    tipo: "",
    frec: ""
  }); 

  const handleForm = (e) => {
    const { name, value, type, checked } = e.target; 

    setFormData((prevForm) => ({ 
      ...prevForm, 
      [name]: type === "checkbox" ? checked : value, 
    }))

  }

  const submit = (e) => { 
    e.preventDefault(); 

    const gastoNuevo = { 
      // id: uuidv4(), 
      desc: formData.desc, 
      monto: formData.monto, 
      fecha: formData.fecha, 
      tipo: formData.tipo, 
      frec: formData.frec
    }

    // props.onSubmit(gastoNuevo); 
    console.log(gastoNuevo);

    fetch('http://localhost:9000/gastos', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(gastoNuevo), 
    }); 


  }

  return (
    <div className='page-container'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <div className = 'form-one-container'>
                <form id='transactionForm' onSubmit={submit}>
                    <label className='label-normal' htmlFor="descripcion">Descripción:</label>
                    <input className='input-normal' type="text" name="desc" id="desc" 
                    placeholder="Ingrese descripción del gasto"
                    onChange={handleForm}
                    value = {formData.desc}></input>
                  
                    <label className='label-normal' htmlFor="monto">Monto:</label>
                    <input className='input-normal' type="text" name="monto" id="monto"
                    placeholder="ingrese monto del gasto"
                    onChange={handleForm}
                    value = {formData.monto}></input>
                  
                    <label className='label-normal' htmlFor="fecha">Fecha</label>
                    <input className='input-normal' type="date" name="fecha" id="fecha" 
                    placeholder="Ingresa tu mail" required
                    onChange={handleForm}
                    value = {formData.fecha}></input>
                  
                    {/* <label htmlFor="tipo">Tipo:</label>   
                    <input type="text" name="tipo" id="tipo"></input> */}
                    
                    <div className='div-radio'>
                      Tipo:
                      <div className='radios-container'>
                        <div>
                          <input className='input-radio'
                            value={'eventual'}
                            onChange={handleForm}
                            type='radio'
                            name='tipo'
                            id='eventual'
                            checked={formData.tipo === 'eventual'}
                          />
                          <label className='label-radio' htmlFor='fijo'>Eventual</label>
                        </div>
                        <div>
                          <input className='input-radio'
                            value={'fijo'}
                            onChange={handleForm}
                            type='radio'
                            name='tipo'
                            id='fijo'
                            checked={formData.tipo === 'fijo'}
                          />
                          <label className='label-radio' htmlFor='fijo'>Fijo</label>
                        </div>
                      </div>
                    </div>
                    <label className='label-normal' htmlFor="frecuencia">Frecuecia:</label>
                    <input className='input-normal' type="number"
                    name="frec" id="frec"
                    onChange={handleForm}
                    value = {formData.frec}></input>
                  
                    <button type="submit" className="button-submit">Agregar</button>
                </form> 
                          
            </div>
          </div>
             
        </div> 
        <div className='row justify-content-center'>
          <div className='col-md-2'>
            <div className='row justify-content-center'>
              <a className='buttonVolver btn btn-outline-secondary' href='/gastos'>Volver</a>
            </div> 
          </div>  
        </div> 
      </div>     
    </div>
  )
}

// onSubmit={manejarEnvio}

export default Formulario; 
