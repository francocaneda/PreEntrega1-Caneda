import './ListadoDeProductos.css'
import alimento from '../../img/alimento.png';
import collar from '../../img/collar.png';
import bolso from '../../img/bolso.png';
import peine from '../../img/peine.png';


const ListadoDeProductos = () => {
    return (
        <>
        <div className="contenedorProductos">

       <div className="card principal" >
        <div className="foto"><img src={alimento} className="card-img-top" alt="tukishop"></img></div>
        <div className="card-body">
            <h5 className="card-title">Alimento</h5>
            <p className="card-text">$1400</p>
            <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>

        <div className="card principal" >
        <div className="foto"><img src={collar} className="card-img-top" alt="tukishop"></img></div>
        <div className="card-body">
            <h5 className="card-title">Collar</h5>
            <p className="card-text">$850</p>
            <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>

        <div className="card principal" >
        <img src={bolso} className="card-img-top" alt="tukishop"></img>
        <div className="card-body">
            <h5 className="card-title">Bolso</h5>
            <p className="card-text">$1100</p>
            <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>

        <div className="card principal" >
        <img src={peine} className="card-img-top" alt="tukishop"></img>
        <div className="card-body">
            <h5 className="card-title">Peine</h5>
            <p className="card-text">$500</p>
            <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>
        </div>
        </>

    );
}

export default ListadoDeProductos;