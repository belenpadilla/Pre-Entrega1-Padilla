import React from 'react'
import articulos from '../../data/articulos';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

function ItemListContainer() {
    const [Listadoarticulos, setArticulos] = useState([ ])
    useEffect(() => {
        setArticulos(articulos)
        }, [ ])
        
        
    return (
    <>
    
    <div className='OrdenTarjetas'>
    
        {articulos.map( (i) =>
        <Item listado={i}/>
        
        )}
    </div>
    </>
);
}

export default ItemListContainer;