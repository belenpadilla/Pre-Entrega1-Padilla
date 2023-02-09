
const { createContext, useState } = require("react") ;


export const cartContext = createContext();

export function CartContextProvider(props) {
    let [cart, setCart] = useState([]);
     
    function addItem(item){
        let newCart = [...cart]
        newCart.push(item);
        setCart(newCart)

    }

    const value = {cart,addItem};
    return (
    <cartContext.Provider value={value}>
    {props.children}
    </cartContext.Provider>
    )
}