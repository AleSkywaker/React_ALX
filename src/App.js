import React from 'react';
import './assets/css/App.css';


import Peliculas from './components/Peliculas';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      {/* <Peliculas /> */}
      <Router />
    </div>
  );
}

export default App;
