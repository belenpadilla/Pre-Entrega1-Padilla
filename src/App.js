import logo from './logo.svg';
import CartWidget from './components/CartWidget/index';
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import Item from './components/Item/Item';
function App() {
  return (
    <>
      <NavBar />
      <div className='OrdenTarjetas'>
      <Item 
      titulo="relojes"
      precio={3900}
      detalle="Un buen compañero de deporte"
      img="/assets/fotosropa/relojesss.jpg"
      />
      <Item
      titulo="riñorera"
      precio={2000}
      detalle="Comodidad asegurada"
      img="/assets/fotosropa/riñooo.jpg" 
      />
      <Item 
      titulo="Top MAMBO"
      precio={4500}
      detalle="Exclusivo MAMBO"
      img="/assets/fotosropa/mambo1.jpg"
            />
      </div>

      </>
      
  
  );
  }

export default App;
