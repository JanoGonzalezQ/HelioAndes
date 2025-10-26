import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneracion from './components/calculo';
import Navbar from './components/navbar';

function App() {
  


  return (
    <div className="App">
      <div className='container'>
        <Navbar/>
        <Titulo/>
        <Banner/>
        <CalculoRemuneracion/>
      </div>
    </div>
  );
}

export default App;
