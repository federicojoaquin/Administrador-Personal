import React from 'react'
import '../stylesheets/Search.css'

function Search() {
  return (
    <>
      <div className='col-md-3 my-3'>
        <div class="dropdown d-flex">
          <a class="btn btn-outline-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Buscar por
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <div className='col-md-6 my-3'>
        <div className='row'>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="boton-search btn btn-outline-success bg-dark" type="submit">Search</button>
          </form>
        </div>                 
      </div>
    </>
        
  )
}

export default Search
