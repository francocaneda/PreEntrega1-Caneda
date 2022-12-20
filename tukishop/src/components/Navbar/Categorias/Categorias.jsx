import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <div className="botoncitos">
            <div><Link className='nav-link' to={"/category/alimentos"}><button className="btn btn-success">Alimentos</button></Link></div>
            <div><Link className='nav-link' to={"/category/accesorios"}><button className="btn btn-success">Accesorios</button></Link></div>
            <div><Link className='nav-link' to={"/category/utilidades"}><button className="btn btn-success">Utilidades</button></Link></div>
        </div>
    );
}

export default Categorias;