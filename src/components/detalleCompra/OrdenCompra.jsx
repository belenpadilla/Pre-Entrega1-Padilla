import React from 'react';
import { useParams } from 'react-router-dom';


export default function OrdenCompra() {
  const {orderid} = useParams()
    return (
    <div className='text-center finalCompra'>
        <h1>¡Gracias por tu compra!</h1>
        <p>En breve te llegara a tu email un correo con toda la informacion
        </p>
        <p>el  numero de tu  compra es : {orderid}</p>
    </div>
  )
}
