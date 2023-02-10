import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/context';

function CartWidget () {
    const {cantidadItem} = useContext(CartContext);

    return (
        <Link to={"/carrito"}>
        <i className="bi bi-cart-fill"></i>
        {cantidadItem()}
        </Link>

)
}


export default CartWidget;