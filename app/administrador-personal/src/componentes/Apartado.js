import React from "react";
import '../stylesheets/Apartado.css'; 

function Apartado({ pagina, nombre }) {
    return (
        <li className='button-container'>
            <a class='button-1' href={pagina}>
                <h1 class='h1-button'>{nombre}</h1>
            </a>
        </li>
    )
}

export default Apartado; 