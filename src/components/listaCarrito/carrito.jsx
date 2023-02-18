import React, { useContext } from 'react'
import { CartContext } from '../../context/context'
import { createBuyOrden } from '../../servicio/firebase'
import Item from '../Item/Item'

export const CartListContainer = () => {
    function handleCheckout(evt){
      const items = cart.map( articulo => ({ id: articulo.id, titulo: articulo.titulo, precio: articulo.precio, cantidad: articulo.cantidad}))
      const orden = {
      buyer: {
        nombre:"belen",
        email:"blen@gmail.com",
        phone:266654
      },
      items: items,
      date:new Date(),
      total:2000,
    }
    createBuyOrden(orden)
    }

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
        <button className='BotonE' onClick={handleCheckout}>Finalizar compra</button>
        </section>)}</div>
    </>

    
  )
}
