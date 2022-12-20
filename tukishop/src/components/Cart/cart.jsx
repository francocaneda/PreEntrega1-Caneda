import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContex";

const Cart = () => {
    const {darkMode} = useDarkModeContext()
    const {carrito,emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
            {carrito.length === 0 ? 
            <>  
                <div className="carritoVacio">
                <h1>Carrito vacio</h1>
                <Link  className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-secondary border-light' : 'btn-dark border-light'}`}>Continuar comprando</button></Link>
                </div>
            </>
            :
            <div className="container cartContainer">
                {
                    carrito.map(prod => 
                        <div className="card mb-3" key={prod.id} style={{maxWidth: '400px'}}>
                            <div className="imagenFinal">
                                <div className="col-md-4">
                                    <img src={`../img/${prod.img}`} alt="Producto" className="img-fluid rounded-start" />
                                </div>
                            </div>
                            <div className="cardFinal">
                                <div className="cardBody cardBodyFinal">
                                    <h5 className="card-title"> {`${prod.nombre}`}</h5>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio unitario: {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                    <p className="card-text">Precio total: {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                </div>
                                <button className="btn btn-dark border-light" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                            </div>

                        </div>      
                )}

                <div>
                    <p className="resumenCompra">Resumen de la compra: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <div className="botonesFinales">
                    <button className={`btn ${darkMode ? 'btn-secondary border-light' : 'btn-dark border-light'}`} onClick={emptyCart}>Vaciar Carrito</button>
                    <Link  className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-secondary border-light' : 'btn-dark border-light'}`}>Continuar comprando</button></Link>
                    <Link  className="nav-link" to={'/checkout'}><button className={`btn ${darkMode ? 'btn-secondary border-light' : 'btn-dark border-light'}`}>Finalizar Compra</button></Link>
                    </div>
                </div>   
            </div>

            }
        </>
        
    );
}

export default Cart;