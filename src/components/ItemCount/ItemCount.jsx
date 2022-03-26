import { useState } from 'react'
import { Button } from 'react-bootstrap';
import add_icon from './add_icon.svg';
import subtract_icon from './subtract_icon.svg';


function ItemCount({ stock, onAdd}) {

  const [itemAmount, setItemAmount] = useState(0);

  const agregarItemAmount = () => {
    if (itemAmount < stock) {
      setItemAmount(itemAmount + 1)
    }
  }

  const quitarItemAmount = () => {
    if (itemAmount > 1) {
      setItemAmount(itemAmount - 1)
    }
  }

  return (
    <>
      <div className='contador_container'>
        <button onClick={quitarItemAmount} className='countBTN'><img src={subtract_icon} alt="+" className='countSVG' /></button>
        <div>{itemAmount}</div>
        <button onClick={agregarItemAmount} className='countBTN'><img src={add_icon} alt="+" className='countSVG' /></button>
      </div>
      <Button variant="primary" onClick={onAdd} className='countBTN countSubmit'>Añadir al Carrito</Button>
    </>
  )
}

export default ItemCount