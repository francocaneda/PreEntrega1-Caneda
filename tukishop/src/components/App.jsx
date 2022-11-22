import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"¡Bienvenido a nuestra Tienda Online!"}/>
    </>
      
  );
}

export default App;