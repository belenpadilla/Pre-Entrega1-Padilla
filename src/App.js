import logo from './logo.svg';
import { createContext } from "react";
import CartWidget from './components/CartWidget/index';
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import Item from './components/Item/Item';
import BotonDiseño from './components/Boton/Boton';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Deco from './components/decoracion/deco';
import DecoFooter from './components/decoracion/footer'
import { userContext } from './context/context';
import { CartContextProvider } from './context/context';
import { pepito } from './context/context';
import ClickCantidad from './components/Boton/Botoncantidad';
function App() {
  return (
    <CartContextProvider value={{pepito}}> 
    <BrowserRouter>
      <NavBar />
      <Deco />
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/inicio' element={<ItemListContainer/>}></Route>
        <Route path='/categoria/:categoriaid' element={<ItemListContainer/>}/>
        <Route path='/item/:itemid' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>ERROR pagina no encontrada</h1>}/>
      </Routes>
    <DecoFooter/>
    </BrowserRouter>
    </CartContextProvider>  
      
  
  );
  }

export default App;
