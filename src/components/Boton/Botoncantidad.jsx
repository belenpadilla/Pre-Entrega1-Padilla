import React from "react";
import './Boton.css'

function ClickCantidad(){
    const [clicks, setClicks] = React.useState(0)
return(
    <div className="OrdenBotonCant">
        <button className="BotonCant" disabled={ clicks <= 1} onClick={ () => setClicks (clicks - 1)}> - </button>
        <p>{clicks}</p>
        <button className="BotonCant" onClick={ () => setClicks (clicks + 1)}> + </button>
    </div>
)
};

export default ClickCantidad;