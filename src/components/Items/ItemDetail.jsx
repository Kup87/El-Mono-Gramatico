import { Card } from "react-bootstrap"; //export 'Card' (imported as 'Card') was not found in 'react-bootstrap/Card'

function ItemDetail(props) {
  const {libro} = props
  console.log(libro)
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
          </Card.Body>
        </Card>}
    </>
  )
}

export default ItemDetail