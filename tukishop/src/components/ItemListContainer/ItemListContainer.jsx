import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import { cargarBDD } from '../../assets/firebase.js';
import { consultarBDD } from '../../assets/funciones.js';
import { getProductos, getProducto, updateProducto, deleteProducto} from '../../assets/firebase.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
        /* getProducto("4yGGt8Rm1qtu9ECpRU3C").then(prod => {
                prod.stock -= 16
                delete prod.id
                updateProducto("4yGGt8Rm1qtu9ECpRU3C", prod).then(estado => console.log(estado))
            })*/

        //cargarBDD().then(productos => console.log(productos))
    
},[category]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;