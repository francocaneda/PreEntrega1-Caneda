import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <div>
            <button className="botonesNavBar"><Link className='nav-link' to={"/category/1"}>Alimentos</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/category/2"}>Accesorios</Link></button>
            <button className="botonesNavBar"><Link className='nav-link' to={"/category/3"}>Utilidades</Link></button>
        </div>
    );
}

export default Categorias;