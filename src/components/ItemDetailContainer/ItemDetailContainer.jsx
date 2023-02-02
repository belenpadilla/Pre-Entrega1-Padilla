import React from 'react'
import { useEffect, useState } from 'react';
import { getItem, getItemDetalle} from '../../servicio/mock';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    const [articulo, setArticulo] = useState({})
 
    let {itemid} = useParams();
  
    
    useEffect(() => {
        getItemDetalle(itemid).then((respuesta) => {
            setArticulo(respuesta)
})
 }, [itemid]);

    
    return (
    
   <Item listado={articulo}/>

);
    }
