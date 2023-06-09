import React from 'react'
import Card from './Card'
import '../stylesheets/Card.css'

import image1 from '../assets/gastos.jpg'
import image2 from '../assets/Gantt.jpeg'
import image3 from '../assets/calendario.jpg'
import image4 from '../assets/finanzas.jpg'

import Home from './Home/Home.js'; 
import Gastos from './Gastos/Gastos.js';
import Finanzas from './Finanzas/Finanzas.js';
import Gantt from './Gantt/Gantt.js';

const cards = [
  {
    id: 1, 
    title: 'Finanzas',
    image: image4,
    // Me está faltando la propiedad de las url.
  }, 
  {
    id: 2, 
    title: 'Gastos',
    image: image1,
    // Me está faltando la propiedad de las url.
  }, 
  {
    id: 3, 
    title: 'Gantt',
    image: image2,
    // Me está faltando la propiedad de las url.
  }
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(card => ( 
            <div className='col-md-4' key={card.id}>
              <Card title={card.title} image={card.image}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards; 
