import React from "react"; //React: Crear componentes en React.
import { Card } from "react-bootstrap";//Card:provee componentes ya estilizados con


function DescripcionTestimonio() {
  return (
    
    <div
      className="container my-5" //Usa la clase container para centrar y limitar el ancho del contenido.
      style={{                  //my-5 agrega márgenes verticales (arriba y abajo)
        backgroundImage: `linear-gradient(rgba(161, 8, 8, 0.7), rgba(0,0,0,0.7))`,
        backgroundRepeat: "no-repeat", //controlan cómo se muestra el fondo.
        backgroundPosition: "center", //controlan cómo se muestra el fondo.
        backgroundSize: "cover",   //controlan cómo se muestra el fondo.
        padding: "30px 0", //padding: "30px 0": da espacio interior arriba y abajo.
        borderRadius: "10px", //borderRadius: "10px": redondea las esquinas del bloque.
      }}
    >
      <h2
        className="text-start mb-5" //text-start: alinea el texto a la izquierda.
        style={{                   // mb-5: agrega margen inferior.
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
