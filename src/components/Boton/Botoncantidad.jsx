import React from "react";
import './Boton.css'

function ClickCantidad({}){
    const [count, setCount] = React.useState(0);
    function handleAdd() {
        setCount(count + 1);
      }
    
      function handleSubstract() {
        setCount(count - 1);
      }
return(
    <div >
        <div className="BotonCantDos">
        <button className="BotonCant" disabled={ count <= 1} onClick={ () => setCount (count - 1)}> - </button>
        <span>{count}</span>
        <button className="BotonCant" onClick={ () => setCount (count + 1)}> + </button>
        </div>
        <button className='BotonE' onClick={()=> onAddToCart(count)}>Agregar al carrito</button>
    </div>
)
};

export default ClickCantidad;