import React, { useContext } from 'react'
import { CartContext } from '../../context/context'
import Item from '../Item/Item'

export const CartListContainer = () => {

    const {cart,vaciasCarrito,cantidadPrecio,borrarUno} = useContext(CartContext)
  return (

    <>
    {cantidadPrecio()}
    <button className='BotonCarrito ' onClick={vaciasCarrito}>Vaciar Carrito </button>
        <div>{cart.map(Item => 
        <section className='ordenDetalle' key={Item.id}>
        <div >
        <img className='tamañoImg' src={Item.img} alt="ropa"></img>
        <h3>{Item.titulo}</h3>
        <h4>$ {Item.precio}</h4>
        <h4>{Item.cantidad}</h4>
        <p>{Item.detalle}</p>
        <button className='BotonE' onClick={()=> borrarUno(Item.id)}>Eliminar producto</button>
        </div>
        </section>)}</div>
    </>

    
  )
}
