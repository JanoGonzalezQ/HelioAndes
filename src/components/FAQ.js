import React from 'react';
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

function Acordeon() {
  return (
    <Container>
      <div
        className="row mt-3 mb-1 rounded"
        style={{
          backgroundImage: `linear-gradient(rgba(72, 161, 8, 0.7), rgba(0,0,0,0.7))`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "30px",
          color: "rgba(16, 15, 15, 0.7)",
          textAlign: "left",
        }}
      >
        <h2 className="text-light mb-4 ">FAQ</h2>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Qué garantía tienen los paneles solares?</Accordion.Header>
        <Accordion.Body>
           Los paneles solares de HelioAndes cuentan con una garantía de rendimiento de 25 años y una garantía de producto de 10 años otorgada por el fabricante. Además, la instalación realizada por técnicos certificados cuenta con una garantía de servicio de 2 años.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Qué cubre la garantía de instalación?</Accordion.Header>
        <Accordion.Body>
            La garantía de instalación cubre cualquier desperfecto derivado del montaje, cableado o conexión eléctrica dentro del periodo garantizado. No cubre daños ocasionados por terceros, fenómenos climáticos o intervenciones externas no autorizadas.
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="2">
        <Accordion.Header>¿Cada cuánto se recomienda realizar mantención al sistema?</Accordion.Header>
        <Accordion.Body>
            Recomendamos una mantención preventiva una vez al año, la cual incluye limpieza de paneles, revisión de conexiones y chequeo del inversor. Esto asegura un rendimiento óptimo del sistema.
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="3">
        <Accordion.Header>¿Puedo revisar cuánta energía generan mis paneles?</Accordion.Header>
        <Accordion.Body>
           Sí. Todos nuestros sistemas incluyen acceso a una plataforma de monitoreo en línea, donde puedes ver en tiempo real la producción, el ahorro económico y el impacto ambiental positivo generado por tu instalación.
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="4">
        <Accordion.Header>¿Cuánto demora la instalación de un sistema solar?</Accordion.Header>
        <Accordion.Body>
            El proceso completo toma entre 3 a 10 días hábiles, dependiendo del tamaño del sistema, la complejidad del techo y las condiciones climáticas. Antes de instalar, se realiza un estudio energético para asegurar un dimensionamiento correcto.
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="5">
        <Accordion.Header>¿Necesito modificar mi red eléctrica para instalar paneles solares?</Accordion.Header>
        <Accordion.Body>
            Generalmente no, pero en algunos casos se requiere una adecuación del tablero eléctrico para cumplir las normas SEC. Nuestro equipo evalúa esto durante el estudio técnico previo.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </Container>
  );
}

export default Acordeon;