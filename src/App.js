import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/index';
import TarjetasProducto  from './components/Tarjetas/tarjetasproducto';
import arde from '../src/components/fotosropa/arde.jpg'


function App() {
  return (
  <div>
      <NavBar />
      <ItemListContainer></ItemListContainer>
    
      <br></br>
    <div className='OrdenTarjetas'>
    <TarjetasProducto 
    titulo=""
    precio={500}
    detalle=""
    img={arde}
    ></TarjetasProducto>
        <TarjetasProducto
    titulo=""
    precio={500}
    detalle=""
    img="./MAMBO/mambo-proyecto/public/fotosropa/arde.jpg"
    ></TarjetasProducto>
        <TarjetasProducto
    titulo=""
    precio={500}
    detalle=""
    img="./MAMBO/mambo-proyecto/public/fotosropa/arde.jpg"
    ></TarjetasProducto>
            <TarjetasProducto
    titulo=""
    precio={500}
    detalle=""
    img="./MAMBO/mambo-proyecto/public/fotosropa/arde.jpg"
    ></TarjetasProducto>
            <TarjetasProducto
    titulo=""
    precio={500}
    detalle=""
    img="./MAMBO/mambo-proyecto/public/fotosropa/arde.jpg"
    ></TarjetasProducto>

</div>
  </div>
  );
  }

export default App;
