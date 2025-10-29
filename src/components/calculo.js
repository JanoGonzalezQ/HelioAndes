import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function CalculadoraIntegral() {
  // --- ESTADOS ---
  const [panelW, setPanelW] = useState(0);
  const [cantidadPaneles, setCantidadPaneles] = useState(0);
  const [precioInversor, setPrecioInversor] = useState(0);
  const [precioBateria, setPrecioBateria] = useState(0);
  const [cantidadBaterias, setCantidadBaterias] = useState(0);
  const [estructura, setEstructura] = useState(0);
  const [instalacionBase, setInstalacionBase] = useState(0);
  const [pesoEnvio, setPesoEnvio] = useState(0);
  const [tipoTecho, setTipoTecho] = useState("");
  const [region, setRegion] = useState("");
  const [complejidad, setComplejidad] = useState("");
  const [subsidio, setSubsidio] = useState("");
  const [metodoEnvio, setMetodoEnvio] = useState("");
  const [garantia, setGarantia] = useState("");
  const [planPago, setPlanPago] = useState("");
  const [tipoPie, setTipoPie] = useState("Porcentaje");
  const [valorPie, setValorPie] = useState(0);

  // --- CONSTANTES ---
  const IVA = 0.19;
  const costoPorKg = 700;

  // --- CÁLCULOS BASE ---
  const potenciaKW = (panelW * cantidadPaneles) / 1000;

  const subtotalEquipos =
    parseFloat(precioInversor || 0) +
    parseFloat(precioBateria * cantidadBaterias || 0) +
    parseFloat(estructura || 0);

  // Recargo por tipo de techo
  let porcentajeTecho = 0;
  if (tipoTecho === "Teja/Asfalto") {
    porcentajeTecho = 0.05;
  } else if (tipoTecho === "Zinc/Planchas") {
    porcentajeTecho = 0.02;
  } else if (tipoTecho === "Hormigón") {
    porcentajeTecho = 0.07;
  }
  const recargoTecho = subtotalEquipos * porcentajeTecho;

  // Subsidio
  let porcentajeSubsidio = 0;
  if (subsidio === "Residencial") {
    porcentajeSubsidio = -0.08;
  } else if (subsidio === "Pyme") {
    porcentajeSubsidio = -0.05;
  }
  const valorSubsidio = (subtotalEquipos + recargoTecho) * porcentajeSubsidio;

  // Instalación según complejidad
  let porcentajeComplejidad = 0;
  if (complejidad === "Media") {
    porcentajeComplejidad = 0.08;
  } else if (complejidad === "Alta") {
    porcentajeComplejidad = 0.15;
  }
  const instalacionFinal =
    parseFloat(instalacionBase || 0) * (1 + porcentajeComplejidad);

  // Envío
  let baseRegion = 0;
  if (region === "RM") {
    baseRegion = 5000;
  } else if (region === "Norte") {
    baseRegion = 9000;
  } else if (region === "Sur") {
    baseRegion = 10000;
  } else if (region === "Austral") {
    baseRegion = 15000;
  }

  let envio = baseRegion + pesoEnvio * costoPorKg;
  if (metodoEnvio === "Expres") {
    envio = envio * 1.2;
  }

  // Garantía
  let porcentajeGarantia = 0;
  if (garantia === "12 meses") {
    porcentajeGarantia = 0.02;
  } else if (garantia === "24 meses") {
    porcentajeGarantia = 0.04;
  } else if (garantia === "36 meses") {
    porcentajeGarantia = 0.06;
  }
  const valorGarantia = subtotalEquipos * porcentajeGarantia;

  // IVA
  const valorIVA =
    (subtotalEquipos + recargoTecho + valorSubsidio + instalacionFinal) * IVA;

  // Total antes de financiar
  const totalAntesFinanciar =
    subtotalEquipos +
    recargoTecho +
    valorSubsidio +
    instalacionFinal +
    valorIVA +
    envio +
    valorGarantia;

  // Financiamiento
  let tasaMensual = 0;
  let nCuotas = 1;
  if (planPago === "6 cuotas") {
    tasaMensual = 0.012;
    nCuotas = 6;
  } else if (planPago === "12 cuotas") {
    tasaMensual = 0.011;
    nCuotas = 12;
  } else if (planPago === "24 cuotas") {
    tasaMensual = 0.01;
    nCuotas = 24;
  }

  let pie = 0;
  if (tipoPie === "Porcentaje") {
    pie = totalAntesFinanciar * (valorPie / 100);
  } else {
    pie = parseFloat(valorPie || 0);
  }

  const montoFinanciar = Math.max(totalAntesFinanciar - pie, 0);
  const interesTotal = montoFinanciar * tasaMensual * nCuotas;

  let cuota = 0;
  if (nCuotas > 1) {
    cuota = (montoFinanciar + interesTotal) / nCuotas;
  } else {
    cuota = totalAntesFinanciar;
  }

  const totalFinal = totalAntesFinanciar + interesTotal;

  // Helpers
  const reset = () => {
    window.location.reload();
  };

  const formato = (valor) =>
    isNaN(valor) ? "—" : "$ " + valor.toLocaleString("es-CL");

  // --- RENDER ---
  return (
    <Container className="my-4">
      <div
        className="row mt-3 rounded"
        style={{
          backgroundImage: `linear-gradient(rgba(72, 212, 82, 0.7), rgba(0,0,0,0.7))`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
          padding: "30px",
        }}
      >
        <h4 className="text-light mb-4">Costo de un sistema solar instalado</h4>

        {/* Columna izquierda: Formulario */}
        <div className="col-lg-6 text-light">
          <label className="form-label">Potencia del panel (W)</label>
          <input
            type="number"
            className="form-control"
            placeholder="450"
            value={panelW}
            onChange={(e) => setPanelW(e.target.value)}
          />

          <div className="form-group mt-3">
            <label className="form-label">Cantidad de paneles</label>
            <input
              type="number"
              className="form-control"
              placeholder="8"
              value={cantidadPaneles}
              onChange={(e) => setCantidadPaneles(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Inversor (precio)</label>
            <input
              type="number"
              className="form-control"
              placeholder="650000"
              value={precioInversor}
              onChange={(e) => setPrecioInversor(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Batería (precio unidad)</label>
            <input
              type="number"
              className="form-control"
              placeholder="320000"
              value={precioBateria}
              onChange={(e) => setPrecioBateria(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Cantidad baterías</label>
            <input
              type="number"
              className="form-control"
              placeholder="1"
              value={cantidadBaterias}
              onChange={(e) => setCantidadBaterias(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Estructura y cableado</label>
            <input
              type="number"
              className="form-control"
              placeholder="180000"
              value={estructura}
              onChange={(e) => setEstructura(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Instalación base</label>
            <input
              type="number"
              className="form-control"
              placeholder="350000"
              value={instalacionBase}
              onChange={(e) => setInstalacionBase(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Peso envío (kg)</label>
            <input
              type="number"
              className="form-control"
              placeholder="90"
              value={pesoEnvio}
              onChange={(e) => setPesoEnvio(e.target.value)}
            />
          </div>

          {/* Selects */}
          <div className="form-group mt-3">
            <label className="form-label">Tipo de techo</label>
            <select
              className="form-select"
              value={tipoTecho}
              onChange={(e) => setTipoTecho(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option>Teja/Asfalto</option>
              <option>Zinc/Planchas</option>
              <option>Hormigón</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Región</label>
            <select
              className="form-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option>RM</option>
              <option>Norte</option>
              <option>Sur</option>
              <option>Austral</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Complejidad instalación</label>
            <select
              className="form-select"
              value={complejidad}
              onChange={(e) => setComplejidad(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Subsidio</label>
            <select
              className="form-select"
              value={subsidio}
              onChange={(e) => setSubsidio(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option>Sin subsidio</option>
              <option>Residencial</option>
              <option>Pyme</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Método de envío</label>
            <select
              className="form-select"
              value={metodoEnvio}
              onChange={(e) => setMetodoEnvio(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option>Estándar</option>
              <option>Expres</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Garantía</label>
            <select
              className="form-select"
              value={garantia}
              onChange={(e) => setGarantia(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option>12 meses</option>
              <option>24 meses</option>
              <option>36 meses</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Plan de pago</label>
            <select
              className="form-select"
              value={planPago}
              onChange={(e) => setPlanPago(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option>Contado</option>
              <option>6 cuotas</option>
              <option>12 cuotas</option>
              <option>24 cuotas</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Tipo de pie</label>
            <select
              className="form-select"
              value={tipoPie}
              onChange={(e) => setTipoPie(e.target.value)}
            >
              <option>Porcentaje</option>
              <option>Monto fijo</option>
            </select>
          </div>

          <div className="form-group mt-3">
            <label className="form-label">Valor de pie</label>
            <input
              type="number"
              className="form-control"
              placeholder="10"
              value={valorPie}
              onChange={(e) => setValorPie(e.target.value)}
            />
          </div>

          <Button variant="secondary" className="mt-3" onClick={reset}>
            Reiniciar
          </Button>
        </div>

        {/* Columna derecha: Resultados */}
        <div className="col-lg-6 mt-4 mt-lg-0 text-light">
          <h5>Resumen del cálculo</h5>
          <Table striped bordered hover variant="dark">
            <tbody>
              {potenciaKW > 7 && cantidadBaterias === 0 && (
                <tr>
                  <td colSpan={2} style={{ backgroundColor: "#fff3cd", color: "#664d03" }}>
                    Recomendado considerar baterías para estabilidad del sistema.
                  </td>
                </tr>
              )}
              <tr>
                <td>Potencia estimada (kW)</td>
                <td>{isNaN(potenciaKW) ? "—" : potenciaKW.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Subtotal equipos</td>
                <td>{formato(subtotalEquipos)}</td>
              </tr>
              <tr>
                <td>Recargo techo</td>
                <td>{formato(recargoTecho)}</td>
              </tr>
              <tr>
                <td>Subsidio</td>
                <td>{formato(valorSubsidio)}</td>
              </tr>
              <tr>
                <td>Instalación final</td>
                <td>{formato(instalacionFinal)}</td>
              </tr>
              <tr>
                <td>IVA 19%</td>
                <td>{formato(valorIVA)}</td>
              </tr>
              <tr>
                <td>Envío</td>
                <td>{formato(envio)}</td>
              </tr>
              <tr>
                <td>Garantía</td>
                <td>{formato(valorGarantia)}</td>
              </tr>
              <tr>
                <td>Total antes de financiar</td>
                <td>{formato(totalAntesFinanciar)}</td>
              </tr>
              <tr>
                <td>Pie</td>
                <td>{formato(pie)}</td>
              </tr>
              <tr>
                <td>Interés total</td>
                <td>{formato(interesTotal)}</td>
              </tr>
              <tr>
                <td>Cuota</td>
                <td>{formato(cuota)}</td>
              </tr>
              <tr>
                <th>Total final</th>
                <th>{formato(totalFinal)}</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}

export default CalculadoraIntegral;
