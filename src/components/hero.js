import React from 'react';
import { Button } from 'react-bootstrap';
import logo2 from './imagenes/logo2.png';

function BannerPrincipal() {
  return (
    <div
      className='row mt-3'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${logo2})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '120px 0',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div className='col-lg-12'>
        <h1>Bienvenido a HELIOANDES</h1>
        <p>Energía solar accesible y confiable para tu hogar o pyme</p>

        <p className="mt-4">Ver catálogo HELIOANDES</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          {/* Botón para descargar el catálogo */}
          <Button
            variant="success"
            href="/catalogo_helioandes.pdf"
            download="catalogo_helioandes.pdf"
          >
            Descargar Catálogo
          </Button>

          {/* Botón para ir a la demo calculadora */}
          <Button
            variant="warning"
            href="#demo-calculadora"
          >
            Ir a la Demo Calculadora
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerPrincipal;