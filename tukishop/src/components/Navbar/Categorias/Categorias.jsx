import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <div className="botoncitos">
            <div><button className="btn btn-success"><Link className='nav-link' to={"/category/alimentos"}>Alimentos</Link></button></div>
            <div><button className="btn btn-success"><Link className='nav-link' to={"/category/accesorios"}>Accesorios</Link></button></div>
            <div><button className="btn btn-success"><Link className='nav-link' to={"/category/utilidades"}>Utilidades</Link></button></div>
        </div>
    );
}

export default Categorias;