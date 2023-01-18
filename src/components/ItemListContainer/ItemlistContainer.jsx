import React from 'react'
import articulos from '../../data/articulos';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
function ItemListContainer() {
    const [articulos, setArticulos] = useState([ ])
    useEffect(() => {
        setArticulos(articulos)
        }, [ ])
        
        
    return (
    <>
    
    <div className='OrdenTarjetas'>
    
        {articulos.map( (Item) =>
        { <Item listado={Item}/>
        }
        )}
    </div>
    </>
);
}

export default ItemListContainer;