import React from 'react';
import BotonDiseño from '../Boton/Boton';


function Item({listado}) {
    
    return (
    <div>
        <img className='tamañoImg' src={listado.img} alt="ropa"></img>
        <h3>{listado.titulo}</h3>
        <h4>$ {listado.precio}</h4>
        <p>{listado.detalle}</p>
        <BotonDiseño>añadir al carrito</BotonDiseño>
        </div>
)
}

export default Item;