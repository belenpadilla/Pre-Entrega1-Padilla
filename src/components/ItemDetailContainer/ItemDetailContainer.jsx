import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { getItem, getItemDetalle} from '../../servicio/mock';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/context';
import articulos from '../../data/articulos';


export default function ItemDetailContainer() {
    const [articulo, setArticulo] = useState({});
    let {itemid} = useParams();
    const {addItem} = useContext(CartContext);
    
    function handlerAddToCart(){
        alert(`Agregaste  ${articulo.titulo} al carrito`);
        addItem(articulo)
    }
    
    useEffect(() => {
        getItemDetalle(itemid).then((respuesta) => {
            setArticulo(respuesta)
}).catch ((error) => alert(`Error: ${error}`));
 }, [itemid]);

    
    return (
    
   <Item listado={articulo}/>

);
    }
