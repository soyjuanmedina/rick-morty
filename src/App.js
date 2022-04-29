import logo from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState(null);
  const reqCharacters = async (url) => {
    const api = await fetch(url);
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    setInfo(characterApi.info);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ?
          <Characters characters={characters} setCharacters={setCharacters} info={info} reqCharacters={reqCharacters} />
          :
          <>
            <img src={logo} className="img-home" alt="Rick & Morty" />
            <button onClick={() => reqCharacters('https://rickandmortyapi.com/api/character/')} className="btn-search">Buscar personajes</button>
          </>
        }
      </header>
    </div>
  );
}

export default App;
