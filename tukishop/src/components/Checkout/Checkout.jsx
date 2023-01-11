import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../../assets/firebase';
import { useCarritoContext } from "../../context/CarritoContex";
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

const Checkout = () => {
    const initialValues={nombreCompleto: "", email: "", validateEmail: "", DNI: "", celular: "", direccion: ""}
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);    
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const checkVacio = [...carrito]
    checkVacio.forEach(prodCarrito => {
        getProducto(prodCarrito.id).then(prodBDD => {
            if(prodBDD.stock < prodCarrito.cant) {
                toast.error(`El producto ${prodBDD.nombreAMostrar} no tiene stock, le devolvimos al inicio para que siga comprando`);                    
                emptyCart();
                navigate("/")                          
            }
        })            
    })

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            consultarFormulario();
        }
      }, [formErrors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        e.target.reset()
    };

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (values)=>{
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;      
        
        if (!values.nombreCompleto) {
            errors.nombreCompleto = "Este campo es obligatorio";
        }
        
        if (!values.email) {
            errors.email = "Por favor ingrese un Email";
        } else if (!regex.test(values.email)) {
            errors.email = "El tipo de Email no es válido";
        }
        
        if (!values.validateEmail){
            errors.validateEmail = "Repita el Email";            
        }else if (!regex.test(values.validateEmail)) {
            errors.validateEmail = "El tipo de Email no es válido";
        }else if (values.validateEmail!==values.email){
            errors.validateEmail = "Los Emails ingresados no coinciden";
        }
        
        if (!values.DNI){
            errors.DNI="Ingrese el DNI únicamente en números";
        }
        
        if (!values.celular){
            errors.celular="Ingrese su Celular únicamente en números";
        }
        
        if (!values.direccion){
            errors.direccion="Este campo es obligatorio";
        }
        return errors;
    };

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)

                } else {
                    toast.error(`Ni disponiemos stock del producto seleccionado`); 
                    emptyCart();
                    navigate("/") 
                }
            })
        })

        delete cliente["validateEmail"];

        createOrdenCompra(cliente,totalPrice(), new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                
                toast.success(<span className="productoAgregado">¡Compra confirmada, su orden es {item.id} !</span>, {
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
                emptyCart()
                e.target.reset()
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no pudo ser creada")
                console.error(error)
            })
            
        })
        
    }

    return (
        <div className="container espaciadoNav">
            <form onSubmit={handleSubmit} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre">Nombre y Apellido</label>
                    <input type="text" name="nombreCompleto"  value={formValues.nombreCompleto} onChange={handleChange}/>
                    <p>{formErrors.nombreCompleto}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
                    <p>{formErrors.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2">Repetir Email</label>
                    <input type="text" name="validateEmail" value={formValues.validateEmail} onChange={handleChange}/>
                    <p>{formErrors.validateEmail}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni">DNI</label>
                    <input type="number" name="DNI" value={formValues.DNI} onChange={handleChange}/>
                    <p>{formErrors.DNI}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular">Celular</label>
                    <input type="number" name="celular" value={formValues.celular} onChange={handleChange}/>
                    <p>{formErrors.celular}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" name="direccion"  value={formValues.direccion} onChange={handleChange}/>
                    <p>{formErrors.direccion}</p>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;