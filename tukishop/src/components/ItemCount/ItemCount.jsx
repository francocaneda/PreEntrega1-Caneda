import {useState} from 'react';

const ItemCount = () => {
    const [numero, setNumero] = useState(1);
    /*const boton = document.getElementById("boton1");
    console.log(boton); NO SE PUEDE*/
    const sumar = () => {
        if(numero < 10)
        setNumero(numero+1);
    }
    
    const restar = () => {
        if(numero > 0
            )setNumero(numero-1);
    }
    return (
        <div>
            <button className='brn btn-success' onClick={() => sumar()}> + </button>
            {numero}
            <button className='brn btn-success' onClick={() => restar()}> - </button>
            <button className='btn btn-light'> Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;