import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    return (
        <div className="row g-0 cardDetallePrincipal">
            <div className="col-md-4 cardDetalle">
                <img src={`../img/${item.img}`} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <p className="card-text">Stock: {item.stock} </p>
                    <ItemCount stock= {item.stock}/><br/>
                    <button className="btn btn-dark">Finalizar Compra</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default ItemDetail;