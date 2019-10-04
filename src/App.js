import React from 'react';
import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <section className="componentes">
          <section id="content">Contenido principal</section>
        </section>
        <Sidebar />
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
