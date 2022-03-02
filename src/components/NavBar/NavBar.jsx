import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Media/Logo.jpg';



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="El Mono Gramático" className='logo1'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Libros">Libros</Nav.Link>
            <Nav.Link href="#Colecciones">Colecciones</Nav.Link>
            <NavDropdown title="Redes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/libreriaelmonogramatico/"  target="_blank">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/groups/511064396402057"  target="_blank">Facebook</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href=""><CartWidget /></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar