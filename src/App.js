import React from 'react';
import logo from './logo.svg';
import './App.css';

import MiComponente from './components/MiComponente';

function App() {
  let name = 'Alex';

  function holaMundo(nombre) {
    let presentacion = (
      <div>
        <h2>Esto es una prueba</h2>
        <h3> Hola {nombre} ¿Que tal?</h3>
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
        {console.log('hola')}
        {holaMundo(name)}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a> */}
        <MiComponente />
      </header>
    </div>
  );
}

export default App;
