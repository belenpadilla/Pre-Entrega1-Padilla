import React from 'react';
import BotonDiseño from '../Boton/Boton';
import Botoncantidad from '../Boton/Botoncantidad'
import { Link } from 'react-router-dom';
import articulos from '../../data/articulos';



function Item({listado}) {
    console.log("LISTADO", listado)
    return (
    <div key={listado.id}>
        <img className='tamañoImg' src={listado.img} alt="ropa"></img>
        <h3>{listado.titulo}</h3>
        <h4>$ {listado.precio}</h4>
        <p>{listado.detalle}</p>
        <Link className="producto" to={`/articulos/${(articulos.id)}`}>Ver más</Link>
        <Botoncantidad/>
        <BotonDiseño>Agregar al carrito</BotonDiseño>
        </div>
)
}

export default Item;