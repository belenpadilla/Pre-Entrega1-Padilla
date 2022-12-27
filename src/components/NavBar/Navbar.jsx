import React from "react";
import CartWidget from "../CartWidget";

function NavBar () {
    return (
        <><img className="Logo" src="/imgmambo/logomambo.png" alt="Logo Mambo" />
        <ul className="NavBarEstilo">
            <li >
                <a className="SacarDeco" href="">Conjuntos</a>
            </li>
            <li >
                <a className="SacarDeco" href="">Tops</a>
            </li>
            <li >
                <a className="SacarDeco" href="">Calzas</a>
            </li>
            <li >
                <a className="SacarDeco" href=""><CartWidget/></a>
            </li>
        </ul>
        </>
    ) 
}
export default NavBar;