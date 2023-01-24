import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

function NavBar () {
    return (
        <><img className="Logo" src="/imgmambo/logomambo.png" alt="Logo Mambo" />
        <ul className="NavBarEstilo">
            <li >
                <Link to='' className="SacarDeco">Conjuntos</Link>
            </li>
            <li >
                <Link to='' className="SacarDeco" >Tops</Link>
            </li>
            <li >
                <Link to='' className="SacarDeco" >Calzas</Link>
            </li>
            <li >
                <Link to='' className="SacarDeco" ><CartWidget/></Link>
            </li>
        </ul>
        </>
    ) 
}
export default NavBar;