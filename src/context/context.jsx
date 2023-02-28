import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();


export function CartContextProvider(props) {
    const [cart, setCart] = useState ([]);
    useEffect(() => {
    console.log(cart)
    }, [cart])
    
    function addItem(item, count){
        (isInCart(item.id))? item.cantidad = item.cantidad + count : 
       item.cantidad = count;
        if (!isInCart(item.id))  {
            let newCart = [...cart,item]
            setCart(newCart)
        }


        
    }
    const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};
    function cantidadItem () {
        let cantidadProd = 0;
        cart.map (item => cantidadProd = cantidadProd + item.cantidad )

        return( cantidadProd)

    }
    function cantidadPrecio () {
        let cantidadPrecio = 0;
        cart.map (item => cantidadPrecio = cantidadPrecio + item.precio )
 
        return (cantidadPrecio)
    
    } 
   function vaciasCarrito(){
     setCart([])
   }
    function borrarUno (id){
  
    let newCart = cart.filter ((item)=> item.id !== id )
    setCart(newCart)
    }
return(
        <CartContext.Provider value={{cart,addItem, cantidadItem,vaciasCarrito,cantidadPrecio,borrarUno}}>
            {props.children}
        </CartContext.Provider>
)
}

