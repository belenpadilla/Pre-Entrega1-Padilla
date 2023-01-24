import React from 'react'
import BotonDiseño from '../Boton/Boton'
import Botoncantidad from '../Boton/Botoncantidad'
import articulo from '../../data/articulos';
import ItemDetailContainer from './ItemDetailContainer'
import articulos from '../../data/articulos';


export default function ItemDetail({articulos}) {
return (
    <div key={articulos.titulo}>
    <img className='tamañoImg' src={articulos.img} alt="ropa"></img>
    <h3>{articulos.titulo}</h3>
    <h4>$ {articulos.precio}</h4>
    <p>{articulos.detalle}</p>
    <a href=''>Ver detalle</a>
    <Botoncantidad/>
    <BotonDiseño>añadir al carrito</BotonDiseño>
    </div>



)
};
