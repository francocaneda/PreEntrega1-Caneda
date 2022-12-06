import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <div className="botoncitos">
            <div><button className="btn btn-success"><Link className='nav-link' to={"/category/1"}>Alimentos</Link></button></div>
            <div><button className="btn btn-success"><Link className='nav-link' to={"/category/2"}>Accesorios</Link></button></div>
            <div><button className="btn btn-success"><Link className='nav-link' to={"/category/3"}>Utilidades</Link></button></div>
        </div>
    );
}

export default Categorias;