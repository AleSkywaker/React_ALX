import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'Alex';
  let presentacion = <span> ¿Que tal?</span>;

  function holaMundo(nombre) {
    return <span>......man ==>{nombre}</span>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h6>
          Esto es una prueba {name} {presentacion} {holaMundo(name)}
        </h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
