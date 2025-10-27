import React from 'react';

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
      </div>
    </div>
  );
}

export default BannerPrincipal;
