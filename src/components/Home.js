import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Slider titulo="Bienvenidos al Blog de Alex" btn="Ir al blog" />
        <div className="center">
          <div id="content">
            <h1 className="subheader">últimos Articulos</h1>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Home;
