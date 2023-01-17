import logo from './logo.svg';
import CartWidget from './components/CartWidget/index';
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
    <Routes>
      <Route path="/" element={ItemListContainer}></Route>
      <Route path="/Conjuntos" element={ <ItemListContainer/>}></Route>
    </Routes>

  <NavBar />

      <br></br>
      </div>
      <footer>
        <p className='footer' >MAMBO tienda | since 2022 </p>
      </footer>
      </BrowserRouter>
      
  
  );
  }

export default App;
