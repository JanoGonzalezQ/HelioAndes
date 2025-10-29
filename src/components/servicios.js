import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Se importan las imagenes desde nuestra carpeta imagenes:
import card1 from './imagenes/card1.jpg';
import card2 from './imagenes/card2.png';
import card3 from './imagenes/card3.jpg';
import card4 from './imagenes/card4.jpg';
import { Container } from "react-bootstrap";

function DescripcionServicios() {
  return (
    <Container>
    <div className="row mt-3"
    style={{
        backgroundImage: `linear-gradient(rgba(161, 8, 8, 0.7), rgba(0,0,0,0.7))`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '30px 0',
        color: 'rgba(16, 15, 15, 0.7)',
        textAlign: 'left'
    }}>
        <h2>SERVICIOS</h2>
        <div className="row mt-3">

      <div className="col-lg-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card1} alt="Estudio Energético" />
          <Card.Body className="text-center">
            <Card.Title>1. Estudio Energético</Card.Title>
            <Card.Text style={{ fontSize: '0.9rem' }}>
              Antes de cada instalación, se realiza un estudio técnico para analizar el consumo del cliente, la orientación del techo y las condiciones climáticas de la zona. Esto permite dimensionar correctamente el sistema solar, optimizando la generación y el retorno de la inversión.
            </Card.Text>
            <Button variant="primary">Conoce más</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card2} alt="Instalación Certificada SEC" />
          <Card.Body className="text-center">
            <Card.Title>2. Instalación Certificada SEC</Card.Title>
            <Card.Text style={{ fontSize: '0.9rem' }}>
              Las instalaciones son ejecutadas por técnicos acreditados ante la Superintendencia de Electricidad y Combustibles (SEC), asegurando el cumplimiento de las normas eléctricas chilenas. Esto garantiza la seguridad del sistema y habilita su conexión formal a la red.
            </Card.Text>
            <Button variant="primary">Conoce más</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card3} alt="Monitoreo en Línea" />
          <Card.Body className="text-center">
            <Card.Title>3. Monitoreo en Línea</Card.Title>
            <Card.Text style={{ fontSize: '0.9rem' }}>
              Cada sistema cuenta con acceso a una plataforma de monitoreo remoto, donde el usuario puede visualizar en tiempo real la energía producida, el ahorro acumulado y el impacto ambiental positivo. Este seguimiento ayuda a detectar cualquier falla o desviación de rendimiento.
            </Card.Text>
            <Button variant="primary">Conoce más</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={card4} alt="Mantención Preventiva y Correctiva" />
          <Card.Body className="text-center">
            <Card.Title>4. Mantención Preventiva y Correctiva</Card.Title>
            <Card.Text style={{ fontSize: '0.9rem' }}>
              HELIOANDES ofrece planes de mantenimiento que incluyen limpieza de paneles, revisión de cableado, y control de componentes eléctricos. Con esto se prolonga la vida útil del sistema y se mantiene su eficiencia a lo largo del tiempo.
            </Card.Text>
            <Button variant="primary">Conoce más</Button>
          </Card.Body>
        </Card>
      </div>
      </div>

    </div>
    </Container>
  );
}

export default DescripcionServicios;
