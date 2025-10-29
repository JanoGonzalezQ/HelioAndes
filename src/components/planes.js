import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";


function Planes() {
  return (
    <Container className="my-5">
      {/* Título y subtítulo alineados a la derecha */}
      <h2 className="text-start mb-4">Planes</h2>
      <p className="text-center text-muted mb-5">
        Elige el plan que se ajusta a tu proyecto.
      </p>

      <Row className="justify-content-center">
        {/* Plan Básico */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm text-center border-0">
            <Card.Body>
              <Badge bg="info" className="mb-2 text-uppercase">
                Básico
              </Badge>
              <Card.Title as="h4" className="fw-bold">
                3–5 kW
              </Card.Title>
              <ul className="list-unstyled mt-3 mb-4 text-muted">
                <li>Estudio energético</li>
                <li>Instalación estándar</li>
                <li>Monitoreo básico</li>
              </ul>
              <Button variant="teal" className="w-100 fw-semibold">
                Solicitar evaluación
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Plan Optimizado */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm text-center border-0">
            <Card.Body>
              <Badge bg="success" className="mb-2 text-uppercase">
                Optimizado
              </Badge>
              <Card.Title as="h4" className="fw-bold">
                10–15 kW
              </Card.Title>
              <ul className="list-unstyled mt-3 mb-4 text-muted">
                <li>Estudio avanzado</li>
                <li>Instalación optimizada</li>
                <li>Monitoreo avanzado</li>
              </ul>
              <Button variant="teal" className="w-100 fw-semibold">
                Solicitar evaluación
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Plan Autónomo */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm text-center border-0">
            <Card.Body>
              <Badge bg="warning" text="dark" className="mb-2 text-uppercase">
                Autónomo
              </Badge>
              <Card.Title as="h4" className="fw-bold">
                Híbrido + baterías
              </Card.Title>
              <ul className="list-unstyled mt-3 mb-4 text-muted">
                <li>Diseño off-grid</li>
                <li>Almacenamiento</li>
                <li>Soporte preferente</li>
              </ul>
              <Button variant="teal" className="w-100 fw-semibold">
                Solicitar evaluación
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Planes;
