import { useContext, useState } from "react";
import { CartContext } from "../../context/context";
import './Boton.css'


function ClickCantidad({produc}){
  const {addItem} = useContext(CartContext);
    const [count, setCount] = useState(0);

return(
    <div >
        <div className="BotonCantDos">
        <button className="BotonCant" disabled={ count === 0} onClick={ () => setCount (count - 1)}> - </button>
        <span>{count}</span>
        <button className="BotonCant" onClick={ () => setCount (count + 1)}> + </button>
        </div>
        <button className='BotonE' onClick={()=> {addItem(produc, count);setCount(0)}}>Agregar al carrito</button>
    </div>
)
};

export default ClickCantidad;