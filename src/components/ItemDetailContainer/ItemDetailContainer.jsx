import React from 'react'
import { useEffect, useState } from 'react';
import  {getItemDetalle} from '../../servicio/mock';
import BotonDiseño from '../Boton/Boton';
import ItemDetail from './ItemDetail';
import articulos from '../../data/articulos';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    const [articulos, setArticulos] = useState([ ])
 
    let {itemid} = useParams();
  
    
    useEffect(() => {
        getItemDetalle(itemid).then((respuesta) => {
            setArticulos(respuesta)
})
 }, []);

    
    return (
    
   <Item articulos={articulos}/>

);
    }
