import React from 'react';
import BotonDiseño from '../Boton/Boton';
import Botoncantidad from '../Boton/Botoncantidad'


function Item({listado}) {
    
    return (
    <div key={listado.titulo}>
        <img className='tamañoImg' src={listado.img} alt="ropa"></img>
        <h3>{listado.titulo}</h3>
        <h4>$ {listado.precio}</h4>
        <p>{listado.detalle}</p>
        <a href=''>Ver detalle</a>
        <Botoncantidad/>
        <BotonDiseño>añadir al carrito</BotonDiseño>
        </div>
)
}

export default Item;