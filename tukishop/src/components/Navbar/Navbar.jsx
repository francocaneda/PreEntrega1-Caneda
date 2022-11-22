import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <img id="logo" src="https://hotelcaninofelinorioseco.es/wp-content/uploads/2019/06/zona-gato.png"></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
            <Categorias/>
        </div>
            <CartWidget/>
  </div>
</nav>

    );
}

export default Navbar;