import React from 'react'
import '../stylesheets/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gastos">Gastos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/finanzas">Finanzas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gantt">Gantt</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
