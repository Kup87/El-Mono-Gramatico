import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Media/Logo.jpg';
import SocialMediaLinks from '../ItemsDropdown/SocialMediaLinks';


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
              <SocialMediaLinks titulo="Instagram" link="https://www.instagram.com/libreriaelmonogramatico/"/>
              <SocialMediaLinks titulo="Facebook" link="https://www.facebook.com/groups/511064396402057"/>
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