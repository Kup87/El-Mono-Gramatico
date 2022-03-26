import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Item from "../components/Items/Item";
import ItemList from "../components/Items/ItemList";
import { fxFetch } from "../Js/fxFetch";

function ItemListContainer() {
  // const [bool, setBool] = useState(true)
  const [loading, setLoading] = useState(true)
  const [prods, setProds] = useState([])
  const {categoria}  = useParams()
  

  useEffect(()=>{
    if (categoria) {
      fxFetch 
      .then( resp  => setProds(resp.filter(prod=>prod.categoria === categoria)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    } else {
      fxFetch 
      .then( resp  => setProds(resp))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  },[categoria])
    
  return (
    <>
    
    <ItemList>
    { loading ? <Spinner animation="border" role="status" className="mx-auto"><span className="visually-hidden">Loading...</span></Spinner>
     : 
       <Item prods={prods}></Item>
    }
    
    
    </ItemList>
    {/* <button onClick={()=> setBool(!bool)}>CLICK</button> */}
    </>

  )
}

export default ItemListContainer