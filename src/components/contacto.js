import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacto() {
  return (
    <>
      <section className="py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-5">
            <i className="fa-solid fa-hand-spock me-2 text-success"></i>
            Contáctanos
          </h2>

          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card
                className="p-4 border-0"
                style={{
                  backgroundColor: '#111',
                  boxShadow: '0 10px 20px rgba(57, 255, 20, 0.15)',
                  borderRadius: '12px',
                }}
              >
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Escribe tu nombre"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ejemplo@email.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Motivo del mensaje"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Escribe tu mensaje aquí..."
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    type="submit"
                    className="w-100 fw-bold"
                    style={{ color: '#000', backgroundColor: '#39FF14', borderColor: '#39FF14' }}
                  >
                    Enviar Mensaje
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5 text-center">
            <Col md={4}>
              <i className="fas fa-map-marker-alt fa-2x mb-2 text-success"></i>
              <p>Santiago, Chile</p>
            </Col>
            <Col md={4}>
              <i className="fas fa-envelope fa-2x mb-2 text-success"></i>
              <p>contacto@helioandes.cl</p>
            </Col>
            <Col md={4}>
              <i className="fas fa-phone fa-2x mb-2 text-success"></i>
              <p>+56 9 1234 5678</p>
            </Col>
          </Row>
        </Container>
      </section>


    </>
  );
}

export default Contacto;

      <footer className="bg-dark text-center py-3 border-top border-primary">
        <p className="mb-0 text-light">
          &copy; 2025 HelioAndes - Todos los derechos reservados
        </p>
      </footer>