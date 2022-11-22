import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sucursales</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
            </li>
      </ul>
    );
}

export default Categorias;