import React from 'react'
import Item from '../Item/Item'
import articulos from '../../data/articulos'
function ItemListContainer() {
return (
    <>
    <div className='OrdenTarjetas'>
        {
            articulos.map( (Item) => (<Item
            titulo={Item.titulo} 
            precio={Item.precio} 
            detalle={Item.detalle} 
            img={Item.img} 
            />
            )
        )}
    </div>
    </>
)
}

export default ItemListContainer