import { Button, Card } from "react-bootstrap"; //export 'Card' (imported as 'Card') was not found in 'react-bootstrap/Card'
import { Link } from "react-router-dom";

function Item(props) {
  const {prods} = props
  return (
    <>
      {prods.map((prod) =>
        <Link to={`libros/${prod.id}`}>
        <Card key={prod.id} id="card">
          <Card.Img variant="top" src={prod.imgURL} />
          <Card.Body>
            <Card.Title>{prod.titulo}</Card.Title>
            <Card.Text>
              {prod.autor}
            </Card.Text>
            <Button variant="primary">Añadir al Carrito</Button>
          </Card.Body>
        </Card>
        </Link>
        )}
    </>
  )
}

export default Item