import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

function NavBar () {
    return (
        <><img className="Logo" src="/imgmambo/logomambo.png" alt="Logo Mambo" />
        <ul className="NavBarEstilo">
        <li >
                <Link  className="SacarDeco" to='/inicio'>Inicio</Link>
            </li>
            <li >
                <Link  className="SacarDeco" to='/detalle'>detalle</Link>
            </li>
            <li >
                <Link  className="SacarDeco" to='/categoria/Indumentaria' >Indumentaria</Link>
            </li>
            <li >
                <Link  className="SacarDeco" to='/categoria/Accesorios' >Accesorios</Link>
            </li>
            <li >
                <Link  className="SacarDeco" to='' ><CartWidget/></Link>
            </li>
        </ul>
        </>
    ) 
}
export default NavBar;