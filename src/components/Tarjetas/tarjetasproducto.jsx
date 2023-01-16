import React from 'react'
import BotonDiseño from '../Boton/Boton';

function TarjetasProducto(props) {
    const {titulo,precio,detalle,img} = props;
return (
    <div className='OrdenTarjeta'>
        <img className='tamañoImg' src={img} alt='producto'></img>
        <h3>{titulo}</h3>
        <h4>$ {precio}</h4>
        <p>{detalle}</p>
        <BotonDiseño></BotonDiseño>
    </div>
);
}

export default TarjetasProducto;