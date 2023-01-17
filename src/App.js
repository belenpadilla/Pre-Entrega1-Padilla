import logo from './logo.svg';
import CartWidget from './components/CartWidget/index';
import arde from '../src/components/fotosropa/arde.jpg';
import relojesss from '../src/components/fotosropa/relojesss.jpg'
import riñooo from '../src/components/fotosropa/riñooo.jpg'
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import TarjetasProducto from './components/Tarjetas/tarjetasproducto';
function App() {
  return (
    <BrowserRouter>
      <div>
    <Routes>
      <Route path="/" element={ItemListContainer}></Route>
      <Route path="/Conjuntos" element={ <ItemListContainer/>}></Route>
    </Routes>

  <NavBar />
    <ItemListContainer></ItemListContainer>
    <ItemListContainer></ItemListContainer>
      <br></br>
      </div>
      <footer>
        <p >MAMBO tienda | since 2022 </p>
      </footer>
      </BrowserRouter>
      
  
  );
  }

export default App;
