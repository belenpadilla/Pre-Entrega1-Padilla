import React from 'react';
import BotonDiseño from '../Boton/Boton';

function Item({titulo, precio, detalle, img}) {
    
    return (
    <div>
        <img className='tamañoImg' src={img} alt="ropa"></img>
        <h3>{titulo}</h3>
        <h4>$ {precio}</h4>
        <p>{detalle}</p>
        <BotonDiseño>añadir al carrito</BotonDiseño>
    </div>
)
}

export default Item;