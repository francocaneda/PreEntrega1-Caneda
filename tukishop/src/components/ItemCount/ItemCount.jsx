import {useState} from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { toast } from 'react-toastify';
const ItemCount = ({inicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext()

    const [contador, setContador] = useState(inicial);
    
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito = () => {
        onAdd(contador)
        
            toast.success(<span className="productoAgregado">¡Producto agregado!</span>, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
                style:
                {   
                    
                    background: "linear-gradient(to right, #676C99, #9AA3E6)",
                }
            });
        

    }

    

    return (
        <div className="botonesItemCount">
            <button onClick={restar} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-minus"></i></button>
                    {contador}
            <button onClick={sumar} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-plus"></i></button>
            <button id="botoncito" className={`btn ${darkMode ? 'btn-primary' : 'btn-dark'}`} onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
            

        </div>
    );
}


export default ItemCount;