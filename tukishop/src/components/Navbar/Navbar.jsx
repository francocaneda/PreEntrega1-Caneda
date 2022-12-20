import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';
import { Link } from 'react-router-dom';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';
import { useDarkModeContext } from '../../context/DarkModeContext';


const Navbar = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <img id="logo" src="https://hotelcaninofelinorioseco.es/wp-content/uploads/2019/06/zona-gato.png"></img>
        <Link className='nav-link' to={"/"}><button className='btn btn-success botonInicio'>Inicio</button></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
            <Categorias/>
        </div>
            <CartWidget/>
        <div className="darkMode">
            <BotonDarkMode/>
        </div>
  </div>
</nav>

    );
}

export default Navbar;