import { useState } from "react";
import { Card } from "react-bootstrap"; //export 'Card' (imported as 'Card') was not found in 'react-bootstrap/Card'
import GoToCartBtn from "../CartWidget/GoToCartBTN";
import SeguirComprando from "../CartWidget/SeguirComprando";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
  const { libro } = props
  let hayStock;
  if (libro.stock > 0) {
    hayStock = "Disponible"
  } else { hayStock = "Sin stock" }

  const [addToCart, setAddToCart] = useState(false)

  const onAdd = () => { 
    return setAddToCart(true)
  }

  return (
    <>
      {<Card key={libro.id} id="card2">
        <Card.Img variant="top" src={libro.imgURL} />
        <Card.Body>
          <Card.Title>{libro.titulo.toUpperCase()}</Card.Title>
          <Card.Title>By {libro.autor.charAt(0).toUpperCase()}{libro.autor.slice(1)}</Card.Title>
          <Card.Text>
            {libro.descripcion}
          </Card.Text>
          <Card.Title>$ {libro.precio}</Card.Title>
          <Card.Title>{hayStock}</Card.Title>
          { 
            (hayStock == "Sin stock") ?
              <><SeguirComprando></SeguirComprando></>
              :
              (addToCart && (hayStock == "Disponible")) ?
              <><SeguirComprando></SeguirComprando><GoToCartBtn></GoToCartBtn></>
              :
              <ItemCount stock={libro.stock} onAdd={() => onAdd()}></ItemCount>
          }
        </Card.Body>
      </Card>}
    </>
  )
}

export default ItemDetail