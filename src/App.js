import React from 'react';
import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Seccion from './components/Mainseccion';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <section className="componentes">
          <section id="content">
            <Seccion />
          </section>
        </section>
        <Sidebar />
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
