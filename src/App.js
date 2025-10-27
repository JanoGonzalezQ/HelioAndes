import logo from './logo.svg';
import './App.css';
import Hero from './components/hero'
import CalculoRemuneracion from './components/calculo';
import Navbar from './components/navbar';

function App() {
  


  return (
    <div className="App">
      <div className='container'>
        <Navbar/>
        <Hero/>
        <CalculoRemuneracion/>
      </div>
    </div>
  );
}

export default App;
