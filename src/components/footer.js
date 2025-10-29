import React from "react";  //para definir un componente funcional
import { Container, Row, Col } from "react-bootstrap"; //para definir un componente funcional

function Footer() { //define un componente
  const year = new Date().getFullYear();//Calcula el año actual en tiempo de ejecución

  return (
    <footer className="bg-primary text-light py-4"> 
      <Container>
        <Row className="align-items-center">
          {/* Texto izquierdo */}
          <Col md={6} className="text-start small">
            © {year} HelioAndes Energía
          </Col>

          {/* Enlaces derechos */}
          <Col md={6} className="text-end small">
            <a
              href="/privacidad"
              className="text-light text-decoration-none mx-1"
            >
              Privacidad
            </a>
            ·
            <a
              href="/terminos"
              className="text-light text-decoration-none mx-1"
            >
              Términos
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer; //para que puedas importarlo en App.js
