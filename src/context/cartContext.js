import { createContext, useContext, useState } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

function CartContextProvider({children}) {
    const[cartList, setCartList] = useState([])

    const addToCart=(item)=>{
        setCartList([...cartList, item])
    }

    const vaciarCart=()=> setCartList([])

  return (
    <cartContext.Provider value={{ 
        cartList,
        addToCart,
        vaciarCart
        
    }}>

        {children}

    </cartContext.Provider>
  )
}

export default CartContextProvider