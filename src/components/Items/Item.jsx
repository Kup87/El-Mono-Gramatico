import { Button, Card } from "react-bootstrap"; //export 'Card' (imported as 'Card') was not found in 'react-bootstrap/Card'

function Item(x) {
  return (
    <>
      {x.x.map((prod) =>
        <Card key={prod.id} id="card">
          <Card.Img variant="top" src={prod.imgURL} />
          <Card.Body>
            <Card.Title>{prod.titulo}</Card.Title>
            <Card.Text>
              {prod.autor}
            </Card.Text>
            <Button variant="primary">Añadir al Carrito</Button>
          </Card.Body>
        </Card>)}
    </>
  )
}

export default Item