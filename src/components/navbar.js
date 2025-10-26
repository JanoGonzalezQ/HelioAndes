
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '.components/imagenes';

function BarraMenu() {
  return (
    <>
      <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg" 
        sticky="top" 
        className="border-bottom border-primary"
      >
        <Container>
          <Navbar.Brand href="src\componentes\images\logo2.png">
            <i className="fas fa-gamepad me-2"></i>LEVELUP
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarNav" />
          
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="Navbar.js" active>Inicio</Nav.Link>
              <Nav.Link href="Servicios.js">Servicios</Nav.Link>
              <Nav.Link href="Soluciones.js">Soluciones</Nav.Link>
              <Nav.Link href="Demo.js">Demo</Nav.Link>
              <Nav.Link href="Planes.js">Planes</Nav.Link>
              <Nav.Link href="Testimonios.js">Testimonios</Nav.Link>
              <Nav.Link href="FAQ.js">FAQ</Nav.Link>
              <Nav.Link href="Contacto.js">Contacto</Nav.Link>
            </Nav>
            
            <div className="d-flex">
              <Button variant="outline-light" className="me-2">
                <i className="fas fa-search"></i>
              </Button>
              <Button variant="outline-light" className="position-relative">
                <i className="fas fa-shopping-cart"></i>
                <Badge 
                  bg="success" 
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  0
                </Badge>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default BarraMenu;