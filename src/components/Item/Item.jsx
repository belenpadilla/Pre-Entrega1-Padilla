import React from 'react';

function Item(props) {
    const {titulo, precio, detalle, img} = props
  return (
    <div>
        <img src="" alt="ropa"></img>
        <h3>titulo</h3>
        <h4>$ precio</h4>
        <p>detalle</p>
        <button>añadir al carrito</button>
    </div>

  )
}

export default Item;