import React from 'react'
import '../stylesheets/Gastos/AddButton.css'
import {IoMdAddCircleOutline} from 'react-icons/io'

function AddButton( {ruta} ) {
  return (
    <>
      
      <a href={ruta} class="float">
        <i className="fa fa-whatsapp my-float">
            <IoMdAddCircleOutline />
        </i>
        
      </a>
    </>
  )
}

export default AddButton
