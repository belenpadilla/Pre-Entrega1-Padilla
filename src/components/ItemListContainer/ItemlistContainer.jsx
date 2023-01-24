import React from 'react'
import articulos from '../../data/articulos';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import ClickCantidad from '../Boton/Botoncantidad';
import getItem from '../../servicio/mock';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemListContainer() {
    const [articulos, setArticulos] = useState([ ])
    useEffect(() => {
        setArticulos(articulos)
        }, [ ])
    getItem().then((completado) => {
        setArticulos(completado);
    });

    return (
    <>
    <div className='OrdenTarjetas'>
        {articulos.map( (i) =>
        <>
        <Item
        listado={i} 
        />
        </>
        )}
    </div>
    </>
);
}

export default ItemListContainer;