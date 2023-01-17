import React from 'react'
import TarjetasProducto from '../Tarjetas/tarjetasproducto';
import arde from '../fotosropa/arde.jpg';
import relojesss from '../fotosropa/relojesss.jpg'
import riñooo from '../fotosropa/riñooo.jpg'

function ItemListContainer() {
    return (
    <div className='OrdenTarjetas'>
        <TarjetasProducto
        titulo=""
        precio={500}
        detalle=""
        img={arde}
        ></TarjetasProducto>
        <TarjetasProducto
        titulo=""
        precio={500}
        detalle=""
        img={relojesss}
        ></TarjetasProducto>
        <TarjetasProducto
        titulo=""
        precio={500}
        detalle=""
        img={riñooo}
        ></TarjetasProducto>
        <TarjetasProducto
        titulo=""
        precio={500}
        detalle=""
        img="./MAMBO/mambo-proyecto/public/fotosropa/arde.jpg"
        ></TarjetasProducto>
        <TarjetasProducto
        titulo=""
        precio={500}
        detalle=""
        img="./MAMBO/mambo-proyecto/public/fotosropa/arde.jpg"
        ></TarjetasProducto>
    </div>
    );
}

export default ItemListContainer;