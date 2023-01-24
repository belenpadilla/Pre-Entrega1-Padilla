import React from 'react'
import { useEffect, useState } from 'react';
import  {getItemDetalle} from '../../servicio/mock';
import BotonDiseño from '../Boton/Boton';
import ItemDetail from './ItemDetail';
import articulos from '../../data/articulos';
import Item from '../Item/Item';

export default function ItemDetailContainer() {
    const [articulos, setArticulos] = useState([ ])

    async function ItemAsync(){
        let respuesta = await getItemDetalle();
        setArticulos(respuesta)
    }
    
    useEffect(() => {
        getItemDetalle()  
}, []);

    
    return (
    
   <ItemDetail articulos={articulos}/>

);
    }
