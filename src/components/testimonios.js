import React from "react";
import { Card } from "react-bootstrap";


function DescripcionTestimonio() {
  return (
    
    <div
      className="container my-5"
      style={{
        backgroundImage: `linear-gradient(rgba(161, 8, 8, 0.7), rgba(0,0,0,0.7))`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "30px 0",
        borderRadius: "10px",
      }}
    >
      <h2
        className="text-start mb-5"
        style={{
          color: "rgba(16, 15, 15, 0.7)",
          fontWeight: "bold",
          marginLeft: "40px",
        }}
      >
        Testimonios
      </h2>

      <p className="text-center text-light mb-5">
        Clientes que ya confían en HELIOANDES.
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4 text-light">
        <div className="col">
          <Card className="h-100 text-center bg-transparent border-light shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold text-light">
                Alejandra, Ñuñoa
              </Card.Title>
              <Card.Text className="fst-italic text-light">
                "Instalación rápida y ahorro visible en la primera boleta."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 text-center bg-transparent border-light shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold text-light">
                Diego, Valdivia
              </Card.Title>
              <Card.Text className="fst-italic text-light">
                "El monitoreo me permite proyectar bien los consumos."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card className="h-100 text-center bg-transparent border-light shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold text-light">
                Carla, Copiapó
              </Card.Title>
              <Card.Text className="fst-italic text-light">
                "Excelente asesoría y postventa. 100% recomendados."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DescripcionTestimonio;
