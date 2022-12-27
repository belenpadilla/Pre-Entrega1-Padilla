import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget';
function App() {
  return (
    <>
  <NavBar/>
  <ItemListContainer></ItemListContainer>
  </>
  );
}

export default App;
