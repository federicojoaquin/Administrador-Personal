import React from 'react'
import PropTypes from 'prop-types'; 

function Card({ title,  image, text }) {

  return (
    <div className='card text-center bg-dark'>
        <img src={image}></img>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired, 
  url: PropTypes.string, 
  imageSource: PropTypes.string
}

export default Card; 
