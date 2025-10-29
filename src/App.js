import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import CalculoRemuneracion from './components/calculo';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import Servicios from './components/servicios';
import Soluciones from './components/soluciones';
import DescripcionPlanes from './components/planes';
import DescripcionTestimonio from './components/testimonios';
import DescripcionFooter from "./components/footer";
import FAQ from "./components/FAQ"

function App() {
  return (
    <div className="App">
      <div className='container'>

        {/* agrefamos un ID en cada seccion para el uso del navbar */}
        <div id="inicio">
          <Navbar />
        </div>

        
         <div id="hero">
          <Hero />
        </div>

        <div id="servicios">
          <Servicios/>
        </div>

        <div id="soluciones">
          <Soluciones/>
        </div>

        

        <div id="demo-calculadora">
          <CalculoRemuneracion />
        </div>

        <div id="planes">
          <DescripcionPlanes/>
        </div>

        <div id="testimonios">
          <DescripcionTestimonio/>
        </div>
        
        <div id="FAQ">
          <FAQ/>
        </div>

      </div>

      {/* dejamos esta seccion fuera del container*/}
      <div id="contacto">
        <Contacto />
      </div>

         <div id="footer">
          <DescripcionFooter/>
        </div>

        
    </div>
  );
}

export default App;
