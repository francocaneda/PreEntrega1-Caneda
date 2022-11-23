import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ListadoDeProductos from './ListadoDeProductos/ListadoDeProductos';


const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenido a nuestra Tienda Online!"}/>
      <ItemCount/>
      <ListadoDeProductos/>
  
    </>
      
  );
}

export default App;