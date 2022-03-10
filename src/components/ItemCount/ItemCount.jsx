import {useState} from 'react'
import add_icon from './add_icon.svg';
import subtract_icon from './subtract_icon.svg';

function ItemCount({stock, initialItemAmount}) {
    
  const [itemAmount, setItemAmount] = useState( initialItemAmount );
    
  const agregarItemAmount = () =>{
    if(itemAmount < stock)  {
      setItemAmount ( itemAmount + 1)
    }
  }

  const quitarItemAmount = () =>{
    if(itemAmount > 1)  {
      setItemAmount ( itemAmount - 1)
    }
  }

  const onAdd = () =>{
    console.log(itemAmount)
  } 

  return (
    <>
    <div className='contador_container'>
      <button onClick={quitarItemAmount} className='countBTN'><img src={subtract_icon} alt="+" className='countSVG'/></button>
      <div>{itemAmount}</div>
      <button onClick={agregarItemAmount} className='countBTN'><img src={add_icon} alt="+" className='countSVG'/></button>
    </div>  
      <button onClick={onAdd} className='countBTN countSubmit'>Agregar al Carrito!</button>

    </>
  )
}

export default ItemCount