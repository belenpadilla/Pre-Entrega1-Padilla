import logo from './logo.svg';
import CartWidget from './components/CartWidget/index';
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import Item from './components/Item/Item';
import BotonDiseño from './components/Boton/Boton';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/inicio' element={<ItemListContainer/>}></Route>
        <Route path='/categoria/:categoriaid' element={<ItemListContainer/>}/>
        <Route path='/item/:itemid' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>ERROR pagina no encontrada</h1>}/>
      </Routes>
      
  
    </BrowserRouter>
      
  
  );
  }

export default App;
