import React from 'react'
import articulos from '../../data/articulos';
import Item from '../Item/Item';
function ItemListContainer() {
return (
    <>
    <div className='OrdenTarjetas'>
    
        {articulos.map( (Item) =>
        ( <Item listado={Item}/>
        )
        )}
    </div>
    </>
);
}

export default ItemListContainer;