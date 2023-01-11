import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContex";
const ItemDetail = ({item}) => {

    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }   


    return (
        <div className="row g-0 cardDetallePrincipal">
            <div className="col-md-4 cardDetalle">
                <img src={item.img} alt="imagen" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body cardBodyFiltro">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount inicial = {1} stock= {item.stock} onAdd={onAdd}/><br/>
                    <div className="finalizarCompra"><Link to="/cart" className="nav-link"><button className={`btn ${darkMode ? 'btn-dark border-light' : 'btn-dark border-light'}`}> FINALIZAR COMPRA</button></Link></div>
                    <div><Link  className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-dark border-light' : 'btn-dark border-light'}`}>Continuar comprando</button></Link></div>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;