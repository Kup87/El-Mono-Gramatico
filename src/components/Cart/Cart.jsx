import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext"


function Cart() {

  const {cartList, vaciarCart} = useCartContext()
  const totalCartList = cartList.map(item => parseInt(item.precio)).reduce((prev, curr) => prev + curr, 0);
  

  return (
    <>
    <div>
      {cartList.map(prod => <li key={prod.id}>
        Titulo: {prod.titulo}
        {" "} 
        Cantidad: {prod.cantidad}
        Precio: $ {prod.precio}
        </li>)}
       
        
    </div>
    <div>{totalCartList}</div>
    
    <Button onClick={vaciarCart}>Vaciar el Carrito</Button>
    </>
  )
}

export default Cart