import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function CalculadoraIntegral() {
  // --- Estados del formulario ---
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

  // --- Constantes ---
  const IVA = 0.19;
  const costoPorKg = 700;

  // --- Cálculos base ---
  const potenciaKW = (panelW * cantidadPaneles) / 1000;
  const subtotalEquipos =
    parseFloat(precioInversor || 0) +
    parseFloat(precioBateria * cantidadBaterias || 0) +
    parseFloat(estructura || 0);

  // Recargo por tipo de techo
  const porcentajeTecho =
    tipoTecho === "Teja/Asfalto"
      ? 0.05
      : tipoTecho === "Zinc/Planchas"
      ? 0.02
      : tipoTecho === "Hormigón"
      ? 0.07
      : 0;
  const recargoTecho = subtotalEquipos * porcentajeTecho;

  // Subsidio
  const porcentajeSubsidio =
    subsidio === "Residencial"
      ? -0.08
      : subsidio === "Pyme"
      ? -0.05
      : 0;
  const valorSubsidio = (subtotalEquipos + recargoTecho) * porcentajeSubsidio;

  // Instalación final según complejidad
  const porcentajeComplejidad =
    complejidad === "Media" ? 0.08 : complejidad === "Alta" ? 0.15 : 0;
  const instalacionFinal =
    parseFloat(instalacionBase || 0) *
    (1 + porcentajeComplejidad);

  // Envío
  const baseRegion =
    region === "RM"
      ? 5000
      : region === "Norte"
      ? 9000
      : region === "Sur"
      ? 10000
      : region === "Austral"
      ? 15000
      : 0;
  let envio = baseRegion + pesoEnvio * costoPorKg;
  if (metodoEnvio === "Expres") envio *= 1.2;

  // Garantía
  const porcentajeGarantia =
    garantia === "12 meses"
      ? 0.02
      : garantia === "24 meses"
      ? 0.04
      : garantia === "36 meses"
      ? 0.06
      : 0;
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

  // --- Financiamiento ---
  const tasaMensual =
    planPago === "6 cuotas"
      ? 0.012
      : planPago === "12 cuotas"
      ? 0.011
      : planPago === "24 cuotas"
      ? 0.01
      : 0;
  const nCuotas =
    planPago === "6 cuotas"
      ? 6
      : planPago === "12 cuotas"
      ? 12
      : planPago === "24 cuotas"
      ? 24
      : 1;

  const pie =
    tipoPie === "Porcentaje"
      ? totalAntesFinanciar * (valorPie / 100)
      : parseFloat(valorPie || 0);
  const montoFinanciar = Math.max(totalAntesFinanciar - pie, 0);
  const interesTotal = montoFinanciar * tasaMensual * nCuotas;
  const cuota =
    nCuotas > 1
      ? (montoFinanciar + interesTotal) / nCuotas
      : totalAntesFinanciar;
  const totalFinal = totalAntesFinanciar + interesTotal;

  // --- Funciones auxiliares ---
  const reset = () => {
    window.location.reload();
  };

  const formato = (valor) =>
    isNaN(valor) ? "—" : "$ " + valor.toLocaleString("es-CL");

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Calculadora Integral de Sistema Solar</h3>
      <div className="row g-4">
        {/* --- COLUMNA IZQUIERDA --- */}
        <div className="col-12 col-lg-6">
          <h5>Formulario</h5>
          <div className="form-group mb-2">
            <label>Potencia del panel (W)</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={panelW}
              onChange={(e) => setPanelW(e.target.value)}
              placeholder="450"
            />
          </div>
          <div className="form-group mb-2">
            <label>Cantidad de paneles</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={cantidadPaneles}
              onChange={(e) => setCantidadPaneles(e.target.value)}
              placeholder="8"
            />
          </div>
          <div className="form-group mb-2">
            <label>Inversor (precio)</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={precioInversor}
              onChange={(e) => setPrecioInversor(e.target.value)}
              placeholder="650000"
            />
          </div>
          <div className="form-group mb-2">
            <label>Batería (precio unidad)</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={precioBateria}
              onChange={(e) => setPrecioBateria(e.target.value)}
              placeholder="320000"
            />
          </div>
          <div className="form-group mb-2">
            <label>Cantidad baterías</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={cantidadBaterias}
              onChange={(e) => setCantidadBaterias(e.target.value)}
              placeholder="1"
            />
          </div>
          <div className="form-group mb-2">
            <label>Estructura y cableado</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={estructura}
              onChange={(e) => setEstructura(e.target.value)}
              placeholder="180000"
            />
          </div>
          <div className="form-group mb-2">
            <label>Instalación base</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={instalacionBase}
              onChange={(e) => setInstalacionBase(e.target.value)}
              placeholder="350000"
            />
          </div>
          <div className="form-group mb-2">
            <label>Peso envío (kg)</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={pesoEnvio}
              onChange={(e) => setPesoEnvio(e.target.value)}
              placeholder="90"
            />
          </div>

          {/* Selects */}
          <div className="form-group mb-2">
            <label>Tipo de techo</label>
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
          <div className="form-group mb-2">
            <label>Región</label>
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
          <div className="form-group mb-2">
            <label>Complejidad instalación</label>
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
          <div className="form-group mb-2">
            <label>Subsidio</label>
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
          <div className="form-group mb-2">
            <label>Método de envío</label>
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
          <div className="form-group mb-2">
            <label>Garantía</label>
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
          <div className="form-group mb-2">
            <label>Plan de pago</label>
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
          <div className="form-group mb-2">
            <label>Tipo de pie</label>
            <select
              className="form-select"
              value={tipoPie}
              onChange={(e) => setTipoPie(e.target.value)}
            >
              <option>Porcentaje</option>
              <option>Monto fijo</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label>Valor de pie</label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={valorPie}
              onChange={(e) => setValorPie(e.target.value)}
              placeholder="10"
            />
          </div>

          <Button variant="secondary" className="mt-3 me-2" onClick={reset}>
            Reiniciar
          </Button>
        </div>

        {/* --- COLUMNA DERECHA --- */}
        <div className="col-12 col-lg-6">
          <h5>Resumen</h5>
          {potenciaKW > 7 && cantidadBaterias === 0 && (
            <div className="alert alert-warning p-2">
              ⚠️ Recomendado considerar almacenamiento para estabilidad del sistema.
            </div>
          )}

          <Table striped bordered>
            <tbody>
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
    </div>
  );
}

export default CalculadoraIntegral;
