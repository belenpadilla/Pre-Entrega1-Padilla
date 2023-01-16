import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/index';
import TarjetasProducto  from './components/Tarjetas/tarjetasproducto';
import arde from '../src/components/fotosropa/arde.jpg'
import {BrowserRouter, Routes,Route} from "react-router-dom;"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/Conjuntos" element={ <ItemListContainer/>}></Route>
    </Routes>
  <><div>
      <NavBar />
      <ItemListContainer></ItemListContainer>

      <br></br>
    </div><div className='OrdenTarjetas'>
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
      </div></>
      </BrowserRouter>
  );
  }

export default App;
