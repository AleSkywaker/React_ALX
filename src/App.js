import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'Alex';

  function holaMundo(nombre) {
    let presentacion = (
      <div>
        <p>Esto es una prueba</p>
        <span> Hola {nombre} ¿Que tal?</span>;
      </div>
    );

    return presentacion;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {holaMundo(name)}
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
