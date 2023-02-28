import React, { useContext, useState, } from 'react'
import { CartContext } from '../../context/context'
import { createBuyOrden } from '../../servicio/firebase'
import Item from '../Item/Item'
import swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export const CartListContainer = () => { 
  const navigateTo = useNavigate();
  async  function handleCheckout(evt){
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
    let id = await createBuyOrden(orden);



 /* swal.fire (
    "¡Gracias por realizar su compra!", "en breve le llegara un mail con toda la información."`${Item.id}` , "success", 
  ) */

   {vaciasCarrito()}
  navigateTo(`/detallecompra/${id}`);
  }
  
    const {cart,vaciasCarrito,cantidadPrecio,borrarUno} = useContext(CartContext)
  return (

    <>
    <div>
      <p>El total de su compra es: {cantidadPrecio()} </p>
    </div> 
    
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
        <div className='lugarBotones'>
        <button className='BotonE' onClick={handleCheckout}>Finalizar compra</button>
        <button className='BotonCarrito' onClick={vaciasCarrito}>Vaciar Carrito </button>
        </div>
    </>

    
  )
}
