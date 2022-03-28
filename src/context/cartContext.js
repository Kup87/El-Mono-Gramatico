import { createContext, useContext, useState } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)



function CartContextProvider({children}) {
    const[cartList, setCartList] = useState([])

    // const [itemAmount, setItemAmount] = useState(0);
    // const agregarItemAmount = () => {
    //   if (itemAmount < stock) {
    //     setItemAmount(itemAmount + 1)
    //   }
    // }
    // const quitarItemAmount = () => {
    //   if (itemAmount > 1) {
    //     setItemAmount(itemAmount - 1)
    //   }
    // }

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