import React from 'react'
import articulos from '../../data/articulos';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';
import ClickCantidad from '../Boton/Botoncantidad';
import getItem from '../../servicio/mock';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [articulos, setArticulos] = useState([ ])
    let {categoriaid} = useParams()
    
    useEffect(() => {

    getItem().then((completado) => {
        categoriaid === undefined ?
        setArticulos(completado)
        :
        setArticulos(completado.filter(Item => Item.categoriaid.toLowerCase() === categoriaid.toLowerCase))
    });
},[categoriaid]);

    return (
    <>
    <div className='OrdenTarjetas'>
        {articulos.map( (i) => <Item listado={i} /> )}
    </div>
    </>
);
}

export default ItemListContainer;