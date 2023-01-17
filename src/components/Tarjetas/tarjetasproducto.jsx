import React from 'react'
import BotonDiseño from '../Boton/Boton';

function TarjetasProducto(props) {
    const {titulo,precio,detalle,img} = props;
return (
    <div className='OrdenTarjeta'>
        <div>
        <img className='tamañoImg' src={img} alt='producto'></img>
        </div>
        <h3>{titulo}</h3>
        <h4>$ {precio}</h4>
        <p>{detalle}</p>
        <BotonDiseño className="BotonE"></BotonDiseño>
        
    </div>
);
}

export default TarjetasProducto;