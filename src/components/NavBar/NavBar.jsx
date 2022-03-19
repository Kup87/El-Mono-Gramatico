import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../Media/Logo.jpg';
import SocialMediaLinks from '../ItemsDropdown/SocialMediaLinks';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to='/'><img src={Logo} alt="El Mono Gramático" className='logo1' /></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/categoria/libro' className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>Libros</NavLink>
            <NavLink to='/categoria/coleccion' className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>Colecciones</NavLink>
            <NavDropdown title="Redes" id="collasible-nav-dropdown">
              <SocialMediaLinks titulo="Instagram" link="https://www.instagram.com/libreriaelmonogramatico/" />
              <SocialMediaLinks titulo="Facebook" link="https://www.facebook.com/groups/511064396402057" />
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink to='/cart'><CartWidget /></NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar