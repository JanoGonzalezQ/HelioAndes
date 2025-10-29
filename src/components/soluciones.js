import React from 'react'; //Importaciones
import { Container } from 'react-bootstrap'; //Importaciones
import Button from 'react-bootstrap/Button'; //Importaciones
import Card from 'react-bootstrap/Card';
import CardKit1 from './imagenes/card_kit1.jpg'; //Importaciones imagenes
import CardKit2 from './imagenes/card_kit2.jpg'; //Importaciones imagenes
import CardKit3 from './imagenes/card_kit3.jpg'; //Importaciones imagenes


function TarjetaServicios() { 
  return (
    <Container>
         <div className="row mt-3" //crea una fila con un margen superior
    style={{
        backgroundImage: `linear-gradient(rgba(161, 8, 8, 0.7), rgba(0,0,0,0.7))`, //backgroundImage: genera el degradado de color.
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
        padding: '30px 0', //padding:agrega espacio vertical.
        color: 'rgba(255, 255, 255, 1)', //color del texto
        textAlign: 'left'
    }}>
        <h2>SOLUCIONES</h2>
      <div className="row mt-3">
            <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CardKit1} alt="Kit Hogar" />
            <Card.Body>
                <Card.Title>Kit Hogar (3–5 kW)</Card.Title>
                <Card.Text>
                Ideal para una casa promedio. 
                Cubre consumos esenciales: iluminación, refrigerador, TV, trabajo remoto y algunos equipos de climatización.
                </Card.Text>
                <Button variant="primary" href="#contacto">Contactanos</Button>
            </Card.Body>
            </Card> 
        
        
        </div>
         <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CardKit2} alt="Kit Pyme" />
            <Card.Body>
                <Card.Title>Kit Pyme (10–20 kW)</Card.Title>
                <Card.Text>
                Pensado para comercio o pequeños talleres. 
                Reduce costos operativos, estabiliza la cuenta de luz y mejora la imagen sustentable de tu negocio.
                </Card.Text>
                <Button variant="primary" href="#contacto">Contactanos</Button>
            </Card.Body>
            </Card> 
        
        
        </div>
         <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CardKit3} alt="Kit Off-Grid"/>
            <Card.Body>
                <Card.Title>Kit Off-Grid / Híbrido</Card.Title>
                <Card.Text>
                Solución con almacenamiento en baterías. 
                Mantiene equipos críticos activos incluso en cortes de luz. Ideal para zonas rurales o uso de respaldo.
                </Card.Text>
                <Button variant="primary" href="#contacto">Contactanos</Button>
            </Card.Body>
            </Card> 
        
        
        </div>
        
    </div>
    </div>
    </Container>
  );
}

export default TarjetaServicios;