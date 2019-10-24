import React from 'react';
import './assets/css/App.css';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      {/* <Peliculas /> */}
      <Router />

      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
