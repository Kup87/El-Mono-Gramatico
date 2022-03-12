import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Item from "../components/Items/Item";
import ItemList from "../components/Items/ItemList";
import { fxFetch } from "../Js/fxFetch";

function ItemListContainer({greeting}) {
  // const [bool, setBool] = useState(true)
  const [loading, setLoading] = useState(true)
  const [prods, setProds] = useState([])

  useEffect(()=>{
    fxFetch 
    .then( resp  => setProds(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  },[])
    
  return (
    <>
    
    <ItemList>
    { loading ? <Spinner animation="border" role="status" className="mx-auto"><span className="visually-hidden">Loading...</span></Spinner>
     : 
       <Item x={prods}></Item>
    }
    
    
    </ItemList>
    {/* <button onClick={()=> setBool(!bool)}>CLICK</button> */}
    </>

  )
}

export default ItemListContainer