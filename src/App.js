import logo from './img/rick-morty.png';
import './App.css';

function App() {

  const reqApi = () => {
    console.log('clicmkiin',);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={logo} className="img-home" alt="Rick & Morty" />
        <button onClick={reqApi} className="btn-search">Buscar personajes</button>
      </header>
    </div>
  );
}

export default App;
